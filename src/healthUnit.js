export default function healthUnit(name, health) {
    let result = '';

    if( health > 50 ) {
        result = `${name} healthy`;
    }
    if( health <= 50 && health >=15 ) {
        result = `${name} wounded`;
    }
    if( health < 15 ) {
        result = `${name} critical`;
    }

    return result;
}