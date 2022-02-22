import WidgetContent from "src/components/Main/components/WidgetContainer/WidgetContent";
import styles from "src/components/Main/components/WidgetContainer/widget.module.css";
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
