export default function WidgetContent({ error, loading, children }) {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong. Please, try again.</p>;
  }

  return children;
}
