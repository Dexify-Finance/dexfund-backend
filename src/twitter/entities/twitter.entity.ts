import { ADDRESS_LENGTH } from './../../utils/constants';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Twitter {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    nullable: false,
    length: ADDRESS_LENGTH,
  })
  address: string;

  @Column({
    unique: true,
    nullable: false,
    length: ADDRESS_LENGTH,
  })
  fundAddress: string;

  @Column({ nullable: false })
  twitterName: string;

  @Column({ nullable: true })
  twitterScreenName: string;

  @Column({ nullable: true })
  twitterImage: string;
}
