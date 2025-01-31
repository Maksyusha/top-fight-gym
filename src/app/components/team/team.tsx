"use client";

import { FC } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Container from "@/components/container/container";
import Typography from "@/components/typography/typography";
import styles from "./team.module.scss";
import "./team.scss";

const teamData = [
  {
    src: "/top-fight-gym/team/fedorenkov.jpg",
    name: "Федоренков Виталий",
    description: [
      "Мастер спорта РФ",
      "Основатель клуба “TOP FIGHT” с более чем 20-летним опытом тренерской работы, он разработал уникальную методику, которая привела к успехам многих спортсменов. Наставник и друг, он умеет создать дружелюбную атмосферу и вдохновить учеников на занятия спортом.",
    ],
  },
  {
    src: "/top-fight-gym/team/fedorenkov.jpg",
    name: "Панин Вячеслав",
    description: [
      "Мастер спорта РФ",
      "Победитель ряда престижных турниров по тайскому боксу и кикбоксингу. Его внимание к деталям и умение находить общий язык со всеми возрастами помогут вам достичь любых поставленных целей.",
    ],
  },
  {
    src: "/top-fight-gym/team/fedorenkov.jpg",
    name: "Коваленко Станислав",
    description: [
      "Мастер Спорта РФ рукопашный бой/панкратион.",
      "Более 300 боев в различных дисциплинах. Всесторонне развитый спортсмен и тренер. Открытый и доброжелательный. Тренерский стаж более 5 лет.",
    ],
  },
];

type TeamCardProps = {
  src: string;
  name: string;
  description: string[];
};

const TeamCard: FC<TeamCardProps> = ({ src, name, description }) => {
  return (
    <div className={styles.card}>
      <Image
        className={styles["card-image"]}
        src={src}
        alt={`Фото ${name}`}
        width={120}
        height={120}
      />
      <Typography variant="h5" component="h3">
        {name}
      </Typography>
      {description.map((item, index) => (
        <Typography key={index}>{item}</Typography>
      ))}
    </div>
  );
};

const Team = () => {
  return (
    <Container id="team" className={`team ${styles.container}`}>
      <Typography variant="h2">Команда</Typography>
      <Typography>
        Тренерский состав клуба состоит из опытных наставников с высоким уровнем
        мастерства. Каждый из них имеет значительный опыт как в спорте, так и в
        тренерской деятельности.
      </Typography>
      <Swiper
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          [864]: {
            slidesPerView: 2,
            spaceBetween: 60,
          },
        }}
      >
        {teamData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <TeamCard {...item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default Team;
