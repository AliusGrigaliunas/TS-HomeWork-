/* eslint-disable no-console */
// Sukurkite klasę AirVehicle, kuri turėtų savybes:
// brand: string,
// model: string,
// year: number,
// maxAltitude: number,

import Vehicle, { ObjectParameters } from './Vehicle.js';

class AirVehicle extends Vehicle {
  private maxAltitude!: number;

  constructor({ brand, model, year }: ObjectParameters, maxAltitude: number) {
    super({ brand, model, year });
    this.maxAltitude = maxAltitude;
  }

  public ToString(): string {
    return `${this.GetString} ${this.maxAltitude}`;
  }
}

const AirVehicle1 = new AirVehicle({ brand: 'Rodia', model: 'Nashgarak', year: 45115 }, 100000);

console.log(AirVehicle1.ToString());
