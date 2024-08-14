import React from 'react';
import { Helmet} from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/imagebg.png';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

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
        </div>
    );
};

export default Menu;