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

  @OneToMany((type) => Entry, (entry) => entry.category, {
    cascade: true,
  })
  entries: Entry[];
}

export interface CategoryDTO {
  name: string;
  type: number;
}

export enum CategoryType {
  EntradaCaixa = 0,
  FechamentoCaixa = 1,
  DespesaDiaria = 2,
  DespesaFixa = 3,
}
