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
                <SwiperSlide><img src={slide1} alt="" />
                    <h4 className='text-3xl uppercase text-center text-white -mt-20 font-bold'>Salad</h4>
                </SwiperSlide>
                <SwiperSlide><img src={slide2} alt="" />
                    <h4 className='text-3xl uppercase text-center text-white -mt-20 font-bold'>Pizza</h4>
                </SwiperSlide>
                <SwiperSlide><img src={slide3} alt="" />
                    <h4 className='text-3xl uppercase text-center text-white -mt-20 font-bold'>Soup</h4>
                </SwiperSlide>
                <SwiperSlide><img src={slide4} alt="" />
                    <h4 className='text-3xl uppercase text-center text-white -mt-20 font-bold'>Dessert</h4>
                </SwiperSlide>
                <SwiperSlide><img src={slide5} alt="" />
                    <h4 className='text-3xl uppercase text-center text-white -mt-20 font-bold'>Haleem</h4>
                </SwiperSlide>
                <SwiperSlide><img src={slide6} alt="" />
                    <h4 className='text-3xl uppercase text-center text-white -mt-20 font-bold'>Grill</h4>
                </SwiperSlide>
                <SwiperSlide><img src={slide7} alt="" />
                    <h4 className='text-3xl uppercase text-center text-white -mt-20 font-bold'>Seekh Kebab</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide8} alt="" />
                    <h4 className='text-3xl uppercase text-center text-white -mt-20 font-bold'>
                        Kacchi Biryani
                    </h4>
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default Category;