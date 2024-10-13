import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/home/01.jpg';
import img2 from '../../../assets/home/02.jpg';
import img3 from '../../../assets/home/03.png';
import img4 from '../../../assets/home/04.jpg';
import img5 from '../../../assets/home/05.png';
import img6 from '../../../assets/home/06.png';
import './Banner.css';
const Banner = () => {
    return (
        <div className="pt-[65px]">
        <Carousel className="mb-20 text-center custom-carousel">
            <div>
                <img src={img5} alt="image1"/>
            </div>
            <div>
                <img src={img4} alt="image2"/>
            </div>
            <div>
                <img src={img6} alt="image3"/>
            </div>
            <div>
                <img src={img2} alt="image4"/>
            </div>
            <div>
                <img src={img1} alt="image5"/>
            </div>
            <div>
                <img src={img3} alt="image6"/>
            </div>
        </Carousel>
        </div>
    );
};

export default Banner;