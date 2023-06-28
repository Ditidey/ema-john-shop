import React from "react";
 import './Banner.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

 

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

export default function Banner() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide style={{position: "relative"}}>
          <img className="img-class" src="https://media.istockphoto.com/id/928490994/photo/cute-asian-woman-using-tablet-computer-business-and-communication-concept-shows-fist-for.jpg?s=612x612&w=0&k=20&c=EpZWVKAEVB2whDH219roR7J3DTjM8KNYTva5sMusxfY=" />
          <div className="div-head">
            <h2 style={{fontSize: '55px', color:'cyan', fontFamily:'fantasy'}}>Beauty and Care</h2>
            <h2 style={{fontSize: '20px', color:'yellow', marginTop:'0px'}}>Buy and get 20% off</h2>
            <button>Buy Now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{position: "relative"}}>
          <img className="img-class" src="https://media.istockphoto.com/id/1419290369/photo/full-size-body-side-profile-photo-of-young-girl-running-retail-shopping-buyer-isolated-on.jpg?s=612x612&w=0&k=20&c=ymC2IBzk_Dl9AhrMQrNyuCz7UoutXXb5KMbWl2R-Wl8=" />
          <div className="div-head" >
            <h2 style={{fontSize: '55px', color:'lightcyan', fontFamily:'fantasy'}}>Grocery Products</h2>
            <h2 style={{fontSize: '20px', color:'yellow', marginTop:'0px'}}>Buy and get 24% off</h2>
            <button>Buy Now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{position: "relative"}}>
          <img className="img-class"  src="https://media.istockphoto.com/id/1320603388/photo/woman-shopping.jpg?s=612x612&w=0&k=20&c=t43p5NiOWXoK97HfVlwgTGQiRwKhw3fP99p50x-p9Gs=" />
          <div className="div-head">
            <h2 style={{fontSize: '55px', color:'cyan', fontFamily:'fantasy'}}>Vegetables and Fruits</h2>
            <h2 style={{fontSize: '20px', color:'red', marginTop:'0px'}}>Buy and get 30% off</h2>
            <button>Buy Now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{position: "relative"}}>
          <img className="img-class"  src="https://media.istockphoto.com/id/1309258672/photo/african-american-cheerful-people-holding-shopping-bags-with-new-clothes.jpg?s=612x612&w=0&k=20&c=ua1CxsLE9IUtZ76W9ePNc6EOZmGmRuhgWZeuzkXTsLg=" />
          <div className="div-head">
            <h2 style={{fontSize: '55px', color:'lightcyan', fontFamily:'fantasy'}}>Comfortable Dresses</h2>
            <h2 style={{fontSize: '20px', color:'yellow', marginTop:'0px'}}>Buy and get 20% off</h2>
            <button>Buy Now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{position: "relative"}}>
          <img className="img-class"  src="https://media.istockphoto.com/id/1155469464/photo/happy-young-asian-female-carrying-pastel-colored-shopping-bags-with-both-arms.webp?b=1&s=170667a&w=0&k=20&c=MA07uoPfdVfrMrp_FYnxmWV81Ij7YnbYOzh9VtI7kFk=" />
          <div className="div-head">
            <h2 style={{fontSize: '55px', color:'cyan', fontFamily:'fantasy'}}>Glasses</h2>
            <h2 style={{fontSize: '20px', color:'yellow', marginTop:'0px'}}>Buy and get 20% off</h2>
            <button>Buy Now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{position: "relative"}}>
          <img className="img-class"  src="https://media.istockphoto.com/id/1486428568/photo/young-asian-family-on-background.jpg?s=612x612&w=0&k=20&c=FD7_DJxEPMgE38u3hYsyNvyCS3IZ2_NHNrSoo8X4URU=" />
          <div className="div-head">
            <h2 style={{fontSize: '55px', color:'cyan', fontFamily:'fantasy'}}>Sneakers</h2>
            <h2 style={{fontSize: '20px', color:'red', marginTop:'0px'}}>Buy and get 20% off</h2>
            <button>Buy Now</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}