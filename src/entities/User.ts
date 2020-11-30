import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
  })
  username: string;

  @Column({
    length: 100,
  })
  email: string;

  @Column({
    length: 50,
  })
  password: string;

  @Column()
  isAdmin: boolean;
}

export interface UserDTO {
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
}
