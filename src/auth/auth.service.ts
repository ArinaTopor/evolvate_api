import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { CreateUserDto } from "src/user/dto/create-user.dto";
import { UserService } from "src/user/user.service";
import * as bcrypt from 'bcryptjs'
import { User } from "src/user/entities/user.entity";
import { ProfileService } from "src/profile/profile.service";
import { Profile } from "src/profile/entites/profile.entity";
@Injectable()
export class AuthService {
    constructor( private readonly userService: UserService,
        private jwtService: JwtService, private readonly profileService: ProfileService) {}

    async login( dto: CreateUserDto) {
        const user = await this.validateUser(dto)
        return this.generateUserToken(user)
    }


    private async generateUserToken(user: User) {
        const payload = {email: user.email, id: user.id, profile: user.profile }
        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async generateProfileToken(profile: Profile) {
        const payload = {last_name: profile.last_name, first_name: profile.first_name,
            middle_name: profile.middle_name, phone: profile.phone, 
            division: profile.division, position: profile.position }
        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async validateUser(dto: CreateUserDto){
        const user =  await this.userService.getUserByEmail(dto.email)
        const passwordEquals = await bcrypt.compare(dto.password_hash, user.password_hash);
        if(user && passwordEquals){
            return user;
        }
        throw new UnauthorizedException({message: 'Некорректный email или пароль'})
    }


    async registration(registerDto: any): Promise<any> {
        const { username, password_hash, last_name, first_name, middle_name, email, phone, division_id, division, position } = registerDto
        
        const candidate = await this.userService.getUserByEmail(email);
        if (candidate) {
            throw new HttpException('Существующий емайл', HttpStatus.BAD_REQUEST);
        }

        // Создание пользователя
        const user = new User();
        user.username = username;
        user.password_hash = await bcrypt.hash(password_hash, 5);
        user.email = email;
    
        // Сохранение пользователя в базе данных
        const savedUser = await this.userService.createUser(user);
    
        // Создание профиля
        const profile = new Profile();
        profile.user_id = user.id;
        profile.last_name = last_name;
        profile.first_name = first_name;
        profile.middle_name = middle_name;
        profile.email = email;
        profile.phone = phone;
        profile.division_id = division_id;
        profile.division = division;
        profile.position = position;

        profile.user = savedUser;
    
        // Сохранение профиля в базе данных
        const savedProfile = await this.profileService.createProfile(profile);
    
        return this.generateUserToken(savedUser), this.generateProfileToken(savedProfile);
      }

}