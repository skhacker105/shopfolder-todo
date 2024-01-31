import { ITodo, ITodoStatus, TodoStatuses } from "shop-folder-core";

export class Todo implements ITodo {
  name: string;
  description: string;
  todoGroupId: number;
  targetDate: Date;
  status: TodoStatuses;
  statusChangedOn: Date;
  statusHistory: ITodoStatus[];
  id?: number | undefined;
  createdBy: number;
  createdOn: Date;
  isSelected: boolean;
  todoGroupName: string;
  markSelected(): void {
    throw new Error("Method not implemented.");
  }
  markUnselected(): void {
    throw new Error("Method not implemented.");
  }
  toggleSelection(): void {
    throw new Error("Method not implemented.");
  }

  constructor(groupname: string, todoname:string,  obj?: any) {
    this.name = obj && obj.name ? obj.name : todoname;
    this.description = obj && obj.description ? obj.description : '';
    this.todoGroupId = obj && obj.todoGroupId ? obj.todoGroupId : 0;
    this.targetDate = obj && obj.targetDate ? obj.targetDate : new Date();
    this.status = obj && obj.status ? obj.status : '';
    this.statusChangedOn = obj && obj.statusChangedOn ? obj.statusChangedOn : new Date();
    this.statusHistory = obj && obj.statusHistory ? obj.statusHistory : [];
    this.createdBy = obj && obj.createdBy ? obj.createdBy : 0;
    this.createdOn = obj && obj.createdOn ? obj.createdOn : new Date();
    this.isSelected = false;
    this.todoGroupName = obj && obj.todoGroupName ? obj.todoGroupName : groupname;
  }

}
