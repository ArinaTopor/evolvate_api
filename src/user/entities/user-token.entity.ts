import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert} from 'typeorm';


@Entity()
export class UserToken {
    @ApiProperty({ description: "Id" })
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ApiProperty({ description: "Id пользователя" })
    @Column()
    user_id: number;

    @ApiProperty({ description: "Refresh Token" })
    @Column()
    token: string;

    @ApiProperty({ description: "Ip" })
    @Column()
    ip: string;

    @ApiProperty({ description: "Идентификационная строка клиентского приложения" })
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