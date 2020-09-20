import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Entry } from './Entry';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  name: string;

  @Column('int')
  type: number;

  @OneToMany((type) => Entry, (entry) => entry.category)
  entries: Entry[];

  constructor(id: number, name: string, type: number, entries: Entry[]) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.entries = entries;
  }
}

export interface CategoryDTO {
  name: string;
  type: number;
}
