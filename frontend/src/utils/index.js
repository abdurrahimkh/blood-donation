export const extractTime = (dateString) => {
  const dateObject = new Date(dateString);
  const hours = String(dateObject.getHours()).padStart(2, "0");
  const minutes = String(dateObject.getMinutes()).padStart(2, "0");
  const seconds = String(dateObject.getSeconds()).padStart(2, "0");
  const formattedTime = `${hours}:${minutes}:${seconds}`;
  return formattedTime;
};
