import { LargeNumberLike } from "crypto";
import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TaskAuthor {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    task_id: number;

    @Column()
    user_id: number;

    @Column()
    task_user_id: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
	created_at: number;	

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
        updated_at: number;	

    @BeforeInsert()
    public beforeInsert() {
        const now = Math.round(new Date().getTime() / 1000);
        this.created_at = now;
        this.updated_at = now;
    }

    @BeforeUpdate()
    public beforeUpdate() {
        const now = Math.round(new Date().getTime() / 1000);
        this.updated_at = now;
    }
}