import { Component } from '@angular/core';
import { DynamicLayoutComponent } from 'shop-folder-component';

@Component({
  selector: 'app-todo-home',
  standalone: true,
  imports: [DynamicLayoutComponent],
  templateUrl: './todo-home.component.html',
  styleUrl: './todo-home.component.scss'
})
export class TodoHomeComponent {

}
