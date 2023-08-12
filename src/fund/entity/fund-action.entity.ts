import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FundAction {
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
        nullable: false
    })
    action_type: string;

    @Column({
        nullable: true
    })
    currency: string;

    @Column({
        nullable: true,
        default: "0"
    })
    amount: string;

    @Column({
        nullable: true,
        default: '0:'
    })
    hash: string;

    @Column({
        nullable: false
    })
    timestamp: string;
}