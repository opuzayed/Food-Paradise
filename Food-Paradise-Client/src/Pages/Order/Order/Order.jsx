import orderImg from '../../../assets/shop/neworderbg.jpg';
import Cover from '../../Shared/Cover/Cover';

const Order = () => {
    return (
        <div>
            <Cover img={orderImg} title={"Order Food"} shortDes={"Order Your Favourite Food, which is available right now, also enjoy discount for every item."}></Cover>
        </div>
    );
};

export default Order;