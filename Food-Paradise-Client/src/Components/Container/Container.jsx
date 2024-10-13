const Container = ({children, width="max-w-screen-lg", className=""}) => {
    return (
        <div className= {`${width} mx-auto ${className} px-4 lg:px-0`}>
            {children}
        </div>
    );
};

export default Container;