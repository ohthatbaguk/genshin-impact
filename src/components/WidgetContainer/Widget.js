import WidgetContent from "./WidgetContent";
import styles from "./widget.module.css";
import classNames from "classnames";

export default function Widget({
  title,
  error = null,
  loading = false,
  children,
  anotherClassname,
}) {
  return (
    <article className={classNames(styles.allWidget, anotherClassname)}>
      <h3 className={styles.widgetTitle}>{title}</h3>
      <WidgetContent error={error} loading={loading}>
        {children}
      </WidgetContent>
    </article>
  );
}
