import { ADDRESS_LENGTH } from "src/utils/constants";
import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { CurrencyPrice } from "./currency_price.entity";

@Entity()
export class Currency {
    @PrimaryColumn({
        unique: true,
        nullable: false,
        length: ADDRESS_LENGTH,
    })
    address: string;

    @Column({
        default: 1000
    })
    chainId: number;

    @Column({
        nullable: false,
    })
    name: string;

    @Column({
        nullable: false,
    })
    symbol: string;

    @Column({
        nullable: false
    })
    decimals: number;

    @Column({
        nullable: true,
    })
    logoURI: string;

    @OneToMany(() => CurrencyPrice, currencyPrice => currencyPrice.currency)
    @JoinColumn()
    priceHistory: CurrencyPrice[];

    @Column({
        nullable: true
    })
    version: number;

    @Column({
        nullable: true
    })
    verified: boolean;

    @Column({
        nullable: true,
        default: "venom"
    })
    vendor: string;
}