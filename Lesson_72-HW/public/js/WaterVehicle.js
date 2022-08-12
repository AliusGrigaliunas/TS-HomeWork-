import Vehicle from './Vehicle.js';
class WaterVehicle extends Vehicle {
    maxDepth;
    constructor(brand, model, year, maxDepth) {
        super(brand, model, year);
        this.maxDepth = maxDepth;
    }
    ToString() {
        return `${this.GetString} ${this.maxDepth}`;
    }
}
const waterVehicle1 = new WaterVehicle('Test1', 'Omega', 2022, 55);
console.log(waterVehicle1.ToString());
//# sourceMappingURL=WaterVehicle.js.map