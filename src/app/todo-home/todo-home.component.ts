import { Component } from '@angular/core';
import { DynamicLayoutComponent, TableViewComponent } from 'shop-folder-component';

@Component({
  selector: 'app-todo-home',
  standalone: true,
  imports: [TableViewComponent, DynamicLayoutComponent],
  templateUrl: './todo-home.component.html',
  styleUrl: './todo-home.component.scss'
})
export class TodoHomeComponent {

}
