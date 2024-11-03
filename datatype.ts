import { Time } from "@angular/common"

export interface emplotyee {
  id: number,
  name: string,
  city: string,
  gender: string

}
export interface employeeAtt {
  id: number,
  name: string,
  possition: string,
  date: Date
}

export interface payroll {
  id: number;
  employeeId: number;
  employeeName: string;
  baseSalary: number;
  bonuses: number;
  deductions: number;
  totalSalary: number;
  paymentDate: Date;
}