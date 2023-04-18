import { ADDRESS_LENGTH } from "src/utils/constants";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum FundCategoryType {
    INDEX = 0,
    INSTITUTION = 1,
    ICON = 2
}

@Entity()
export class Fund {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        unique: true,
        nullable: false,
        length: ADDRESS_LENGTH,
    })
    address: string;

    @Column({
        nullable: false,
        default: FundCategoryType.ICON
    })
    category: FundCategoryType;

    @Column({
        nullable: true,
    })
    image: string
}