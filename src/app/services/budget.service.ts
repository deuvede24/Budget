import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private prices = {
    seo: 300,
    advertising: 400,
    website: 500,
    page: 30,
    language: 30
  };

  constructor() {}

  calculateBudget(values: any): number {
    let total = 0;
    if (values.seo) {
      total += this.prices.seo;
    }
    if (values.advertising) {
      total += this.prices.advertising;
    }
    if (values.website) {
      total += this.prices.website + (values.numPages * values.numLanguages * this.prices.page);
    }
    return total;
  }
}

/*import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private prices = {
    seo: 300,
    advertising: 400,
    website: 500,
    page: 30,
    language: 30
  };

  private budgetsSubject = new BehaviorSubject<Budget[]>([]);
  budgets$ = this.budgetsSubject.asObservable();

  calculateBudget(values: any): number {
    let total = 0;
    if (values.seo) total += this.prices.seo;
    if (values.advertising) total += this.prices.advertising;
    if (values.website) total += this.prices.website + (values.numPages * values.numLanguages * this.prices.page);
    return total;
  }

  addBudget(budget: Budget) {
    this.budgetsSubject.next([...this.budgetsSubject.value, budget]);
  }

  getBudgets() {
    return this.budgets$;
  }
}

export interface Budget {
  clientName: string;
  phone: string;
  email: string;
  services: any;
  totalPrice: number;
} */









