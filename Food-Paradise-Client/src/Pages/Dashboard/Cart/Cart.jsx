import useCart from "../../../hooks/useCart";


const Cart = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price ,0);
    return (
        <div>
            <div className="flex justify-around">
            <h2 className="text-3xl font-medium">
               ITEMS: {cart.length}
            </h2>
            <h2 className="text-3xl font-medium">TOTAL PRICE: {totalPrice}</h2>
            <button className="btn btn-primary">PAY</button>
            </div>
        </div>
    );
};

export default Cart;