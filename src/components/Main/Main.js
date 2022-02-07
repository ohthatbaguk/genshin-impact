import styles from "./main.module.css";
import Clock from "./components/Clock/Clock";
import CatFact from "./components/CatFact/CatFact";
import ToDoList from "./components/ToDoList/ToDoList";

export default function Main() {
  return (
    <main>
      <article>
        <h1 className={styles.title}>Blog</h1>
        <p className={styles.description}>
          Hi! This is my first project as a front-end developer. This site will
          be improved as new knowledge comes in.
        </p>
      </article>
      <section className={styles.widgetContainer}>
        <Clock />
        <CatFact />
        <ToDoList />
      </section>
    </main>
  );
}
