import { ApiProperty } from "@nestjs/swagger";
import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TaskAuthor {
    @ApiProperty({ description:"Id" })
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ApiProperty({ description: "Id задания" })
    @Column()
    task_id: number;

    @ApiProperty({ description: "Id пользователя" })
    @Column()
    user_id: number;

    @ApiProperty({ description: "Id задания пользователя"})
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