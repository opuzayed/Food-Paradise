
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';
import { Link } from 'react-router-dom';

const PopularMenu = () => {
    
    const [menu] = useMenu();
    const popularItem = menu.filter(item => item.category === 'popular');
    
    return (
        <section className='mb-20'>
            <SectionTitle subHeading={'check it out'} heading={'From Our Menu'}></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popularItem.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <Link to='/menu'><button className="btn btn-outline btn-info uppercase border-0 border-b-4 mt-6 block mx-auto">View Full Menu</button></Link>
        </section>
    );
};

export default PopularMenu;