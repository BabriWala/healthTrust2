import Banner from "./banner/Banner";
// import img1 from './banner/images/banner-1.webp'

const index = () => {
    return (
        <div className=" max-w-7xl mx-auto">
           <h2>This is Services Page</h2> 
           {/* <Banner title="Influenza" img={img1}></Banner> */}
           <Banner title="Influenza"></Banner>
        </div>
    );
};

export default index;