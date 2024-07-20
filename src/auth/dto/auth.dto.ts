export class CreateAuthDto {
    readonly username: string;
    readonly password_hash: string;
    readonly last_name: string; 
    readonly first_name: string;
    readonly middle_name: string;
    readonly email: string; 
    readonly phone: string;
    readonly division_id: number;
    readonly division: string;
    readonly position: string;
}