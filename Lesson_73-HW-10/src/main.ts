/* eslint-disable no-console */
/* eslint-disable max-classes-per-file */

const formatLine = (text: string, indent: number = 0): string => `${('\t').repeat(indent) + text}\n`;

type PersonProps = {
  id: string,
  name: string,
  surname: string,
};

abstract class Person {
  protected id!: string;

  protected name!: string;

  protected surname!: string;

  constructor({ id, name, surname }: PersonProps) {
    this.id = id;
    this.name = name;
    this.surname = surname;
  }

  public getPersonInfo = ():string => `${this.name} ${this.surname} ${this.id}`;

  public abstract toString():string;
}

abstract class Employee extends Person {
  public abstract calcPay():number;
}

class Job {
  private static instanceCount = 0;

  private id!: string;

  private finished: boolean = false;

  private payed: boolean = false;

  private dateFinished?: Date;

  constructor(
    private title: string,
    private pay: number,
  ) {
    Job.instanceCount += 1;
    this.id = `Job-${Job.instanceCount}`;

    this.finished = false;
    this.payed = false;
  }

  public completeJob = (): void => {
    this.finished = true;
    this.dateFinished = new Date();
  };

  public setJobPayed = (): void => {
    this.payed = true;
  };

  public getPay = (): number => this.pay;

  public isFinished = (): boolean => this.finished;

  public isPayed = (): boolean => this.payed;

  public toString = (): string => {
    const {
      id,
      title,
      finished,
      pay,
      dateFinished,
      payed,
    } = this;

    return formatLine(`id: ${id}`, 2)
      + formatLine(`title: ${title}`, 2)
      + formatLine(`pay: ${pay}`, 2)
      + (finished ? formatLine(`finished: ${finished ? 'Yes' : 'No'}`, 2) : '')
      + (payed ? formatLine(`payed: ${payed ? 'Yes' : 'No'}`, 2) : '')
      + (dateFinished ? formatLine(`date finished: ${dateFinished.toLocaleDateString('lt-LT')}`, 2) : '');
  };
}

type BuisnessLicencePersonProps = PersonProps & {
  jobs?: Job[],
};

class BusinessLicencePerson extends Employee {
  private jobs!: Job[];

  constructor({ jobs = [], ...personProps }: BuisnessLicencePersonProps) {
    super(personProps);
    this.jobs = jobs;
  }

  public calcPay(): number {
    const unpayedFinishedJobs = this.jobs.filter((job) => job.isFinished() && !job.isPayed());
    const calculatedPay = unpayedFinishedJobs.reduce((sum, job) => sum + job.getPay(), 0);
    unpayedFinishedJobs.forEach((job) => job.setJobPayed());

    return calculatedPay;
  }

  public override toString(): string {
    const { jobs } = this;

    let result = this.getPersonInfo() + formatLine(`jobs:${jobs.length === 0 ? ' nėra darbų' : ''}`, 1);
    if (this.jobs.length > 0) {
      result += jobs.map((job) => `${job.toString()}`).join('\n');
    }

    return result;
  }
}

type SelfEmployed = PersonProps & {
  hourPay:number,
  hoursWorked:number,
};

class SelfEmployedPerson extends Employee {
  private hourPay!: number;

  private hoursWorked!: number;

  constructor(
    { hourPay, hoursWorked, ...personProps }:SelfEmployed,
  ) {
    super(personProps);
    this.hourPay = hourPay;
    this.hoursWorked = hoursWorked;
  }

  public calcPay(): number {
    return this.hourPay * this.hoursWorked;
  }

  public override toString(): string {
    return formatLine(`${this.getPersonInfo()} ${this.hourPay} ${this.hoursWorked}`, 1);
  }
}

type PersonOfWork = PersonProps & {
  hourPay:number,
  fullTimeEquivalent:number,
};

class WorkPerson extends Employee {
  private hourPay!: number;

  private fullTimeEquivalent!: number;

  constructor(
    { hourPay, fullTimeEquivalent, ...personProps }: PersonOfWork,
  ) {
    super(personProps);
    this.hourPay = hourPay;
    this.fullTimeEquivalent = fullTimeEquivalent;
  }

  public calcPay(): number {
    return this.hourPay * ((this.fullTimeEquivalent / 5) * 40);
  }

  public override toString(): string {
    return `${this.getPersonInfo()} ${this.hourPay} ${this.fullTimeEquivalent}`;
  }
}

const jobs = [
  new Job('VideoEditor', 1500),
  new Job('Programmer', 3700),
];

const employees = [
  new BusinessLicencePerson({
    id: '15169845878',
    name: 'Plunksytė',
    surname: 'Krupštytė',
    jobs,
  }),
  new SelfEmployedPerson({
    name: 'Gustas',
    id: '19875858585',
    surname: 'Gustevičius',
    hourPay: 5,
    hoursWorked: 15,
  }),
  new WorkPerson({
    name: 'Juozas',
    surname: 'Kestaits',
    id: '6846468489',
    hourPay: 4,
    fullTimeEquivalent: 30,
  }),
];

jobs[0].completeJob();
jobs[1].completeJob();

employees.forEach((emp) => console.log(emp.toString()));
employees.forEach((emp) => console.log(`${emp.calcPay()}\u20AC`));
