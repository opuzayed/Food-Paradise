import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useNavigate } from "react-router-dom";


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
        <div className="p-4 md:p-8 lg:p-12 xl:p-16">
      <SectionTitle heading={"Payment History"} subHeading={"At a Glance"} />
      <h2 className="text-3xl font-medium mb-6">Total Payments : {payments.length} </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          {/* Head */}
          <thead className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white border-b border-gray-300">
            <tr>
              <th className="p-4 text-center font-semibold">#</th>
              <th className="p-4 text-center font-semibold">EMAIL</th>
              <th className="p-4 text-center font-semibold">TOTAL PRICE</th>
              <th className="p-4 text-center font-semibold">TRANSACTION ID</th>
              <th className="p-4 text-center font-semibold">PAYMENT DATE</th>
              <th className="p-4 text-center font-semibold">STATUS</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {payments.map((payment, index) => (
              <tr
                key={payment._id}
                className="relative transition-transform duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-gray-100 hover:to-cyan-200"
              >
                <td className="p-4 text-center text-lg font-semibold">{index + 1}</td>
                <td className="p-4 text-center text-lg font-semibold">{payment.email}</td>
                <td className="p-4 text-center text-lg font-semibold">${payment.price.toFixed(2)}</td>
                <td className="p-4 text-center text-lg font-semibold">${payment.transactionId}</td>
                <td className="p-4 text-center text-lg font-semibold">{payment.date}</td>
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