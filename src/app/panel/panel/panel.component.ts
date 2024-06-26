/*import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { ModalComponent } from './../../shared/modal/modal/modal.component';
import { BudgetService } from '../../services/budget.service';


@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ModalComponent],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})
export class PanelComponent {
  constructor(private budgetService: BudgetService) {}
}
*/

//BudgetService


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
//import { MatCheckboxModule } from '@angular/material/checkbox';
//import { MatCardModule } from '@angular/material/card';
//mport { ModalComponent } from './../../shared/modal/modal/modal.component';
import { BudgetService } from '../../services/budget.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  standalone: true,
  //imports: [CommonModule, ReactiveFormsModule, MatCheckboxModule, MatCardModule, ModalComponent]
  imports: [CommonModule, ReactiveFormsModule,]
})
export class PanelComponent {
  budgetForm: FormGroup;
  totalBudget: number = 0;

  constructor(private fb: FormBuilder, private budgetService: BudgetService) {
    this.budgetForm = this.fb.group({
      seo: false,
      advertising: false,
      website: false
    });

    
    this.budgetForm.valueChanges.subscribe(values => {
      this.totalBudget = this.budgetService.calculateBudget(values);
    });
  }
}

/*import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { BudgetService } from '../../services/budget.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class PanelComponent {
  budgetForm: FormGroup;
  totalBudget: number = 0;

  constructor(private fb: FormBuilder, private budgetService: BudgetService) {
    this.budgetForm = this.fb.group({
      seo: false,
      advertising: false,
      website: false
    });

    this.budgetForm.valueChanges.subscribe(values => {
      this.totalBudget = this.budgetService.calculateBudget(values);
    });
  }
}*/







