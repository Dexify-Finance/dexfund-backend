import { ADDRESS_LENGTH } from "src/utils/constants";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Currency } from "./currency.entity";

@Entity()
export class CurrencyPrice {
    @PrimaryGeneratedColumn('increment')
    id: string;

    @ManyToOne(() => Currency, currency => currency.priceHistory)
    currency: Currency;

    @Column({
        nullable: false
    })
    timestamp: string;

    @Column({
        nullable: false
    })
    price: string;


}