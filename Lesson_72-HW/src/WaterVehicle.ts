/* eslint-disable no-console */
// Sukurkite klasę WaterVehicle, kuri turėtų savybes:
// brand: string,
// model: string,
// year: number,
// maxDepth: number

import Vehicle, { ObjectParameters } from './Vehicle.js';

class WaterVehicle extends Vehicle {
  private maxDepth!: number;

  constructor({ brand, model, year }: ObjectParameters, maxDepth: number) {
    super({ brand, model, year });
    this.maxDepth = maxDepth;
  }

  public ToString(): string {
    return `${this.GetString} ${this.maxDepth}`;
  }
}

const waterVehicle1 = new WaterVehicle({ brand: 'Test1', model: 'Omega', year: 2022 }, 55);

console.log(waterVehicle1.ToString());
