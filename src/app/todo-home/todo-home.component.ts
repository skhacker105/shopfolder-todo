import { DynamicLayoutComponent } from 'shop-folder-component';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { GridService, IGridView, ITodo } from 'shop-folder-core';
import { ActivatedRoute } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { CommonModule } from '@angular/common';
import { Todo } from '../models';
import 'ag-grid-enterprise';
import { DEFAULT_COLUMNS, GROUP_BY_STATUS_COLUMNS } from '../view-columns';
import { MatMenuModule } from '@angular/material/menu';

const TodoPageViews: IGridView[] = [DEFAULT_COLUMNS, GROUP_BY_STATUS_COLUMNS];

@Component({
  selector: 'app-todo-home',
  standalone: true,
  imports: [
    CommonModule,
    DynamicLayoutComponent,
    MatIconModule,
    AgGridModule,
    MatMenuModule,
  ],
  templateUrl: './todo-home.component.html',
  styleUrl: './todo-home.component.scss',
})
export class TodoHomeComponent extends GridService<ITodo> implements OnInit {
  override handleSelectModeOn(): void {
    throw new Error('Method not implemented.');
  }
  override handleSelectModeOff(): void {
    throw new Error('Method not implemented.');
  }

  constructor(public route: ActivatedRoute) {
    super(TodoPageViews, route);
  }
  ngOnInit(): void {
    this.loadDummyData();
  }

  loadDummyData() {
    this.data = [];
    const realNames = [
      'Saurabh Kumar',
      'Diksha Bharti',
      'John Doe',
      'Shikhar',
      'Mahendra Singh Dhoni',
      'Alice Johnson',
      'Bob Smith',
      'Catherine Brown',
      'David Miller',
      'Shikhar',
      'Mahendra Singh Dhoni',
      'Alice Johnson',
      'Bob Smith',
      'Catherine Brown',
      'David Miller',
      'Shikhar',
      'Mahendra Singh Dhoni',
      'Alice Johnson',
      'Bob Smith',
      'Catherine Brown',
      'David Miller',
      'Emily Davis',
      'Frank Wilson',
      'Grace Martinez',
      'Henry Taylor',
      'Isabel Anderson',
      'Jack White',
      'Katherine Harris',
      'Liam Martin',
      'Mia Thompson',
      'Nathan Jackson',
      'Olivia Garcia',
      'Peter Robinson',
      'Quinn Lee',
      'Rachel Turner',
      'Samuel Harris',
      'Liam Martin',
      'Mia Thompson',
      'Nathan Jackson',
      'Olivia Garcia',
      'Peter Robinson',
      'Quinn Lee',
      'Rachel Turner',
      'Samuel Harris',
      'Sophia Martinez',
      'Thomas Clark',
    ];

    const todoName = [
      'Todo Shop folder',
      'First Book',
      'Client central',
      'Data Sync Direct',
      'Quickstart',
      'Observability',
    ];

    const todoStatus = ['backlog', 'pending', 'completed'];
    for (let i = 0; i < 56; i++) {
      let _id = `+91 ${Math.floor(Math.random() * 10000000000)
        .toString()
        .padStart(10, '0')}`;
      let groupname = realNames[Math.floor(Math.random() * realNames.length)];
      let todoname = todoName[Math.floor(Math.random() * todoName.length)];
      let todostatus =
        todoStatus[Math.floor(Math.random() * todoStatus.length)];
      this.data.push(this.createTodo(groupname, todoname, todostatus));
    }
    this.data.sort((a, b) => a.name.localeCompare(b.name));
  }

  createTodo(groupname: string, todoname: string, todostatus: string) {
    return new Todo('', '', {
      name: todoname,
      todoGroupId: 0,
      targetDate: new Date(),
      status: todostatus,
      statusChangedOn: new Date(),
      statusHistory: [],
      createdOn: new Date(),
      todoGroupName: groupname,
    });
  }
}
