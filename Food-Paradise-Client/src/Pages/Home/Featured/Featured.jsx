import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import ('./featured.css');

const Featured = () => {
    return (
        <section className="featured-item text-white pt-32">
            <SectionTitle subHeading={'should try'} heading={"Chef Recommended"}></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 px-40 pt-14">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2024</p>
                    <p className="uppercase">Where Can I get some</p>
                    <p>Fuska, also known as Phuchka or Puchka, is a beloved street food originating from the Indian subcontinent, particularly popular in Bangladesh and Kolkata, India.It consists of crispy, hollow puris filled with a spicy and tangy mixture of mashed potatoes, chickpeas, and tamarind water.Fuska is enjoyed as a snack and is often sold by street vendors.</p>
                    <button className="btn btn-outline btn-info uppercase border-0 border-b-4 mt-2">Order Now</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;
// pb-10 pt-12