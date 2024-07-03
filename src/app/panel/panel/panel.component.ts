

/*import { Component } from '@angular/core';
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
}*/


// 
/*import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BudgetService } from '../../services/budget.service';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  panelForm: FormGroup;

  constructor(private fb: FormBuilder, private budgetService: BudgetService) {
    this.panelForm = this.fb.group({
      numPages: [1, [Validators.min(1)]],
      numLanguages: [1, [Validators.min(1)]]
    });
  }

  ngOnInit(): void {}

  incrementPages() {
    const currentPages = this.panelForm.controls['numPages'].value;
    this.panelForm.controls['numPages'].setValue(currentPages + 1);
  }

  decrementPages() {
    const currentPages = this.panelForm.controls['numPages'].value;
    if (currentPages > 1) {
      this.panelForm.controls['numPages'].setValue(currentPages - 1);
    }
  }

  incrementLanguages() {
    const currentLanguages = this.panelForm.controls['numLanguages'].value;
    this.panelForm.controls['numLanguages'].setValue(currentLanguages + 1);
  }

  decrementLanguages() {
    const currentLanguages = this.panelForm.controls['numLanguages'].value;
    if (currentLanguages > 1) {
      this.panelForm.controls['numLanguages'].setValue(currentLanguages - 1);
    }
  }
}*/


//CHECK 
/*import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {
  @Input() numPages: number = 1;
  @Output() numPagesChange = new EventEmitter<number>();

  @Input() numLanguages: number = 1;
  @Output() numLanguagesChange = new EventEmitter<number>();

  incrementPages() {
    this.numPages += 1;
    this.numPagesChange.emit(this.numPages);
  }

  decrementPages() {
    if (this.numPages > 1) {
      this.numPages -= 1;
      this.numPagesChange.emit(this.numPages);
    }
  }

  incrementLanguages() {
    this.numLanguages += 1;
    this.numLanguagesChange.emit(this.numLanguages);
  }

  decrementLanguages() {
    if (this.numLanguages > 1) {
      this.numLanguages -= 1;
      this.numLanguagesChange.emit(this.numLanguages);
    }
  }
}*/

/*import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms'; // Asegúrate de importar ReactiveFormsModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Importa CommonModule y ReactiveFormsModule
})
export class PanelComponent implements OnInit {
  //@Input() parentForm!: FormGroup; // Usar '!' para indicar que será inicializado
  @Input() parentForm: FormGroup = new FormGroup({});

  constructor() {}

  //ngOnInit(): void {}

  ngOnInit(): void {
    // Inicializar los valores si no están presentes
    if (!this.parentForm.controls['numPages'].value) {
      this.parentForm.controls['numPages'].setValue(1);
    }
    if (!this.parentForm.controls['numLanguages'].value) {
      this.parentForm.controls['numLanguages'].setValue(1);
    }
  }


  incrementPages() {
    const currentPages = this.parentForm.controls['numPages'].value;
    this.parentForm.controls['numPages'].setValue(currentPages + 1);
  }

  decrementPages() {
    const currentPages = this.parentForm.controls['numPages'].value;
    if (currentPages > 1) {
      this.parentForm.controls['numPages'].setValue(currentPages - 1);
    }
  }

  incrementLanguages() {
    const currentLanguages = this.parentForm.controls['numLanguages'].value;
    this.parentForm.controls['numLanguages'].setValue(currentLanguages + 1);
  }

  decrementLanguages() {
    const currentLanguages = this.parentForm.controls['numLanguages'].value;
    if (currentLanguages > 1) {
      this.parentForm.controls['numLanguages'].setValue(currentLanguages - 1);
    }
  }
}*/


import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../shared/modal/modal/modal.component';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ModalComponent]
})
export class PanelComponent implements OnInit {
  @Input() parentForm: FormGroup = new FormGroup({});

  constructor() {}

  ngOnInit(): void {
    if (!this.parentForm.controls['numPages'].value) {
      this.parentForm.controls['numPages'].setValue(1);
    }
    if (!this.parentForm.controls['numLanguages'].value) {
      this.parentForm.controls['numLanguages'].setValue(1);
    }
  }

  incrementPages() {
    const currentPages = this.parentForm.controls['numPages'].value;
    this.parentForm.controls['numPages'].setValue(currentPages + 1);
  }

  decrementPages() {
    const currentPages = this.parentForm.controls['numPages'].value;
    if (currentPages > 1) {
      this.parentForm.controls['numPages'].setValue(currentPages - 1);
    }
  }

  incrementLanguages() {
    const currentLanguages = this.parentForm.controls['numLanguages'].value;
    this.parentForm.controls['numLanguages'].setValue(currentLanguages + 1);
  }

  decrementLanguages() {
    const currentLanguages = this.parentForm.controls['numLanguages'].value;
    if (currentLanguages > 1) {
      this.parentForm.controls['numLanguages'].setValue(currentLanguages - 1);
    }
  }
}
