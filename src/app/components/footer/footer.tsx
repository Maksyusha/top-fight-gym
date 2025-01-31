import Typography from "@/components/typography/typography";
import Link from "@/components/link/link";
import Container from "@/components/container/container";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container id="contacts" className={styles.container}>
        <div className={styles.info}>
          <div className={styles.block}>
            <Typography variant="h5">Адрес:</Typography>
            <Typography>Москва, Пятницкое шоссе, 39</Typography>
          </div>
          <div className={styles.block}>
            <Typography variant="h5">Контакты:</Typography>
            <Typography>
              Почта:{" "}
              <Link href="mailto:mail@topfightgym.ru">mail@topfightgym.ru</Link>
            </Typography>
            <Typography>
              Телефон: <Link href="tel:+74951342949">+7 (495) 134-29-49</Link>
            </Typography>
          </div>
        </div>
        <Typography className={styles.copyright}>
          ©Top Fight Gym 2025
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
