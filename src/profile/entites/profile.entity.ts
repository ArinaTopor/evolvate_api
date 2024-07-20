import { User } from 'src/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, BeforeInsert, BeforeUpdate } from 'typeorm';


@Entity()
export class Profile {

    @PrimaryGeneratedColumn('increment')
	id: number; 

    @Column()	
	user_id: number; 
    
    @Column()	
	last_name: string;
    
    @Column()	
	first_name: string;

    @Column()
    middle_name: string;

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

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
	created_at: number;	

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
	updated_at: number;	

    @Column()	
	full_name: string;	

    @BeforeInsert()
    public beforeInsert() {
        const now = Math.round(new Date().getTime() / 1000);
        const name = generateFullName(this.last_name, this.first_name, this.middle_name)
        this.created_at = now;
        this.updated_at = now;
        this.full_name = name;
    }

    @BeforeUpdate()
    public beforeUpdate() {
        const now = Math.round(new Date().getTime() / 1000);
        this.updated_at = now;
    }

    @OneToOne(() => User, user => user.profile)
    @JoinColumn(([
        { name: "user_id" }
    ]))
    user: User;
}

function generateFullName(str1: string, str2: string, str3: string) {
    return str1 + " " + str2 + " " + str3;
}