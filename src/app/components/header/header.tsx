"use client";

import { useState } from "react";
import Container from "@/components/container/container";
import Link from "@/components/link/link";
import Typography from "@/components/typography/typography";
import styles from "./header.module.scss";

const navData = [
  {
    href: "#gym",
    title: "Спортзал",
  },
  {
    href: "#services",
    title: "Услуги",
  },
  {
    href: "#prices",
    title: "Стоимость",
  },
  {
    href: "#team",
    title: "Команда",
  },
  {
    href: "#faq",
    title: "FAQ",
  },
  {
    href: "#contacts",
    title: "Контакты",
  },
  // {
  //   href: "/schedule",
  //   title: "Расписание",
  // },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonShowClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <button
          className={
            isOpen
              ? `${styles["burger"]} ${styles["burger-active"]}`
              : styles["burger"]
          }
          type="button"
          onClick={handleButtonShowClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </Container>
      <nav
        className={
          isOpen ? `${styles["nav"]} ${styles["nav-active"]}` : styles["nav"]
        }
      >
        <ul className={styles["nav-list"]}>
          {navData.map(({ href, title }, index) => (
            <li key={index} className={styles["nav-item"]}>
              <Link href={href} onClick={handleButtonShowClick}>
                <Typography
                  variant="h5"
                  component="p"
                  style={{ textAlign: "center" }}
                >
                  {title}
                </Typography>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
