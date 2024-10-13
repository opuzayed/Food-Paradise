

const CustomButton = ({btnText, onClick, padding="py-2 px-4", icon, classBG="bg-blue-500 hover:bg-blue-700"},  className="") => {
    return (
    <button onClick={onClick}
   
    className={`${classBG} text-white font-semibold rounded transition-colors duration-300 inline-flex items-center mt-5 uppercase ${padding} ${className}`}>
        {btnText}{icon && icon}
    </button>
    );
};

export default CustomButton;