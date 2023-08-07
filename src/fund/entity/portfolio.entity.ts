import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PortfolioAsset {
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column({
        nullable: false
    })
    fund: string;

    @Column({
        nullable: false
    })
    currency: string;

    @Column({
        nullable: true,
        default: "0"
    })
    amount: string;

    @Column({
        nullable: false
    })
    timestamp: string;
}