import {
  MAX_NAME_LENGTH,
  MAX_BIO_LENGTH,
  MAX_TITLE_LENGTH,
  ADDRESS_LENGTH,
} from './../utility/user-constants';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    unique: true,
    nullable: false,
    length: ADDRESS_LENGTH,
  })
  address: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true, length: MAX_TITLE_LENGTH })
  title: string;

  @Column({ nullable: true, length: MAX_BIO_LENGTH })
  bio: string;

  @Column({ nullable: true, length: MAX_NAME_LENGTH })
  name: string;

  @Column({ nullable: true })
  image: string;
}
