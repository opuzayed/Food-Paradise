import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const FoodCard = ({ item }) => {

    const { name, recipe, image, price, _id } = item;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = food => {
       if(user && user.email)
       {
        console.log(user.email, food);
        const cartItem = {
            menuId : _id,
            email : user.email,
            name,
            image,
            price
        }
        axios.post('http://localhost:5000/carts', cartItem)
        .then(res => {
            console.log(res.data);
        })
       }
       else
       {
        Swal.fire({
            title: "You Are Not Logged In?",
            text: "Please Login To Add To The Cart",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Logged In"
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/login', { state: { from: location} });
            }
          });
       }
    }

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt="Food"
                    className="rounded-xl" />
            </figure>
            <p className="bg-slate-900 text-white absolute right-14 my-14 px-1 py-1">${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button onClick={()=> handleAddToCart(item)} className="btn btn-outline border-orange-300 btn-info uppercase border-0 border-b-4">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;