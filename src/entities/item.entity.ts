import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn
} from 'typeorm';
import { User } from './user.entity';
import { Category } from './category.entity';
import { Purchase } from './purchase.entity';
import { Wish } from './wish.entity';

@Entity({ name: 'item', database: process.env.DB_NAME })
export class Item {
    @PrimaryGeneratedColumn({ name: 'id' })
    id: number;

    @ManyToOne(() => User, (user) => user.items, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn({ name: 'user_id', referencedColumnName: 'pk' })
    user: User;
    @Column({ name: 'user_id', type: 'int' })
    userId: number;

    @ManyToOne(() => Category, (category) => category.items, {
        onUpdate: 'SET NULL',
        onDelete: 'SET NULL'
    })
    @JoinColumn({ name: 'category_id', referencedColumnName: 'id' })
    category: Category;
    @Column({ name: 'category_id', type: 'int', nullable: true })
    categoryId: number;

    @Column({ name: 'title', type: 'varchar', length: 20 })
    title: string;

    @Column({ name: 'description', type: 'varchar', length: 500 })
    description: string;

    @Column({ name: 'views', type: 'int', default: 0 })
    views: number;

    @Column({ name: 'status', type: 'tinyint', default: 0 })
    status: number;

    @Column({ name: 'created_date', type: 'timestamp' })
    created_date: Date;

    @Column({ name: 'modified_date', type: 'timestamp', nullable: true })
    modified_date: Date;

    @OneToMany(() => Wish, (wish) => wish.item)
    wishes: Wish[];

    @OneToMany(() => Purchase, (purchase) => purchase.item)
    purchases: Purchase[];
}
