function saveToLocalStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    return null;
  }
}

function getFromLocalStorage(key) {
  const reference = localStorage.getItem(key);
  if (!reference) return [];
  try {
    return JSON.parse(reference);
  } catch (error) {
    return [];
  }
}

export { getFromLocalStorage, saveToLocalStorage };
