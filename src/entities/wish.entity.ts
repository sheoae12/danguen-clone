import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn
} from 'typeorm';
import { Item } from './item.entity';
import { User } from './user.entity';

@Entity({ name: 'wish', database: process.env.DB_NAME })
export class Wish {
    @PrimaryGeneratedColumn({ name: 'id' })
    id: number;

    @ManyToOne(() => User, (user) => user.wishes, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn({ name: 'user_id', referencedColumnName: 'pk' })
    user: User;
    @Column({ name: 'user_id', type: 'int' })
    userId: number;

    @ManyToOne(() => Item, (item) => item.wishes, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn({ name: 'item_id', referencedColumnName: 'id' })
    item: Item;
    @Column({ name: 'item_id', type: 'int' })
    itemId: number;

    @Column({ name: 'created_date', type: 'timestamp' })
    createdDate: Date;
}
