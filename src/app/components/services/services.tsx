import { FC } from "react";
// import Image from "next/image";
import Container from "@/components/container/container";
// import Link from "@/components/link/link";
import Typography from "@/components/typography/typography";
import styles from "./services.module.scss";

const servicesData = [
  {
    href: "",
    title: "Муай-тай",
    description:
      'Боевое искусство из Таиланда, известное как "искусство восьми конечностей", включает удары руками и ногами.',
  },
  {
    href: "",
    title: "Бокс",
    description:
      "Спортивное единоборство с кулачным боем на ринге, где разрешены удары в верхнюю часть тела противника.",
  },
  {
    href: "",
    title: "Джиу-джитсу",
    description:
      "Японская система самообороны, направленная на использование техники и направления сил противника против него самого.",
  },
  {
    href: "",
    title: "Йога",
    description:
      "Древняя практика, совмещающая физические упражнения и методы самопознания для гармонии тела и духа.",
  },
  {
    href: "",
    title: "Стретчинг",
    description:
      "Упражнения для улучшения гибкости и подвижности суставов, способствующие подготовке и восстановлению мышц.",
  },
];

type ServiceProps = {
  href: string;
  title: string;
  description: string;
};

const Service: FC<ServiceProps> = ({ 
  // href, 
  title, 
  description }) => {
  return (
    <li className={styles['service-item']}>
      {/* <Link className={styles.link} href={href}> */}
      <Typography variant="h3">
        {title}
        {/* <Image
            className={styles.icon}
            src="/arrow.svg"
            alt={`Прочитать больше`}
            width={16}
            height={16}
          /> */}
      </Typography>
      {/* </Link> */}
      <Typography>{description}</Typography>
    </li>
  );
};

const Services = () => {
  return (
    <Container id="services" className={styles.container}>
      <Typography variant="h2" sectionTitle={true}>
        Услуги
      </Typography>
      <ul className={styles['service-list']}>
        {servicesData.map((item, index) => (
          <Service key={index} {...item} />
        ))}
      </ul>
    </Container>
  );
};

export default Services;
