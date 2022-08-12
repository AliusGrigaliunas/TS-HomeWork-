/* eslint-disable no-console */
// Sukurkite klasę LandVehicle, kuri turėtų savybes:
// brand: string,
// model: string,
// year: number,
// tires: string[],

import Vehicle, { ObjectParameters } from './Vehicle.js';

class LandVehicle extends Vehicle {
  private tires!: string[];

  constructor({ brand, model, year }: ObjectParameters, tires: string[]) {
    super({ brand, model, year });
    this.tires = tires;
  }

  public ToString(): string {
    return `${this.GetString} ${this.tires}`;
  }
}

const LandVehicle1 = new LandVehicle({ brand: 'Test1', model: 'Omega', year: 2022 }, ['plastic']);

console.log(LandVehicle1.ToString());
