// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
 

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import ReviewCard from './ReviewCard';


const Review = () => {
    return (
        <div>
             <>
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
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <ReviewCard />
        </SwiperSlide>
        <SwiperSlide>
        <ReviewCard />

        </SwiperSlide>
        <SwiperSlide>
        <ReviewCard />
            
        </SwiperSlide>
        <SwiperSlide>
        <ReviewCard />
            
        </SwiperSlide>
  
      </Swiper>
    </>
        </div>
    );
};

export default Review;