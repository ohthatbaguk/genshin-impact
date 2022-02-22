import Header from "./components/Header/Header";
import styles from "./app.module.css";
import Main from "./components/Main/Main";
import classNames from "classnames";
import Section from "./components/Section/Section/Section";
import Footer from "./components/Footer/Footer";
import useToggle from "src/hooks/useToggle/useToggle";

function App() {
  const [isDarkTheme, setDarkTheme] = useToggle();

  return (
    <div
      className={classNames(styles.mainDiv, styles.light, {
        [styles.dark]: isDarkTheme,
      })}
    >
      <button onClick={setDarkTheme}>Change theme</button>
      <Header />
      <Main />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
