
import { Helmet} from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/imagebg.png';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import newDessert from '../../../assets/menu/newDessert.png';
import newPizza from '../../../assets/menu/newPizza.png';
import newSalad from '../../../assets/menu/newSalad.jpg';
import newSoup from '../../../assets/menu/newSoup.jpg';

const Menu = () => {

    const [menu] = useMenu();

    const saladItems = menu.filter(item => item.category === 'salad');
    const soupItems = menu.filter(item => item.category === 'soup');
    const dessertItems = menu.filter(item => item.category === 'dessert');
    const pizzaItems = menu.filter(item => item.category === 'pizza');
    const offeredItems = menu.filter(item => item.category === 'offered');

    return (
        <div>
           <Helmet>
                <title>Food Paradise | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"Our Menu"} shortDes={"Would You Like To Try A Dish?"}></Cover>

            <SectionTitle subHeading={"Don't miss"} heading={"Today's Offer"}></SectionTitle>

            <MenuCategory items={offeredItems}></MenuCategory>

            <MenuCategory items={dessertItems} img={newDessert} title="dessert" shortDes={"A chocolate lava cake is a decadent dessert that features a rich, molten chocolate center encased in a soft, spongy cake. When you cut into the cake, the warm, gooey chocolate flows out, creating a delightful contrast with the outer layer."}></MenuCategory>

            <MenuCategory items={pizzaItems} title="pizza" img={newPizza} shortDes={"Pizza is a beloved Italian dish that consists of a flat, round base of leavened wheat dough topped with tomato sauce, cheese (typically mozzarella), and various other ingredients."}></MenuCategory>

            <MenuCategory items={saladItems} img={newSalad} title="salad" shortDes={"salad is a versatile dish typically made from a mixture of fresh vegetables, fruits, grains, or proteins, often served with a flavorful dressing."}></MenuCategory>

            <MenuCategory items={soupItems} img={newSoup} title="soup" shortDes={"Soup is a primarily liquid dish, typically served warm or hot, made by combining ingredients such as meat, vegetables, or grains with stock, milk, or water."}></MenuCategory>

        </div>
    );
};

export default Menu;