import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Category } from './Category';

@Entity()
export class Entry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column('double')
  value: number;

  @ManyToOne((type) => Category, (category) => category.entries)
  category: Category;

  constructor(id: number, date: string, value: number, category: Category) {
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
