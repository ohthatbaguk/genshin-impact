import styles from "./aside.module.css";
import { getFromLocalStorage } from "src/services/localStorage";
import ProfileInfo from "src/components/Aside/components/ProfileInfo/ProfileInfo";
import { useNavigate } from "react-router-dom";

export default function Aside() {
  const navigate = useNavigate();
  const data = getFromLocalStorage("currentUser");

  const onClick = () => {
    navigate("/login");
  };

  return (
    <aside className={styles.aside}>
      <section className={styles.bio}>
        {data ? (
          <ProfileInfo data={data} />
        ) : (
          <button onClick={onClick}>Login & SignUp</button>
        )}
      </section>
      {!!data ? (
        <img
          className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/72410940?v=4"
          width="60"
          alt="photo"
        />
      ) : (
        ""
      )}
    </aside>
  );
}
