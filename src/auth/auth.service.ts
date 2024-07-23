import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { CreateUserDto } from "src/user/dto/create-user.dto";
import { UserService } from "src/user/user.service";
import * as bcrypt from 'bcryptjs'
import { User } from "src/user/entities/user.entity";
import { ProfileService } from "src/profile/profile.service";
import { Profile } from "src/profile/entites/profile.entity";
import { UserToken } from "src/user/entities/user-token.entity";
import { CreateLoginDto } from "./dto/login.dto";
@Injectable()
export class AuthService {
    constructor( private readonly userService: UserService,
        private jwtService: JwtService, private readonly profileService: ProfileService, ) {}

    async login( dto: CreateLoginDto ) {
        const user = await this.validateUser(dto)
        const token = await this.userService.getTokenById(user.id);
        const accessToken = (await this.refreshAccessToken(token)).toString();
        const profile = this.profileService.getProfileById(user.id)
        return { accessToken: accessToken, refreshToken: token, 
            username: user.username, email: user.email, 
            last_name: (await profile).last_name, first_name: (await profile).first_name, 
            phone: (await profile).phone, coins_count: (await profile).coins_count };
    }

    private async validateUser(dto: CreateLoginDto){
        const user =  await this.userService.getUserByEmail(dto.email)
        const passwordEquals = await bcrypt.compare(dto.password, user.password_hash);
        if(user && passwordEquals){
            return user;
        }
        throw new UnauthorizedException({message: 'Некорректный email или пароль'})
    }

    private async validateRefreshToken(refreshToken: string) {
        const userToken = await this.userService.getUserByToken( refreshToken );
        if (!userToken) {
            throw new UnauthorizedException('Invalid refresh token');
        }
        return this.userService.getUserById(userToken.user_id);
    }

    async refreshAccessToken(refreshToken: string) {
        const user = await this.validateRefreshToken(refreshToken);
        return this.jwtService.sign({ email: user.email, id: user.id }, { expiresIn: '1d' });
    }

    async registration(registerDto: any): Promise<any> {
        const { username, password, last_name, first_name, middle_name, email, phone, division_id, division, position, ip, user_agent } = registerDto
        
        const candidate = await this.userService.getUserByEmail(email);
        if (candidate) {
            throw new HttpException('Существующий емайл', HttpStatus.BAD_REQUEST);
        }

        const user = new User();
        user.username = username;
        user.password_hash = await bcrypt.hash(password, 5);
        user.email = email;
        const savedUser = await this.userService.createUser(user);
    
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
        await this.profileService.createProfile(profile);

        const refreshToken = this.jwtService.sign({email: user.email, id: user.id });   
        const userToken = new UserToken();
        userToken.user_id = savedUser.id;
        userToken.token = refreshToken;
        userToken.ip = ip;
        userToken.user_agent = user_agent;
        await this.userService.createUserToken(userToken);
    }
}