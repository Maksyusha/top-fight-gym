"use client";

import { FC } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Container from "@/components/container/container";
import Typography from "@/components/typography/typography";
import styles from "./prices.module.scss";
import "./price.scss";

const pricesData = [
  {
    name: "Муай-тай",
    price: 1000,
    amount: "разовое",
    includes: ["групповая тренировка", "60 минут", "дети 4-6 лет"],
  },
  {
    name: "Муай-тай",
    price: 1000,
    amount: "разовое",
    includes: ["групповая тренировка", "60 минут", "дети 7-11 лет"],
  },
  {
    name: "Муай-тай",
    price: 1250,
    amount: "разовое",
    includes: ["групповая тренировка", "90 минут", "дети 11-17 лет"],
  },
  {
    name: "Муай-тай",
    price: 1500,
    amount: "разовое",
    includes: ["групповая тренировка", "90 минут", "взрослые"],
  },
  {
    name: "Муай-тай",
    price: 7500,
    amount: "12 занятий",
    includes: ["групповая тренировка", "60 минут", "дети 4-6 лет"],
  },
  {
    name: "Муай-тай",
    price: 7500,
    amount: "12 занятий",
    includes: ["групповая тренировка", "60 минут", "дети 7-11 лет"],
  },
  {
    name: "Муай-тай",
    price: 8000,
    amount: "12 занятий",
    includes: ["групповая тренировка", "90 минут", "дети 11-17 лет"],
  },
  {
    name: "Муай-тай",
    price: 8500,
    amount: "12 занятий",
    includes: ["групповая тренировка", "90 минут", "взрослые"],
  },
];

type PriceCardProps = {
  name: string;
  price: number;
  amount: string;
  includes: string[];
};

const PriceCard: FC<PriceCardProps> = ({ name, price, amount, includes }) => {
  const formattedPrice = new Intl.NumberFormat("ru-RU").format(price);
  return (
    <div className={styles.card}>
      <div className={styles["card-main"]}>
        <Typography variant="h6" component="h3">
          {name}
        </Typography>
        <Typography variant="h3" component="p">
          {formattedPrice}₽/{amount}
        </Typography>
      </div>
      <div className={styles["card-divider"]}></div>
      <div className={styles["card-includes"]}>
        <Typography variant="h6" component="p">
          Включает:
        </Typography>
        <ul className={styles["card-list"]}>
          {includes.map((item, index) => {
            return (
              <li key={index} className={styles["card-list-item"]}>
                <Typography>
                  <Image
                    className={styles["card-list-icon"]}
                    src="/daw.svg"
                    alt="Галка"
                    width={16}
                    height={16}
                  />
                  {item}
                </Typography>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const Prices = () => {
  return (
    <Container id="prices" className={`prices ${styles.container}`}>
      <Typography variant="h2">Стоимость</Typography>
      <Swiper
        className={styles.swiper}
        slidesPerView={1.2}
        spaceBetween={12}
        centeredSlides={true}
        onInit={(swiper) => swiper.slideTo(1)}
        pagination={true}
        modules={[Pagination]}
        breakpoints={{
          [432]: {
            slidesPerView: 1.4,
          },
          [560]: {
            slidesPerView: 1.8,
          },
          [688]: {
            slidesPerView: 2.2,
          },
          [864]: {
            slidesPerView: 2.5,
          },
          [998]: {
            slidesPerView: 2.8,
          },
          [1280]: {
            slidesPerView: 3.2,
          },
        }}
      >
        {pricesData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <PriceCard {...item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default Prices;
