import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';
import { Link } from 'react-router-dom';
import Container from '../../../Components/Container/Container';
import CustomButton from '../../../Components/CustomButton/CustomButton';

const PopularMenu = () => {
    
    const [menu] = useMenu();
    const popularItem = menu.filter(item => item.category === 'popular');
    
    return (
        <section className=' bg-sky-100 py-20 rounded-lg'>
            <Container>
            <SectionTitle subHeading={'check it out'} heading={'From Our Menu'}></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popularItem.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className='text-center mt-5'>
            <Link to='/menu'><CustomButton btnText={'View Full Menu'}></CustomButton></Link>
            </div>
            </Container>
        </section>
    );
};

export default PopularMenu;