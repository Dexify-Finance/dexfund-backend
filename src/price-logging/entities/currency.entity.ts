import { Price } from './price.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Currency {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => Price, (Price) => Price.price)
  prices: Price[];

  @Column()
  symbol: string;

  @Column()
  name: string;
}
