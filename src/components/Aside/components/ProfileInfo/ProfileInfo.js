import styles from "src/components/Aside/components/ProfileInfo/profileInfo.module.css";
import { useNavigate } from "react-router-dom";

export default function ProfileInfo({ data }) {
  const navigate = useNavigate();

  const onClick = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <>
      <p className={styles.item}>{data.lastName + " " + data.firstName}</p>
      <p className={styles.item}>{data.login}</p>
      <button className={styles.logout} onClick={onClick}>
        Logout
      </button>
    </>
  );
}
