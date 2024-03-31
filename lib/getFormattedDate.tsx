export default function getFormattedDate(dateString: string): string {
  return new Intl.DateTimeFormat("ru-RU", { dateStyle: "long" }).format(
    new Date(dateString)
  );
}
