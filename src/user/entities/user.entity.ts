import { ApiProperty } from '@nestjs/swagger';
import { Profile } from 'src/profile/entites/profile.entity';
import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, OneToOne } from 'typeorm';


@Entity()
export class User {

  @ApiProperty({ description:"Id" })
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ApiProperty({ description: "Никнейм" })
  @Column() 
	username: string;

  @ApiProperty({ description: "Ключ" })
  @Column()
  auth_key: string;

  @ApiProperty({ description: "Пароль" })
  @Column()	
	password_hash: string;	

  @ApiProperty({ description: "Почта" })
  @Column()	
	email: string;

  @ApiProperty({ description: "Статус" })
  @Column()	
	status: number;	

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
	created_at: number;	

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
	updated_at: number;	

  @BeforeInsert()
  public beforeInsert() {
    const now = Math.round(new Date().getTime() / 1000);
    const key = generateRandomString(32);
    this.created_at = now;
    this.updated_at = now;
    this.auth_key = key;
  }

  @BeforeUpdate()
  public beforeUpdate() {
    const now = Math.round(new Date().getTime() / 1000);
    this.updated_at = now;
  }
    
  @ApiProperty({example: "", description:"Профиль"})
  @OneToOne(() => Profile, profile => profile.user)
  profile: Profile[];

}

function generateRandomString(length: number) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random()  *  charactersLength));
  }
  return result;
}


