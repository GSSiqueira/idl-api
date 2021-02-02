import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
    unique: true,
  })
  username: string;

  @Column({
    length: 100,
    unique: true,
  })
  email: string;

  @Column({
    length: 255,
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
