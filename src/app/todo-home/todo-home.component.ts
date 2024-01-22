import { DynamicLayoutComponent } from 'shop-folder-component';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { GridService, ITodoGroup } from 'shop-folder-core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-home',
  standalone: true,
  imports: [DynamicLayoutComponent, MatIconModule],
  templateUrl: './todo-home.component.html',
  styleUrl: './todo-home.component.scss',
})
export class TodoHomeComponent
  extends GridService<ITodoGroup>
  implements OnInit
{
  override handleSelectModeOn(): void {
    throw new Error('Method not implemented.');
  }
  override handleSelectModeOff(): void {
    throw new Error('Method not implemented.');
  }

  constructor(public route: ActivatedRoute) {
    super([], route);
  }
  ngOnInit(): void {}
}
