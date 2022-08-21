"use strict";
const formatLine = (text, indent = 0) => `${('\t').repeat(indent) + text}\n`;
class Person {
    id;
    name;
    surname;
    constructor({ id, name, surname }) {
        this.id = id;
        this.name = name;
        this.surname = surname;
    }
    getPersonInfo = () => `${this.name} ${this.surname} ${this.id}`;
}
class Employee extends Person {
}
class Job {
    title;
    pay;
    static instanceCount = 0;
    id;
    finished = false;
    payed = false;
    dateFinished;
    constructor(title, pay) {
        this.title = title;
        this.pay = pay;
        Job.instanceCount += 1;
        this.id = `Job-${Job.instanceCount}`;
        this.finished = false;
        this.payed = false;
    }
    completeJob = () => {
        this.finished = true;
        this.dateFinished = new Date();
    };
    setJobPayed = () => {
        this.payed = true;
    };
    getPay = () => this.pay;
    isFinished = () => this.finished;
    isPayed = () => this.payed;
    toString = () => {
        const { id, title, finished, pay, dateFinished, payed, } = this;
        return formatLine(`id: ${id}`, 2)
            + formatLine(`title: ${title}`, 2)
            + formatLine(`pay: ${pay}`, 2)
            + (finished ? formatLine(`finished: ${finished ? 'Yes' : 'No'}`, 2) : '')
            + (payed ? formatLine(`payed: ${payed ? 'Yes' : 'No'}`, 2) : '')
            + (dateFinished ? formatLine(`date finished: ${dateFinished.toLocaleDateString('lt-LT')}`, 2) : '');
    };
}
class BusinessLicencePerson extends Employee {
    jobs;
    constructor({ jobs = [], ...personProps }) {
        super(personProps);
        this.jobs = jobs;
    }
    calcPay() {
        const unpayedFinishedJobs = this.jobs.filter((job) => job.isFinished() && !job.isPayed());
        const calculatedPay = unpayedFinishedJobs.reduce((sum, job) => sum + job.getPay(), 0);
        unpayedFinishedJobs.forEach((job) => job.setJobPayed());
        return calculatedPay;
    }
    toString() {
        const { jobs } = this;
        let result = this.getPersonInfo() + formatLine(`jobs:${jobs.length === 0 ? ' nėra darbų' : ''}`, 1);
        if (this.jobs.length > 0) {
            result += jobs.map((job) => `${job.toString()}`).join('\n');
        }
        return result;
    }
}
class SelfEmployedPerson extends Employee {
    hourPay;
    hoursWorked;
    constructor({ hourPay, hoursWorked, ...personProps }) {
        super(personProps);
        this.hourPay = hourPay;
        this.hoursWorked = hoursWorked;
    }
    calcPay() {
        return this.hourPay * this.hoursWorked;
    }
    toString() {
        return formatLine(`${this.getPersonInfo()} ${this.hourPay} ${this.hoursWorked}`, 1);
    }
}
class WorkPerson extends Employee {
    hourPay;
    fullTimeEquivalent;
    constructor({ hourPay, fullTimeEquivalent, ...personProps }) {
        super(personProps);
        this.hourPay = hourPay;
        this.fullTimeEquivalent = fullTimeEquivalent;
    }
    calcPay() {
        return this.hourPay * ((this.fullTimeEquivalent / 5) * 40);
    }
    toString() {
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
//# sourceMappingURL=main.js.map