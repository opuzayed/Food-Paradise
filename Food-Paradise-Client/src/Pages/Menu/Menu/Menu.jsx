import React from 'react';
import { Helmet} from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/imagebg.png';
const Menu = () => {
    return (
        <div>
           <Helmet>
                <title>Food Paradise | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"Our Menu"}></Cover>
        </div>
    );
};

export default Menu;