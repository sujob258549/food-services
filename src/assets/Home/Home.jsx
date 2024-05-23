import { Helmet } from "react-helmet";
import Footer from "../../HeaderAndfooter/Footer";
import Header from "../../HeaderAndfooter/Header";
import Bistrobos from "./Bistrobos";
import Comments from "./Comments";
import ContactUs from "./ContactUs";
import OurMenu from "./OurMenu";
import Popular from "./Popular";
import PriductCard from "./PriductCard";
import RatingCarodal from "./RatingCarodal";
import Slider from "./Slider";
import SwiperSlider from "./SwiperSlider";


const Home = () => {
    return (
        <>
        <Helmet>
            <title>food servises || Home</title>
        </Helmet>
            <div className="">
                <div className="max-w-[1280px] mx-auto">

                    <Header></Header>
                </div>
                <div className="max-w-[1280px] mx-auto px-5">


                    <Slider></Slider>
                    <SwiperSlider></SwiperSlider>
                    <Comments></Comments>
                    <Bistrobos></Bistrobos>
                    <Popular></Popular>
                    <ContactUs></ContactUs>
                    <PriductCard></PriductCard>
                    <OurMenu></OurMenu>
                    <RatingCarodal></RatingCarodal>
                    <Footer></Footer>
                </div>

            </div>
        </>
    );
};

export default Home;