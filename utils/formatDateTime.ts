export function formatDateTime(dateString: Date): string {
  const inputDate = new Date(dateString);
  const now = new Date();

  // Format time
  const hours = inputDate.getHours().toString().padStart(2, "0");
  const minutes = inputDate.getMinutes().toString().padStart(2, "0");
  const formattedTime = `${hours}:${minutes}`;

  // Get date difference
  const dayDifference = now.getDate() - inputDate.getDate();
  const isSameMonth =
    now.getMonth() === inputDate.getMonth() &&
    now.getFullYear() === inputDate.getFullYear();

  if (isSameMonth && dayDifference === 0) {
    return `Today at ${formattedTime}`;
  } else if (isSameMonth && dayDifference === 1) {
    return `Yesterday at ${formattedTime}`;
  } else {
    return inputDate
      .toLocaleString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
      .replace(",", "");
  }
}
