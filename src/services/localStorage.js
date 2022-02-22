function saveToLocalStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    return null;
  }
}

function getFromLocalStorage(key, defaultValue = null) {
  const reference = localStorage.getItem(key);
  if (!reference) return defaultValue;
  try {
    return JSON.parse(reference);
  } catch (error) {
    return defaultValue;
  }
}

export { getFromLocalStorage, saveToLocalStorage };
