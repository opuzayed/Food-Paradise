import Cover from '../../Shared/Cover/Cover';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const MenuCategory = ({ items, title, img, shortDes }) => {
    return (

        <div>
            {title && shortDes && <Cover img={img} title={title} shortDes={shortDes}></Cover>}
            <div className='grid md:grid-cols-2 gap-10 mb-20'>
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;