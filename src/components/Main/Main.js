import styles from "./main.module.css";
import Form from "src/components/Main/components/SignUpForm/SignUpForm";
import LoginForm from "src/components/Main/components/LoginForm/LoginForm";

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
      <Form />
      <LoginForm />

      {/*<section className={styles.widgetContainer}>*/}
      {/*  <Clock />*/}
      {/*  <CatFact />*/}
      {/*  <ToDoList />*/}
      {/*</section>*/}
    </main>
  );
}
