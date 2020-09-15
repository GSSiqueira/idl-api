import { Category } from './Category';

export class Entry {
  id: number;
  date: Date;
  value: number;
  category: Category;

  constructor(id: number, date: Date, value: number, category: Category) {
    this.id = id;
    this.date = date;
    this.value = value;
    this.category = category;
  }
}

export interface EntryDTO {
  date: string;
  value: number;
  categoryId: number;
}
