import { ApiProperty } from '@nestjs/swagger';
import { Profile } from 'src/profile/entites/profile.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, OneToMany, JoinTable, BeforeInsert, BeforeUpdate } from 'typeorm';
import { User } from './user.entity';


@Entity()
export class UserToken {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    user_id: number;

    @Column()
    token: string;

    @Column()
    ip: string;

    @Column()
    user_agent: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
	created_at: number;	

    @BeforeInsert()
    public beforeInsert() {
        const now = Math.round(new Date().getTime() / 1000);
        this.created_at = now;
    }
}