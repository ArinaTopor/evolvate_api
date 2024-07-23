import { Body, Controller, Headers, Ip, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateLoginDto } from "./dto/login.dto";
import { CreateRegistrationDto } from "./dto/registration.dto";

@ApiTags('Регистарция и авторизация')
@Controller('auth')
export class AuthController { 
    constructor(private readonly authService: AuthService) {}

    @ApiOperation({summary: 'Авторизация'})
    @Post('/login')
    login(@Body() dto: CreateLoginDto) {
        return this.authService.login(dto)
    }

    @ApiOperation({summary: 'Регистрация'})
    @Post('/registration')
    registration(@Body() dto: CreateRegistrationDto, @Ip() ip: string, @Headers('user-agent') userAgent: string) {
        return this.authService.registration({... dto, ip: ip, user_agent: userAgent})
    }

    @ApiOperation({summary: 'Обновление токена'})
    @Post('/refreshToken')
    refreshAccessToken(@Body() refreshToken: string) {
        return this.authService.refreshAccessToken(refreshToken)
    }   
}