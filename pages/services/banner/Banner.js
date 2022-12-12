// import banner from './images/banner-1.webp'


const Banner = (props) => {
    return (
        <div className={` p-20 w-full min-h-[300px] shadow-lg bg-indigo-500`}>
            <h2 className="text-white font-bold text-center  text-7xl">{props.title}</h2>
        </div>
    );
};

export default Banner;