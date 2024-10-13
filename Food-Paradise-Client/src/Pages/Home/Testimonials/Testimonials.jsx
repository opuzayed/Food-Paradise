import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import Container from '../../../Components/Container/Container';
import "./Testimonials.css"

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch reviews');
        }
        return res.json();
      })
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="mb-20 bg-sky-100 rounded-lg py-20">
        <SectionTitle subHeading="Loading..." heading="Please Wait" />
        <p className="text-center text-gray-500">Fetching reviews...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="mb-20 bg-sky-100 rounded-lg py-20">
        <SectionTitle subHeading="Error" heading="Unable to Fetch Testimonials" />
        <p className="text-center text-red-500">{error}</p>
      </section>
    );
  }

  if (reviews.length === 0) {
    return (
      <section className="mb-20 bg-sky-100 rounded-lg py-20">
        <SectionTitle subHeading="What Our Client Say" heading="Testimonials" />
        <p className="text-center text-gray-500">No reviews available at the moment.</p>
      </section>
    );
  }

  return (
    <section className=" bg-sky-100 rounded-lg py-20">
      <SectionTitle subHeading="What Our Client Say" heading="Testimonials" />
      <Container>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="mx-4 md:mx-16 flex flex-col items-center">
              <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
              <blockquote className="text-center mt-4">{review.details}</blockquote>
              <cite className="text-2xl text-orange-300 mt-4">{review.name}</cite>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </Container>
    </section>
  );
};

export default Testimonials;
