import styles from "./app.module.css";
import classNames from "classnames";
import useToggle from "src/hooks/useToggle/useToggle";
import Header from "src/components/Header/Header";
import Footer from "src/components/Footer/Footer";
import Main from "src/components/Main/Main";

function App() {
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
      {/*<Section />*/}
      <Footer />
    </div>
  );
}

export default App;
