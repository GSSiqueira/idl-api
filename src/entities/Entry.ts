import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { Category } from "./Category";

@Entity()
export class Entry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("date")
  date: string;

  @Column({ type: "timestamp", nullable: true })
  time: Date;

  @Column("double")
  value: number;

  @Column({
    name: "categoryId",
  })
  categoryId: number;

  @ManyToOne((type) => Category, (category) => category.entries, {
    eager: true,
    onDelete: "CASCADE",
  })
  @JoinTable()
  category: Category;
}

export interface EntryDTO {
  date: string;
  value: number;
  categoryId: number;
}
