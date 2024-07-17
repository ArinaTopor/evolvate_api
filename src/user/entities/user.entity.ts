import { profile } from 'console';
import { AutoIncrement } from 'sequelize-typescript';
import { Profile } from 'src/profile/entites/profile.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';


@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column() 
	username: string;

  @Column()
  auth_key: string;

  @Column()	
	password_hash: string;	

  @Column()	
	email: string;

  @Column()	
	status: number;	

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
	created_at: Date;	

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
	updated_at: number;	
  
  @OneToMany(() => Profile, (Profile) => Profile.user_id)
  @JoinColumn()
  profile: Profile[];
}


