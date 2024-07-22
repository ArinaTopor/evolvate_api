import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, BeforeInsert, BeforeUpdate } from 'typeorm';


@Entity()
export class Profile {

    @ApiProperty({example: "", description:"Id"})
    @PrimaryGeneratedColumn('increment')
	id: number; 

    @ApiProperty({example: "", description:"Id профиля"})
    @Column()	
	user_id: number; 

    @ApiProperty({example: "", description:"Фамилия"})
    @Column()	
	last_name: string;
    
    @ApiProperty({example: "", description:"Имя"})
    @Column()	
	first_name: string;

    @ApiProperty({example: "", description:"Отчество"})
    @Column()
    middle_name: string;

    @ApiProperty({example: "", description:"Почта"})
    @Column()	
	email: string;

    @ApiProperty({example: "", description:"Телефон"})
    @Column()	
	phone: string;

    @ApiProperty({example: "", description:"Id подразделения"})
    @Column()	
	division_id: number;

    @ApiProperty({example: "", description:"Название подразделения"})
    @Column()	
	division: string;

    @ApiProperty({example: "", description:"Должность"})
    @Column()	
	position: string;

    @ApiProperty({example: "", description:"Количество монет"})
    @Column()
    coins_count: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
	created_at: number;	

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
	updated_at: number;	

    @ApiProperty({example: "", description:"ФИО"})
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