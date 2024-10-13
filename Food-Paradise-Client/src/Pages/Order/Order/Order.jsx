import { useEffect, useState } from 'react';
import orderImg from '../../../assets/shop/neworderbg.jpg';
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Order = () => {

    const categories = ['Salad', 'Pizza', 'Soup', 'Dessert', 'Drinks'];
    const { category } = useParams();

    const [tabIndex, setTabIndex] = useState(0);
    useEffect(() => {
        const initialIndex = categories.indexOf(category.charAt(0).toUpperCase() + category.slice(1));
        if (initialIndex !== -1) {
          setTabIndex(initialIndex);
        }
      }, [category]);

    const [menu] = useMenu();


    const saladItems = menu.filter(item => item.category === 'salad');
    const soupItems = menu.filter(item => item.category === 'soup');
    const dessertItems = menu.filter(item => item.category === 'dessert');
    const pizzaItems = menu.filter(item => item.category === 'pizza');
    const drinksItems = menu.filter(item => item.category === 'drinks');

    return (
        <>
            <Helmet>
                <title>Food-Paradise | Order Food</title>
            </Helmet>
            <Cover img={orderImg} title={"Order Food"} shortDes={"Would You Like To Try Our Dish? Order Your Favourite Food, which is available right now, also enjoy discount for every item."} className="mb-20"></Cover>
            <div className='mb-20'>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className='text-center font-bold text-2xl text-sky-600 mb-10'>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>

                    </TabList>
                    <TabPanel>
                        <OrderTab items={saladItems}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={pizzaItems}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={soupItems}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={dessertItems}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={drinksItems}></OrderTab>
                    </TabPanel>

                </Tabs>
            </div>
        </>

    );
};

export default Order;