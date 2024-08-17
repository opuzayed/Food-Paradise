import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import slide6 from '../../../assets/home/slide6.jpg';
import slide7 from '../../../assets/home/slide7.jpg';
import slide8 from '../../../assets/home/slide8.jpg';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import SliderContent from './CategoryContent';
const Category = () => {
    return (
        <>
        <SectionTitle subHeading={'From 12:00 pm to 11:00 pm'} heading={'Order Online'}></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-20"
            >
                <SwiperSlide>
                    <SliderContent img={slide1} title="salad"></SliderContent>  
                </SwiperSlide>
                <SwiperSlide>
                    <SliderContent img={slide2} title="pizza"></SliderContent>  
                </SwiperSlide>
                <SwiperSlide>
                <SliderContent img={slide3} title="soup"></SliderContent> 
                </SwiperSlide>
                <SwiperSlide>
                <SliderContent img={slide4} title="dessert"></SliderContent> 
                </SwiperSlide>
                <SwiperSlide>
                <SliderContent img={slide5} title="halim"></SliderContent> 
                </SwiperSlide>
                <SwiperSlide>
                <SliderContent img={slide6} title="grill"></SliderContent> 
                </SwiperSlide>
                <SwiperSlide>
                <SliderContent img={slide7} title="seekh kebab"></SliderContent> 
                </SwiperSlide>
                <SwiperSlide>
                <SliderContent img={slide8} title="biryani"></SliderContent> 
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default Category;