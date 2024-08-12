import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";

const Featured = () => {
    return (
        <section>
            <SectionTitle subHeading={'should try'} heading={"Chef Recommended"}></SectionTitle>
            <div>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div>
                    <p>Aug 20, 2024</p>
                    <p className="uppercase">Where Can I get some</p>
                    <p>Fuska, also known as Phuchka or Puchka, is a beloved street food originating from the Indian subcontinent, particularly popular in Bangladesh and Kolkata, India. It consists of crispy, hollow puris filled with a spicy and tangy mixture of mashed potatoes, chickpeas, and tamarind water.Fuska is enjoyed as a snack and is often sold by street vendors. It’s known for its unique combination of textures and flavors, making it a favorite among locals and visitors alike.</p>
                    <button className="btn btn-outline uppercase">Order Now</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;