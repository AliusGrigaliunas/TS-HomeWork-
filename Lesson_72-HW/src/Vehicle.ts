// Sukurkite klasę Vehicle ir padarykite ją tėvine [1.], [2.] ir [3.] punktais sukurtoms klasėms.
// 4.1 bendras savybes(brand, model, year) aprašykite su 'protected' pasiekiamumo lygiu.
// 4.2 perrrašykite visų klasių konstruktorius,
// jog bendros savybės (brand, model, year) būtų perduotos tėviniam konstruktoriui.

export type ObjectParameters = {
  brand: string,
  model:string,
  year:number,
};

export default class Vehicle {
  protected Protectedbrand: string;

  protected Protectedmodel:string;

  protected Protectedyear:number;

  constructor({ brand, model, year }: ObjectParameters) {
    this.Protectedbrand = brand;
    this.Protectedmodel = model;
    this.Protectedyear = year;
  }

  public set Brand(value:string) {
    this.Protectedbrand = value;
  }

  public set Model(value:string) {
    this.Protectedmodel = value;
  }

  public set Year(value:number) {
    this.Protectedyear = value;
  }

  protected get GetString(): string {
    return `${this.Protectedbrand} ${this.Protectedbrand} ${this.Protectedyear}`;
  }
}
