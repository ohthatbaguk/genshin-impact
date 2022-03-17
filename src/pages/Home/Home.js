import useToggle from "src/hooks/useToggle";
import classNames from "classnames";
import styles from "./home.module.css";
import Header from "src/components/Header/Header";
import Main from "src/components/Main/Main";
import Footer from "src/components/Footer/Footer";
import Section from "src/components/Section/Section";

export default function Home() {
  const [isDarkTheme, toggleDarkTheme] = useToggle();

  return (
    <div
      className={classNames(styles.mainDiv, styles.light, {
        [styles.dark]: isDarkTheme,
      })}
    >
      <button onClick={toggleDarkTheme}>Change theme</button>
      <Header />
      <Main />
      <Section />
      <Footer />
    </div>
  );
}
