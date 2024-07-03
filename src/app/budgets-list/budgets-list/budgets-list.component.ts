import { signal } from '@angular/core';
/*import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-budgets-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './budgets-list.component.html',
  styleUrl: './budgets-list.component.scss'
})
export class BudgetsListComponent {

}*/


/*import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetService } from '../../services/budget.service';
import { Observable } from 'rxjs';
import { Budget } from '../../models/budget';
@Component({
  selector: 'app-budgets-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './budgets-list.component.html',
  styleUrls: ['./budgets-list.component.scss']
})
export class BudgetsListComponent implements OnInit {
  //[x: string]: any;
  budgets$: Observable<Budget[]>;
  budget: any; //ESTE ES EL CAMBIO

  constructor(private budgetService: BudgetService) {
    this.budgets$ = this.budgetService.getBudgets();
  }

  ngOnInit(): void { }

  trackByClientName(index: number, budget: Budget): string {
    return budget.clientName;
  }

}*/
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetService } from '../../services/budget.service';
import { Budget } from '../../models/budget';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-budgets-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './budgets-list.component.html',
  styleUrls: ['./budgets-list.component.scss']
})
export class BudgetsListComponent implements OnInit {
  budgets$: Observable<Budget[]>;
  budgets: Budget[] = [];
 // filteredBudgets: Budget[] = [];
  //searchTerm: string = '';

  constructor(private budgetService: BudgetService) {
    this.budgets$ = this.budgetService.getBudgets();
  }

  ngOnInit(): void {
    this.budgets$.subscribe(budgets => {
      this.budgets = budgets;
    });
  }

  trackByClientName(index: number, budget: Budget): string {
    return budget.clientName;
  }
  sortByDate(): void {
    this.budgets.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }

  sortByPrice(): void {
    this.budgets.sort((a, b) => a.totalPrice - b.totalPrice);
  }

  sortByName(): void {
    this.budgets.sort((a, b) => a.clientName.localeCompare(b.clientName));
  }
}




