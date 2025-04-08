export function formatDuration(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) {
    throw new Error("Eingabe muss eine nicht-negative Zahl sein.");
  }

  const totalSeconds = Math.round(seconds);
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;

  let result = "";
  if (h > 0) result += `${h}h`;
  if (m > 0) result += `${m}m`;
  if (s > 0 || result === "") result += `${s}s`;

  return result;
}