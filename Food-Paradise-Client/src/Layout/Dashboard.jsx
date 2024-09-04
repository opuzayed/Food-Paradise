import { NavLink } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-rose-300">
            <ul>
                <li><NavLink to='/dashboard/cart'>My Cart</NavLink></li>
            </ul>
            </div>
            <div className="flex-1">
                <outlet></outlet>
            </div>
        </div>
    );
};

export default Dashboard;
