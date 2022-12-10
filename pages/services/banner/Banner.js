// import banner from './images/banner-1.webp'


const Banner = (props) => {
    // console.log(props.img.src)
    // console.log(props.img)
    return (
        <div className={` p-20 w-full min-h-[300px]`}>
        {/* <div className={` p-20 w-full min-h-[300px] bg-[url(${props.img.src})]`}> */}
            <h2 className="text-black">{props.title}</h2>
        </div>
    );
};

export default Banner;