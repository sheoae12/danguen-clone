import {
    Column,
    DeleteDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn
} from 'typeorm';
import { Item } from './item.entity';
import { Purchase } from './purchase.entity';
import { Wish } from './wish.entity';

@Entity({ name: 'user', database: process.env.DB_NAME })
export class User {
    @PrimaryGeneratedColumn({ name: 'pk', type: 'int' })
    pk: number;

    @Column({
        name: 'id',
        type: 'binary',
        length: 16,
        unique: true
    })
    id: string;

    @Column({
        name: 'nickname',
        type: 'varchar',
        length: 10,
        unique: true
    })
    nickname: string;

    @Column({
        name: 'tel',
        type: 'varchar',
        length: 11,
        unique: true
    })
    tel: string;

    @Column({ name: 'created_date', type: 'timestamp' })
    created_date: Date;

    @Column({ name: 'modified_date', type: 'timestamp' })
    modified_date: Date;

    @DeleteDateColumn({
        name: 'terminated_date',
        type: 'timestamp',
        nullable: true
    })
    terminated_date: Date;

    @OneToMany(() => Item, (item) => item.user)
    items: Item[];

    @OneToMany(() => Wish, (wish) => wish.item)
    wishes: Wish[];

    @OneToMany(() => Purchase, (purchase) => purchase.user)
    purchases: Purchase[];
}
