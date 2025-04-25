const unit = { name, health}
export default function(unit) {
    if( unit.health > 50 ) {
        return `${unit.name} healthy`;
    }
    if( unit.health <= 50 && health >=15 ) {
        return `${unit.name} wounded`;
    }
    if( unit.health < 15 ) {
        return `${unit.name} critical`;
    }
}