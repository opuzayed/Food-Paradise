import { Link } from 'react-router-dom';
import Cover from '../../Shared/Cover/Cover';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const MenuCategory = ({ items, title, img, shortDes }) => {
    return (

        <div>
            {title && shortDes && <Cover img={img} title={title} shortDes={shortDes}></Cover>}
            <div className='grid md:grid-cols-2 gap-10 mb-20 px-20'>
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            
            {
                title && shortDes && <Link to={`/order/${title}`}>
                <button className="btn btn-outline btn-info uppercase border-0 border-b-4 mb-16 block mx-auto">order your faviourite {title}</button>
            </Link>
            }
        </div>

    );
};

export default MenuCategory;