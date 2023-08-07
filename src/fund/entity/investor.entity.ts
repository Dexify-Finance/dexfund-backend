import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FundInvestor {
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column({
        nullable: false
    })
    fund: string;

    @Column({
        nullable: false
    })
    investor: string;

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