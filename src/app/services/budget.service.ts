/*import { Injectable } from '@angular/core';

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
}*/

/*import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Budget } from '../models/budget'; 

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

  addBudget(budget: Budget): void {
    const currentBudgets = this.budgetsSubject.value;
    this.budgetsSubject.next([...currentBudgets, budget]);
  }

  getBudgets(): Observable<Budget[]> {
    return this.budgets$;
  }
}
*/

/*import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Budget } from '../models/budget';

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

  /*private budgetsSubject: BehaviorSubject<Budget[]> = new BehaviorSubject<Budget[]>([]);
  budgets$: Observable<Budget[]> = this.budgetsSubject.asObservable();*

  private budgetsSubject = new BehaviorSubject<Budget[]>([]);
  budgets$ = this.budgetsSubject.asObservable();

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

  /*addBudget(budget: Budget): void {
    const budgets = this.budgetsSubject.getValue();
    this.budgetsSubject.next([...budgets, budget]);
  }

  getBudgets(): Observable<Budget[]> {
    return this.budgets$;
  }*

  addBudget(budget: Budget): void {
    const currentBudgets = this.budgetsSubject.value;
    this.budgetsSubject.next([...currentBudgets, budget]);
  }

  getBudgets(): Observable<Budget[]> {
    return this.budgets$;
    //return this.budgetsSubject.asObservable();
  }

  
}*/

/*import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Budget } from '../models/budget';
import {Signal, signal} from '@angular/core';

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

  addBudget(budget: Budget): void {
    const currentBudgets = this.budgetsSubject.value;
    this.budgetsSubject.next([...currentBudgets, budget]);
  }

  getBudgets(): Observable<Budget[]> {
    return this.budgets$;
  }
}*/



//OTRO ENFOQUE
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Budget } from '../models/budget';

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

  private budgetsSubject: BehaviorSubject<Budget[]> = new BehaviorSubject<Budget[]>([]);
  budgets$: Observable<Budget[]> = this.budgetsSubject.asObservable();

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

  /*addBudget(budget: Budget): void {
    const currentBudgets = this.budgetsSubject.value;
    this.budgetsSubject.next([...currentBudgets, budget]);
  }*/
  addBudget(budget: Budget): void {
    const currentBudgets = this.budgetsSubject.value;
    const newBudget = { ...budget, date: new Date().toISOString() }; // Add date here
    this.budgetsSubject.next([...currentBudgets, newBudget]);
  }

  getBudgets(): Observable<Budget[]> {
    return this.budgets$;
  }
}
