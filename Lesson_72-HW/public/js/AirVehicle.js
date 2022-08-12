import Vehicle from './Vehicle.js';
class AirVehicle extends Vehicle {
    maxAltitude;
    constructor(brand, model, year, maxAltitude) {
        super(brand, model, year);
        this.maxAltitude = maxAltitude;
    }
    ToString() {
        return `${this.GetString} ${this.maxAltitude}`;
    }
}
const AirVehicle1 = new AirVehicle('Rodia', 'Nashgarak', 45115, 100000);
console.log(AirVehicle1.ToString());
//# sourceMappingURL=AirVehicle.js.map