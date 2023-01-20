export default function healthStatus(array) {
  if (array.health > 50) {
    return 'healthy';
  } if (array.health > 15) {
    return 'wounded';
  } return 'critical';
}
