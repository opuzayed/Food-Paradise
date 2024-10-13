

const SliderContent = ({img, title}) => {
    return (
        <div className='relative group py-3'>
            <img src={img} alt="image" className="object-cover rounded-xl transition-all duration-300 group-hover:scale-[1.02]" />
            <h4 className='absolute text-2xl lg:text-3xl bottom-0 left-0 py-5 uppercase w-full text-center text-white font-bold'>{title}</h4>
        </div>
    );
};

export default SliderContent;