import { Carousel } from "@material-tailwind/react";
import Slider1 from "../../../assets/img/slider_img_1.jpg";

export default function CarouselEl() {
  return (
    <Carousel
      autoplay={true}
      loop={true}
      className="mb-10"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span key={i} className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"}`} onClick={() => setActiveIndex(i)} />
          ))}
        </div>
      )}
    >
      <div>
        <img src={Slider1} alt="image 2" className=" w-full object-cover" />
      </div>
      <div>
        <img style={{ height: "calc(100vh - 58px)" }} src="https://www.um.edu.mt/__data/assets/image/0007/305296/varieties/banner.jpg" alt="image 1" className=" w-full object-cover" />
      </div>
      <div>
        <img src="https://wallpapercave.com/wp/wp11201284.jpg" alt="image 3" className=" w-full" />
      </div>
    </Carousel>
  );
}
