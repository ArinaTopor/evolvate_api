import { Profile } from "src/profile/entites/profile.entity";

export class CreateUserDto {
    readonly username: string;
    readonly auth_key: string;
    readonly password_hash: string;	
    readonly email: string;
}
