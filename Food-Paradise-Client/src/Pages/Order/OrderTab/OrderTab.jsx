
import Container from '../../../Components/Container/Container';
import FoodCard from '../../../Components/FoodCard/FoodCard';

const OrderTab = ({ items }) => {
    return (
        <Container>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>
        </Container>
    );
};

export default OrderTab;