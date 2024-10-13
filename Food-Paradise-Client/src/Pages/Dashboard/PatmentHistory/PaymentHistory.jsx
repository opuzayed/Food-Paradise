import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useNavigate } from "react-router-dom";
import moment from "moment";


const PaymentHistory = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

        const {data: payments = []} = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`);
            return res.data;
        }
    });

    return (
        <div className="px-4">
      <SectionTitle heading={"Payment History"} subHeading={"At a Glance"} />
      <h2 className="text-3xl font-medium mb-6">Total Payments : {payments.length} </h2>
      <div className="overflow-x-auto w-500px lg:w-full rounded-lg shadow-border">
        <table className="min-w-full bg-white rounded-lg shadow-border w-full">
          {/* Head */}
          <thead className=" text-black border-b border-gray-200">
            <tr>
              <th className="p-4 text-center font-semibold">#</th>
              <th className="p-4 text-center font-semibold">EMAIL</th>
              <th className="p-4 text-center font-semibold text-nowrap">TOTAL PRICE</th>
              <th className="p-4 text-center font-semibold">TRANSACTION ID</th>
              <th className="p-4 text-center font-semibold">PAYMENT DATE</th>
              <th className="p-4 text-center font-semibold">STATUS</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {payments.map((payment, index) => (
              <tr
                key={payment._id}
                className="relative transition-all duration-300 hover:bg-sky-100 border-b last:border-b-0 border-gray-200"
              >
                <td className="p-4 text-center text-lg font-semibold">{index + 1}</td>
                <td className="p-4 text-center text-lg font-semibold">{payment.email}</td>
                <td className="p-4 text-center text-lg font-semibold">${payment.price.toFixed(2)}</td>
                <td className="p-4 text-center text-lg font-semibold">{payment.transactionId}</td>
                <td className="p-4 text-center text-lg font-semibold">{moment(payment.date).format('MMMM Do YYYY, h:mm A')}</td>
                <td className="p-4 text-center text-lg font-semibold">{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    </div>
    );
};

export default PaymentHistory;