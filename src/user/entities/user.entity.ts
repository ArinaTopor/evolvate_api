
import { ApiProperty } from '@nestjs/swagger';
import { Profile } from 'src/profile/entites/profile.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, OneToMany, JoinTable, BeforeInsert, BeforeUpdate } from 'typeorm';


@Entity()
export class User {

  @ApiProperty({example: "", description:"Id"})
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ApiProperty({example: "", description:"Никнейм"})
  @Column() 
	username: string;

  @ApiProperty({example: "", description:"Ключ"})
  @Column()
  auth_key: string; //32

  @ApiProperty({example: "", description:"Пароль"})
  @Column()	
	password_hash: string;	

  @ApiProperty({example: "", description:"Почта"})
  @Column()	
	email: string;

  @ApiProperty({example: "", description:"Статус"})
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


