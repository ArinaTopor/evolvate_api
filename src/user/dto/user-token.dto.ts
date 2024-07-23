export class CreateUserTokenDto {
    readonly user_id: number;
    readonly token: string;
    readonly ip: string;
    readonly user_agent: string;

}