export const Diary = "diary";

export function loadStorage() {
  return (JSON.parse(localStorage.getItem(Diary)) ?? []).sort(
    (a, b) => new Date(a.date) - new Date(b.date),
  );
}

export function writeStorage(items) {
  localStorage.setItem(Diary, JSON.stringify(items));
}
