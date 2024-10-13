import { Link } from 'react-router-dom';
import Cover from '../../Shared/Cover/Cover';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Container from '../../../Components/Container/Container';
import CustomButton from '../../../Components/CustomButton/CustomButton';

const MenuCategory = ({ items, title, img, shortDes }) => {
    return (

        <div>
            {title && shortDes && <Cover img={img} title={title} shortDes={shortDes}></Cover>}
            <Container>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            
            <div className='text-center my-24 mt-5'>
            {
                title && shortDes && <Link to={`/order/${title}`}>
                {/* <button className="btn btn-outline btn-info uppercase border-0 border-b-4 mb-16 block mx-auto">order your faviourite {title}</button> */}
                <CustomButton btnText={`order your faviourite ${title}`}></CustomButton>
            </Link>
            }
            </div>
            </Container>
        </div>

    );
};

export default MenuCategory;