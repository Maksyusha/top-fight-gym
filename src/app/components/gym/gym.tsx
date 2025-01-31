import Container from "@/components/container/container";
import Typography from "@/components/typography/typography";
import GymSwiper from "@/app/components/gym/components/gym-swiper/gym-swiper";
import styles from "./gym.module.scss";

const Gym = () => {
  return (
    <Container id="gym" className={styles.container}>
      <div className={`${styles.block} ${styles["block-main"]}`}>
        <Typography variant="h2">Раскройте свой потенциал</Typography>
        <Typography>
          В нашем спортивном зале вы найдете боксерский ринг, зону
          функциональной подготовки и разнообразные боксерские мешки. Все
          оборудование безопасно и современно, что обеспечивает комфортные
          тренировки.
        </Typography>
      </div>
      <div className={styles["block-group"]}>
        <div className={styles.block}>
          <Typography variant="h3">Удобство и атмосфера</Typography>
          <Typography>
            Мы предлагаем удобные раздевалки, душевые и телевизор с прямыми
            эфирами боев.
          </Typography>
        </div>
        <div className={styles.block}>
          <Typography variant="h3">Поддержка и сообщество</Typography>
          <Typography>   
            Главное достоинство — сильнейший тренерский состав и здоровая,
            дружелюбная атмосфера для тренировок и общения.
          </Typography>
        </div>
      </div>
      <GymSwiper />
    </Container>
  );
};

export default Gym;
