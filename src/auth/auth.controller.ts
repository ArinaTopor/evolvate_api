import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserDto } from "src/user/dto/create-user.dto";
import { AuthService } from "./auth.service";
import { CreateProfileDto } from "src/profile/dto/profile.dto";
import { CreateAuthDto } from "./dto/auth.dto";

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    //Авторизация
    @Post('/login')
    login(@Body() dto: CreateUserDto) {
        return this.authService.login(dto)
    }

    //Регистрация
    @Post('/registration')
    registration(@Body() dto: CreateAuthDto) {
        return this.authService.registration(dto)
    }
}