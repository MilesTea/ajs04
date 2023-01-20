import healthStatus from '../1';
import healthSort from '../2';

test.each([
  [100, 'healthy'],
  [51, 'healthy'],
  [50, 'wounded'],
  [16, 'wounded'],
  [15, 'critical'],
  [1, 'critical'],
])('testing healthStatus function with %i health', (health, expectedStatus) => {
  const result = healthStatus({ name: 'testName', health });
  expect(result).toBe(expectedStatus);
});

test('testing healthSort function', () => {
  const testData = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const expectedData = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const result = healthSort(testData);
  expect(result).toEqual(expectedData);
});
