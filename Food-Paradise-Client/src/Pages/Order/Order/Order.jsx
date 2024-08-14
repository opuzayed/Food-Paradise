import { useState } from 'react';
import orderImg from '../../../assets/shop/neworderbg.jpg';
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';

const Order = () => {

    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();

    const saladItems = menu.filter(item => item.category === 'salad');
    const soupItems = menu.filter(item => item.category === 'soup');
    const dessertItems = menu.filter(item => item.category === 'dessert');
    const pizzaItems = menu.filter(item => item.category === 'pizza');
    const drinksItems = menu.filter(item => item.category === 'drinks');

    return (
        <>
            <Cover img={orderImg} title={"Order Food"} shortDes={"Would You Like To Try Our Dish? Order Your Favourite Food, which is available right now, also enjoy discount for every item."} className="mb-20"></Cover>
            <div className='mx-auto text-center md:w-4/12'>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>
                       
                    </TabList>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                    
                </Tabs>
            </div>
        </>

    );
};

export default Order;