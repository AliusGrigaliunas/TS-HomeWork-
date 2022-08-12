export default class Vehicle {
    Protectedbrand;
    Protectedmodel;
    Protectedyear;
    constructor(brand, model, year) {
        this.Protectedbrand = brand;
        this.Protectedmodel = model;
        this.Protectedyear = year;
    }
    set Brand(value) {
        this.Protectedbrand = value;
    }
    set Model(value) {
        this.Protectedmodel = value;
    }
    set Year(value) {
        this.Protectedyear = value;
    }
    get GetString() {
        return `${this.Protectedbrand} ${this.Protectedbrand} ${this.Protectedyear}`;
    }
}
//# sourceMappingURL=Vehicle.js.map