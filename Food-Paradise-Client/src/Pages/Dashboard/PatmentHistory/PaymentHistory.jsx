import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";


const PaymentHistory = () => {
    const {user} = useAuth();
    return (
        <div>
            <SectionTitle heading={"Payment History"} subHeading={"At a Glance"}></SectionTitle>
        </div>
    );
};

export default PaymentHistory;