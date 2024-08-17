

const SliderContent = ({img, title}) => {
    return (
        <div className='relative'>
            <img src={img} alt="image" />
            <h4 className='absolute text-3xl bottom-0 left-0 py-5 uppercase w-full text-center text-white font-bold'>{title}</h4>
        </div>
    );
};

export default SliderContent;