"use client";

import { FC, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import Skeleton from "@/components/skeleton/skeleton";
import styles from "./gym-swiper.module.scss";

type GymSwiperSkeletonProps = {
  visible: boolean;
};

const GymSwiperSkeleton: FC<GymSwiperSkeletonProps> = ({ visible }) => {
  return (
    <div
      className={styles["swiper-skeleton"]}
      style={{ display: visible ? "flex" : "none" }}
    >
      <div className={styles["swiper-skeleton-slide-container"]}>
        <div className={styles["swiper-skeleton-slide-wrapper"]}>
          <Skeleton className={styles["swiper-skeleton-slide"]}></Skeleton>
        </div>
      </div>
      <div className={styles["swiper-skeleton-slide-container"]}>
        <div className={styles["swiper-skeleton-slide-wrapper"]}>
          <Skeleton className={styles["swiper-skeleton-slide"]}></Skeleton>
        </div>
      </div>
      <div className={styles["swiper-skeleton-slide-container"]}>
        <div className={styles["swiper-skeleton-slide-wrapper"]}>
          <Skeleton className={styles["swiper-skeleton-slide"]}></Skeleton>
        </div>
      </div>
    </div>
  );
};

const GymSwiper = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  const handleAfterInit = (swiper: SwiperClass) => {
    swiper.slideTo(2);
    setIsInitialized(true);
  };

  return (
    <div>
      <GymSwiperSkeleton visible={!isInitialized} />
      <Swiper
        style={{ display: isInitialized ? "block" : "none" }}
        slidesPerView={1.3}
        spaceBetween={12}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
        }}
        modules={[Autoplay]}
        onAfterInit={handleAfterInit}
      >
        <SwiperSlide>
          <Image
            className={styles.image}
            src="/top-fight-gym/gym/gym-1.jpg"
            alt="Фото зала"
            width={1600}
            height={900}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.image}
            src="/top-fight-gym/gym/gym-1.jpg"
            alt="Фото зала"
            width={1600}
            height={900}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.image}
            src="/top-fight-gym/gym/gym-1.jpg"
            alt="Фото зала"
            width={1600}
            height={900}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.image}
            src="/top-fight-gym/gym/gym-1.jpg"
            alt="Фото зала"
            width={1600}
            height={900}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.image}
            src="/top-fight-gym/gym/gym-1.jpg"
            alt="Фото зала"
            width={1600}
            height={900}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default GymSwiper;
