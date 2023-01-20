export default function healthSort(array) {
  array.sort((a, b) => (a.health < b.health ? 1 : -1));
  return array;
}
