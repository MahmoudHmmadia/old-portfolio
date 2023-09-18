import React from "react";
import Work from "../../components/Work";
import { works } from "../../data/data";
import { nanoid } from "nanoid";
import "./works.scss";
import { motion } from "framer-motion";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Works = () => {
  let imageNumber = 1;
  return (
    <div className="works section" id="works">
      <h1 className="cool-title">WORKS</h1>
      <motion.div className="container">
        <Swiper
          className="works__boxes"
          loop={true}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={{ clickable: true }}
          modules={[Pagination, Navigation]}
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 48,
            },
          }}
        >
          {works.map((work) => (
            <SwiperSlide className="work" key={nanoid()}>
              <Work
                title={work.title}
                image={work.image[`work${imageNumber++}`]}
                dataTitle={work.title}
                github={work.github}
                page={work.page}
                loading={work.loading}
                loadingIcon={work.loadingIcon}
                githubIcon={work.githubIcon}
                viewIcon={work.viewIcon}
                githubHref={work.githubHref}
                pageHref={work.pageHref}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default Works;
