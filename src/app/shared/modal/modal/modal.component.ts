import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetsListComponent } from './../../../budgets-list/budgets-list/budgets-list.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, BudgetsListComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() modalId: string = '';
  @Input() modalTitle: string = '';
  @Input() modalBody: string = '';
}

