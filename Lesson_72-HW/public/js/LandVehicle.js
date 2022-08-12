import Vehicle from './Vehicle.js';
class LandVehicle extends Vehicle {
    tires;
    constructor(brand, model, year, tires) {
        super(brand, model, year);
        this.tires = tires;
    }
    ToString() {
        return `${this.GetString} ${this.tires}`;
    }
}
const LandVehicle1 = new LandVehicle('Test1', 'Omega', 2022, ['plastic']);
console.log(LandVehicle1.ToString());
//# sourceMappingURL=LandVehicle.js.map