import { ADDRESS_LENGTH } from "src/utils/constants";
import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { PortfolioAsset } from "./portfolio.entity";

export enum FundCategoryType {
    INDEX = 0,
    INSTITUTION = 1,
    ICON = 2
}

@Entity()
export class Fund {
    @PrimaryColumn()
    address: string;

    @Column({
        nullable: true,
    })
    name: string;

    @Column({
        nullable: true,
    })
    symbol: string;

    @Column({
        nullable: false,
        length: ADDRESS_LENGTH,
    })
    comptroller: string;

    @Column({
        nullable: false,
        length: ADDRESS_LENGTH
    })
    token_root: string;

    @Column({
        nullable: false,
        length: ADDRESS_LENGTH,
    })
    owner: string;

    @Column({
        nullable: false,
        default: FundCategoryType.ICON
    })
    category: FundCategoryType;

    @Column({
        nullable: true,
    })
    image: string;

    @Column({
        nullable: true,
    })
    description: string;
}