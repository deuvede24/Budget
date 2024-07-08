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


  addBudget(budget: Budget): void {
    const currentBudgets = this.budgetsSubject.value;
    const newBudget = { ...budget, date: new Date().toISOString() }; // Add fecha válida
    this.budgetsSubject.next([...currentBudgets, newBudget]);
  }

  getBudgets(): Observable<Budget[]> {
    return this.budgets$;
  }
}
