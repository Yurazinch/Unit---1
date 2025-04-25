import healthUnit from '../healthUnit';
// eslint-disable-next-line no-undef
test.each([
    { name: 'Маг1', health: 90, expected: 'Маг1 healthy' },
    { name: 'Маг2', health: 45, expected: 'Маг2 wounded' },
    { name: 'Маг3', health: 10, expected: 'Маг3 critical' }
])('.add( $name, $health )', ({name, health, expected}) => {
        // eslint-disable-next-line no-undef
    expect(healthUnit(name, health)).toBe(expected);
    });