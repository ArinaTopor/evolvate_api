import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserDto } from "src/user/dto/create-user.dto";
import { AuthService } from "./auth.service";
import { CreateProfileDto } from "src/profile/dto/profile.dto";
import { CreateAuthDto } from "./dto/auth.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "src/user/entities/user.entity";

@ApiTags('Регистарция и авторизация')
@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    //Авторизация
    @ApiOperation({summary: 'Авторизация'})
    @ApiResponse({type: User})
    @Post('/login')
    login(@Body() dto: CreateUserDto) {
        return this.authService.login(dto)
    }

    @ApiOperation({summary: 'Регистрация'})
    //Регистрация
    @Post('/registration')
    registration(@Body() dto: CreateAuthDto) {
        return this.authService.registration(dto)
    }
}