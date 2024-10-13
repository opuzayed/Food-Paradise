import { Link } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import CustomButton from "../../../Components/CustomButton/CustomButton";
import Container from "../../../Components/Container/Container";
import ('./featured.css');

const Featured = () => {
    return (
        <section className="featured-item text-white pt-4 lg:pt-32 bg-fixed">
            <SectionTitle subHeading={'should try'} heading={"Chef Recommended"}></SectionTitle>
            <Container>
            <div className="md:flex justify-center items-center pb-14 lg:pb-44 pt-8 lg:pt-14">
                <div>
                    <img src={featuredImg} alt="Feature Image" className="rounded-xl shadow-xl mb-8 md:mb-0" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2024</p>
                    <p className="uppercase">Where Can I get some</p>
                    <p>Fuska, also known as Phuchka or Puchka, is a beloved street food originating from the Indian subcontinent, particularly popular in Bangladesh and Kolkata, India.It consists of crispy, hollow puris filled with a spicy and tangy mixture of mashed potatoes, chickpeas, and tamarind water.Fuska is enjoyed as a snack and is often sold by street vendors.</p>
                    <Link to='/order/salad'><CustomButton btnText={'order now'}></CustomButton></Link>
                </div>
            </div>
            </Container>
        </section>
    );
};

export default Featured;
// pb-10 pt-12