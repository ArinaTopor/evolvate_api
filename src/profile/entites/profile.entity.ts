import { ForeignKey } from 'sequelize-typescript';
import { User } from 'src/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, ManyToOne } from 'typeorm';


@Entity()
export class Profile {

    @PrimaryGeneratedColumn()
	id: number; 

    @Column()	
    "user_id": number; 

    @Column()	
	role: number; 
    
    @Column()	
	last_name: string;
    
    @Column()	
	first_name: string;

    @Column()	
	email: string;

    @Column()	
	phone: string;

    @Column()	
	division_id: number;

    @Column()	
	division: string;

    @Column()	
	position: string;

    @Column()	
	coins_count: number;

    @Column()	
	tasks_count: number;

    @Column()	
	gifts_count: number;

    @Column()	
	transfers_count: number;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
	created_at	

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
	updated_at	

    @Column()	
	full_name: string;	

    @ManyToOne(() => User, User => User.id)
    user: User;
}