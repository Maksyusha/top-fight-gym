import Image from "next/image";
import styles from "./about.module.scss";
import Container from "@/components/container/container";
import Typography from "@/components/typography/typography";

const About = () => {
  return (
    <Container className={styles.container}>
      <div className={styles["overlay-container"]}>
        <Image
          className={`image-xs ${styles.overlay}`}
          src="/overlay.png"
          alt="Фон"
          width={400}
          height={225}
        />
        <Image
          className={`image-sm ${styles.overlay}`}
          src="/overlay.png"
          alt="Фон"
          width={640}
          height={360}
        />
        <Image
          className={`image-md ${styles.overlay}`}
          src="/overlay.png"
          alt="Фон"
          width={800}
          height={450}
        />
        <Image
          className={`image-lg ${styles.overlay}`}
          src="/overlay.png"
          alt="Фон"
          width={1200}
          height={720}
        />
        <Image
          className={`image-xl ${styles.overlay}`}
          src="/overlay.png"
          alt="Фон"
          width={1600}
          height={900}
        />
        <div className={styles["logo-container"]}>
          <Image
            className={styles["logo"]}
            src="/logo.svg"
            alt="Лого"
            width={800}
            height={800}
          />
        </div>
      </div>
      <Container className={styles["content"]}>
        <Typography component="h1" variant="h2">
          Больше чем клуб - это семья
        </Typography>
        <Typography className={styles.subtitle}>
          «Top Fight» - Сообщество объединенное философией и силой искусства
          Муай Тай.
        </Typography>
      </Container>
    </Container>
  );
};

export default About;
