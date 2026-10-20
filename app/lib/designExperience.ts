// Only a start month was supplied; use its first calendar day in UTC.
export function designExperience(date: Date) {
  const totalMonths = Math.max(0, (date.getUTCFullYear() - 2024) * 12 + date.getUTCMonth() - 9);
  return {
    years: String(Math.floor(totalMonths / 12)).padStart(2, "0"),
    months: String(totalMonths % 12).padStart(2, "0"),
  };
}
