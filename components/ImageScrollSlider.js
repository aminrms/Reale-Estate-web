import React from "react";
// Material-UI
import { Container, Box, Stack, Skeleton } from "@mui/material";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const ImageScrollSlider = ({ photos }) => {
  return (
    <Box className="sliderBox">
      <Swiper
        scrollbar={{
          hide: false,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        modules={[Scrollbar, Autoplay, Navigation]}
        className="mySwiper"
      >
        {photos ? (
          photos.map((photo) => (
            <SwiperSlide className="slide">
              {photo.url ? (
                <img
                  src={photo.url}
                  alt="photo"
                  // style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <Skeleton variant="rectangular" width="100%" height="100%" />
              )}
            </SwiperSlide>
          ))
        ) : (
          <h1>loading...</h1>
        )}
      </Swiper>
    </Box>
  );
};

export default ImageScrollSlider;
