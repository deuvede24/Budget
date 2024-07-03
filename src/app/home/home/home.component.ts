
/*

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PanelComponent } from '../../panel/panel/panel.component';
import { BudgetService } from '../../services/budget.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PanelComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  budgetForm: FormGroup;
  totalBudget: number = 0;
  services = [
    { controlName: 'seo', label: 'Fer una campanya SEO (300 €)' },
    { controlName: 'advertising', label: 'Fer una campanya de publicitat (400 €)' },
    { controlName: 'website', label: 'Fer una pàgina web (500 €)' }
  ];

  constructor(private fb: FormBuilder, private budgetService: BudgetService) {
    this.budgetForm = this.fb.group({
      seo: false,
      advertising: false,
      website: false
    });
  }

  ngOnInit() {
    this.budgetForm.valueChanges.subscribe(values => {
      this.totalBudget = this.budgetService.calculateBudget(values);
    });
  }
}*/

/*import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PanelComponent } from '../../panel/panel/panel.component';
import { BudgetService } from '../../services/budget.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PanelComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  budgetForm: FormGroup;
  totalBudget: number = 0;
  services = [
    { controlName: 'seo', label: 'SEO', description: 'Programación de una web responsive completa', price: 300 },
    { controlName: 'advertising', label: 'ADS', description: 'Programación de una web responsive completa', price: 400 },
    { controlName: 'website', label: 'WEB', description: 'Programación de una web responsive completa', price: 500 }
  ];

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

  ngOnInit(): void {}

  trackByFn(index: number, item: any): any {
    return item.controlName;
  }
}*/

/*
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PanelComponent } from '../../panel/panel/panel.component';
import { BudgetService } from '../../services/budget.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PanelComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  budgetForm: FormGroup;
  totalBudget: number = 0;
  showPanel: boolean = false;
  services = [
    { controlName: 'seo', label: 'SEO', description: 'Programación de una web responsive completa', price: 300 },
    { controlName: 'advertising', label: 'ADS', description: 'Programación de una web responsive completa', price: 400 },
    { controlName: 'website', label: 'WEB', description: 'Programación de una web responsive completa', price: 500 }
  ];

  constructor(private fb: FormBuilder, private budgetService: BudgetService) {
    this.budgetForm = this.fb.group({
      seo: false,
      advertising: false,
      website: false,
      numPages: [1, Validators.min(1)],
      numLanguages: [1, Validators.min(1)]
    });

    this.budgetForm.valueChanges.subscribe(values => {
      this.totalBudget = this.budgetService.calculateBudget(values);
      this.showPanel = values.website;
    });
  }

  ngOnInit(): void {}

  onNumPagesChange(numPages: number) {
    this.budgetForm.controls['numPages'].setValue(numPages);
  }

  onNumLanguagesChange(numLanguages: number) {
    this.budgetForm.controls['numLanguages'].setValue(numLanguages);
  }

  trackByFn(index: number, item: any): any {
    return item.controlName;
  }
}*/


/*import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PanelComponent } from '../../panel/panel/panel.component';
import { BudgetService } from '../../services/budget.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PanelComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  budgetForm: FormGroup;
  totalBudget: number = 0;
  showPanel: boolean = false;
  services = [
    { controlName: 'seo', label: 'SEO', description: 'Programación de una web responsive completa', price: 300 },
    { controlName: 'advertising', label: 'ADS', description: 'Programación de una web responsive completa', price: 400 },
    { controlName: 'website', label: 'WEB', description: 'Programación de una web responsive completa', price: 500 }
  ];

  constructor(private fb: FormBuilder, private budgetService: BudgetService) {
    this.budgetForm = this.fb.group({
      seo: false,
      advertising: false,
      website: false,
      numPages: new FormControl<number>(1, [Validators.min(1)]),
      numLanguages: new FormControl<number>(1, [Validators.min(1)])
    });

    this.budgetForm.valueChanges.subscribe(values => {
      this.totalBudget = this.budgetService.calculateBudget(values);
      this.showPanel = values.website;
    });
  }

  ngOnInit(): void { }

  onNumPagesChange(numPages: number) {
    this.budgetForm.controls['numPages'].setValue(numPages);
  }

  onNumLanguagesChange(numLanguages: number) {
    this.budgetForm.controls['numLanguages'].setValue(numLanguages);
  }
}*/
//LATEST!
/*import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule aquí
import { CommonModule } from '@angular/common';
import { PanelComponent } from '../../panel/panel/panel.component';
import { BudgetService } from '../../services/budget.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PanelComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  budgetForm: FormGroup;
  totalBudget: number = 0;
  showPanel: boolean = false;
  services = [
    { controlName: 'seo', label: 'SEO', description: 'Complete responsive web programming', price: 300 },
    { controlName: 'advertising', label: 'ADS', description: 'Complete responsive web programming', price: 400 },
    { controlName: 'website', label: 'WEB', description: 'Complete responsive web programming', price: 500 }
  ];

  constructor(private fb: FormBuilder, private budgetService: BudgetService) {
    this.budgetForm = this.fb.group({
      seo: false,
      advertising: false,
      website: false,
      numPages: [1, [Validators.min(1)] ],
      numLanguages: [1, [Validators.min(1)]]
    });

    this.budgetForm.valueChanges.subscribe(values => {
      this.totalBudget = this.budgetService.calculateBudget(values);
      this.showPanel = values.website;
    });
  }

  ngOnInit(): void { }

  onNumPagesChange(numPages: number) {
    this.budgetForm.controls['numPages'].setValue(numPages);
  }

  onNumLanguagesChange(numLanguages: number) {
    this.budgetForm.controls['numLanguages'].setValue(numLanguages);
  }
}*/

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PanelComponent } from '../../panel/panel/panel.component';
import { BudgetService } from '../../services/budget.service';
import { BudgetsListComponent } from '../../budgets-list/budgets-list/budgets-list.component';
import { Budget } from '../../models/budget'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PanelComponent, BudgetsListComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  budgetForm: FormGroup;
  clientForm: FormGroup;
  totalBudget: number = 0;
  showPanel: boolean = false;
  services = [
    { controlName: 'seo', label: 'SEO', description: 'Complete responsive web programming', price: 300 },
    { controlName: 'advertising', label: 'ADS', description: 'Complete responsive web programming', price: 400 },
    { controlName: 'website', label: 'WEB', description: 'Complete responsive web programming', price: 500 }
  ];

  constructor(private fb: FormBuilder, private budgetService: BudgetService) {
    this.budgetForm = this.fb.group({
      seo: false,
      advertising: false,
      website: false,
      numPages: [1, [Validators.min(1)]],
      numLanguages: [1, [Validators.min(1)]]
    });

    this.clientForm = this.fb.group({
      clientName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.budgetForm.valueChanges.subscribe(values => {
      this.totalBudget = this.budgetService.calculateBudget(values);
      this.showPanel = values.website;
    });
  }

  ngOnInit(): void { }

  onNumPagesChange(numPages: number) {
    this.budgetForm.controls['numPages'].setValue(numPages);
  }

  onNumLanguagesChange(numLanguages: number) {
    this.budgetForm.controls['numLanguages'].setValue(numLanguages);
  }

  submitBudget() {
    if (this.clientForm.valid) {
      const newBudget: Budget = {
        clientName: this.clientForm.value.clientName,
        phone: this.clientForm.value.phone,
        email: this.clientForm.value.email,
        services: this.budgetForm.value,
        totalPrice: this.totalBudget,
        date: new Date().toISOString(),
      };
      this.budgetService.addBudget(newBudget);
      this.clientForm.reset();
      this.budgetForm.reset({
        seo: false,
        advertising: false,
        website: false,
        numPages: 1,
        numLanguages: 1
      });
      this.totalBudget = 0;
    }
  }
}
