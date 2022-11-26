import { Currency } from './currency.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Price {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Currency, (Currency) => Currency.id)
  currency: Currency;

  @Column({ nullable: true })
  price: string;

  @Column({ nullable: false })
  timeId: number;
}
