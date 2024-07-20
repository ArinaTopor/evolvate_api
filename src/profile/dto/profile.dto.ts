export class CreateProfileDto {
    readonly user_id: number;
	readonly last_name: string;
	readonly first_name: string;
	readonly email: string;
	readonly phone: string;
	readonly division_id: any;
	readonly division: string;
	readonly position: string;
}