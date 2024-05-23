import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import sliserimg1 from '../../assets/image/home/01.jpg';
import sliserimg2 from '../../assets/image/home/02.jpg';
import sliserimg3 from '../../assets/image/home/03.png';
import sliserimg4 from '../../assets/image/home/04.jpg';
import sliserimg5 from '../../assets/image/home/05.png';
import sliserimg6 from '../../assets/image/home/06.png';

const Slider = () => {
    return (
        <Carousel
            autoPlay
            infiniteLoop
            interval={2000}
            // showThumbs={false}
            showStatus={false}
            thumbWidth={80}entage
            
        >
            <div>
                <img className="" src={sliserimg1} alt="Slide 1" />
            </div>
            <div>
                <img  className=""   src={sliserimg2} alt="Slide 2" />
            </div>
            <div>
                <img  className=""   src={sliserimg3} alt="Slide 3" />
            </div>
            <div>
                <img  className=""   src={sliserimg4} alt="Slide 4" />
            </div>
            <div>
                <img  className=""   src={sliserimg5} alt="Slide 5" />
            </div>
            <div>
                <img  className=""   src={sliserimg6} alt="Slide 6" />
            </div>
            <div>
                <img className="" src={sliserimg1} alt="Slide 1" />
            </div>
            <div>
                <img  className=""   src={sliserimg2} alt="Slide 2" />
            </div>
            <div>
                <img  className=""   src={sliserimg3} alt="Slide 3" />
            </div>
            <div>
                <img  className=""   src={sliserimg4} alt="Slide 4" />
            </div>
            <div>
                <img  className=""   src={sliserimg5} alt="Slide 5" />
            </div>
            <div>
                <img  className=""   src={sliserimg6} alt="Slide 6" />
            </div>
            <div>
                <img className="" src={sliserimg1} alt="Slide 1" />
            </div>
            <div>
                <img  className=""   src={sliserimg2} alt="Slide 2" />
            </div>
            <div>
                <img  className=""   src={sliserimg3} alt="Slide 3" />
            </div>
            <div>
                <img  className=""   src={sliserimg4} alt="Slide 4" />
            </div>
            <div>
                <img  className=""   src={sliserimg5} alt="Slide 5" />
            </div>
            <div>
                <img  className=""   src={sliserimg6} alt="Slide 6" />
            </div>
            <div>
                <img className="" src={sliserimg1} alt="Slide 1" />
            </div>
            <div>
                <img  className=""   src={sliserimg2} alt="Slide 2" />
            </div>
            <div>
                <img  className=""   src={sliserimg3} alt="Slide 3" />
            </div>
            <div>
                <img  className=""   src={sliserimg4} alt="Slide 4" />
            </div>
            <div>
                <img  className=""   src={sliserimg5} alt="Slide 5" />
            </div>
            <div>
                <img  className=""   src={sliserimg6} alt="Slide 6" />
            </div>
        </Carousel>
    );
};

export default Slider;
