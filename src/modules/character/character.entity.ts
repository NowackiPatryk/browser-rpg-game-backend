import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../users/user.entity';

@Entity('characters')
export class Character {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({
    unique: true,
  })
  readonly nick: string;

  @Column({
    type: 'integer',
  })
  readonly hp: number;

  @Column({
    type: 'integer',
  })
  readonly strength: number;

  @Column({
    type: 'integer',
  })
  readonly agility: number;

  @Column({
    type: 'integer',
  })
  readonly luck: number;

  @OneToOne(() => User)
  user: User;
}
