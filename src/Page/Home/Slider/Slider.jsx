 
// Import Swiper React components
import { useRef } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./slider.css";
const Slider = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
        <Swiper
          slidesPerView={'auto'}
          centeredSlides={true}
          
          spaceBetween={30}
          pagination={{
            clickable: true,
          }} 
          modules={[Autoplay, Pagination, ]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper  md:max-w-[400px]  min-h-60 rounded-xl border-spacing-1 border border-white-700 p-3"
        >
          <SwiperSlide>
            <img className='rounded-2xl' src="https://hips.hearstapps.com/hmg-prod/images/dog-yorkshire-terrier-lies-on-the-floor-with-paws-royalty-free-image-1682539706.jpg?crop=0.668xw:1.00xh;0.179xw,0&resize=1200:*" alt="" />
          </SwiperSlide>
          <SwiperSlide>
          <img className='rounded-2xl' src="https://kb.rspca.org.au/wp-content/uploads/2018/11/golder-retriever-puppy.jpeg" alt="" />
            
          </SwiperSlide>
          <SwiperSlide>
          <img className='rounded-2xl' src="https://www.perfectpetinsurance.co.uk/wp-content/uploads/2023/06/PP_mobile_banner_Redesign_v6_Cat.png" alt="" />
            
          </SwiperSlide>
       
        </Swiper>
      </>
    );
};

export default Slider;