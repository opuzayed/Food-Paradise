import { useQuery } from "@tanstack/react-query";
import Container from "../../../Components/Container/Container";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";

const UserHome = () => {
  const { user } = useAuth();
  const [cart] = useCart();

  const axiosSecure = useAxiosSecure();

        const {data: payments = []} = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`);
            return res.data;
        }
    });

 const totalPayments = payments.reduce((sum, payment) => sum + payment.price, 0);


  return (



    <div>
      <h2 className="text-2xl font-semibold font-serif text-cyan-500">
        <span>Hi! Welcome </span>
        {user?.displayName ? user.displayName : "Back"}
      </h2>
        <Container>
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="p-24 border border-gray-200 flex flex-col justify-center items-center text-center rounded-xl shadow-card-shadow">
            <h6 className="text-xl mb-4">Total Cart Items</h6>
            <div className="text-4xl font-semibold">{cart.length}</div>
          </div>
          <div className="p-24 border border-gray-200 flex flex-col justify-center items-center text-center rounded-xl shadow-card-shadow">
            <h6 className="text-xl mb-4">Payments Till Now</h6>
            <div className="text-4xl font-semibold">${totalPayments}</div>
          </div>
      </div>
        </Container>
    </div>
  );
};

export default UserHome;
