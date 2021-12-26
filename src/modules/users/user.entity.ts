import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  password: string;
}
