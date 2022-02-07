import Header from "./components/Header/Header";
import styles from "./app.module.css";
import { useState } from "react";
import Main from "./components/Main/Main";
import classNames from "classnames";

function App() {
  const [isDarkTheme, setDarkTheme] = useState(false);

  const handleClick = () => {
    setDarkTheme((isDarkTheme) => !isDarkTheme);
  };

  return (
    <div
      className={classNames(styles.mainDiv, styles.light, {
        [styles.dark]: isDarkTheme,
      })}
    >
      <button onClick={handleClick}>Change theme</button>
      <Header />
      <Main />
      <section>Section</section>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
