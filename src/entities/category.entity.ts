import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Item } from './item.entity';

@Entity({ name: 'category', database: process.env.DB_NAME })
export class Category {
    @PrimaryGeneratedColumn({ name: 'id' })
    id: number;

    @Column({ name: 'name', type: 'varchar', length: 10 })
    name: string;

    @OneToMany(() => Item, (item) => item.category)
    items: Item[];
}
