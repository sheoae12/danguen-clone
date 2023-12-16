import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn
} from 'typeorm';
import { Item } from './item.entity';
import { User } from './user.entity';

@Entity({ name: 'purchase', database: process.env.DB_NAME })
export class Purchase {
    @PrimaryGeneratedColumn({ name: 'id' })
    id: number;

    @ManyToOne(() => User, (user) => user.purchases, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn({ name: 'buyer_id', referencedColumnName: 'pk' })
    user: User;
    @Column({ name: 'buyer_id', type: 'int' })
    userId: number;

    @ManyToOne(() => Item, (item) => item.purchases, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn({ name: 'item_id', referencedColumnName: 'id' })
    item: Item;
    @Column({ name: 'item_id', type: 'int' })
    itemId: number;

    @Column({ name: 'purchased_date', type: 'timestamp' })
    purchasedDate: Date;
}
