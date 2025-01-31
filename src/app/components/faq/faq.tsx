"use client";

import { FC, useState } from "react";
import Image from "next/image";
import Container from "@/components/container/container";
import Typography from "@/components/typography/typography";
import styles from "./faq.module.scss";

const questionsData = [
  {
    question: "Что нужно на первую тренировку по тайскому боксу?",
    answer:
      "Легкая форма одежды, шорты, футболка, сменная обувь, средства личной гигиены, бутылочку воды. Занятия проходят без обуви.",
  },
  {
    question: "Ставят ли в спарринг на первом занятие?",
    answer: "Нет. По мере тренированности и желания.",
  },
  {
    question: "Как проходит первая тренировка по муай-тай?",
    answer:
      "Новички знакомятся с базовой техникой, стойкой и обще-физическими упражнениями.",
  },
  {
    question: "Как записаться на первую тренировку?",
    answer:
      "Выбираете нужное время и дисциплину согласно расписанию на нашем сайте или приложении. Проходите регистрацию. Затем вы получаете доступ к покупке абонемента.",
  },
  {
    question: "Могу ли я посещать занятия в разные дни?",
    answer: "Да. Согласно вашему абонементу.",
  },
  {
    question: "Какая экипировка нужна для занятия муай-тай?",
    answer:
      "После пробной тренировки требуется приобрести минимальный набор: боксерские перчатки, защита голеностопа. После месяца занятий желательно приобрести боксерский шлем, капу, бандаж, бинты. Детям тренировочный жилет на грудь.",
  },
];

type QuestionProps = {
  question: string;
  answer: string;
};

const Question: FC<QuestionProps> = ({ question, answer }) => {
  const [isShown, setIsShown] = useState(false);

  const handleButtonShowClick = () => {
    setIsShown(!isShown);
  };

  return (
    <div className={styles["question"]}>
      <div className={styles["question-header"]}>
        <Typography
          className={styles["question-title"]}
          variant="h6"
          component="h3"
        >
          {question}
        </Typography>
        <button
          className={
            isShown
              ? `${styles["question-button"]} ${styles["question-button-active"]}`
              : styles["question-button"]
          }
          type="button"
          onClick={handleButtonShowClick}
        >
          <Image
            src="/expand.svg"
            alt={isShown ? "Скрыть" : "Раскрыть"}
            width={24}
            height={24}
          />
        </button>
      </div>
      <div
        className={
          isShown
            ? `${styles["question-body"]} ${styles["question-body-active"]}`
            : styles["question-body"]
        }
      >
        <div className={styles["question-answer"]}>
          <Typography>{answer}</Typography>
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  return (
    <Container id="faq" className={styles.container}>
      <Typography className={styles.title} variant="h2">
        FAQ
      </Typography>
      <div className={styles.questions}>
        {questionsData.map((item, index) => (
          <Question key={index} {...item} />
        ))}
      </div>
    </Container>
  );
};

export default Faq;
