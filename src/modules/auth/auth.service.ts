import {
  BadRequestException,
  Injectable,
  UnauthorizedException
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { RegistrationDto } from './interfaces/auth';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(email: string, pass: string) {
    const user = await this.usersService.findByEmail(email);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { id: user._id, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload, {
        secret: process.env.JWT_SECRET
      })
    };
  }

  async register(userDto: RegistrationDto) {
    const user = await this.usersService.findByEmail(userDto.email);
    if (user) {
      throw new BadRequestException('Email exists!');
    }
    return this.usersService.create(userDto);
  }

  async validateUser(id: Id) {
    const user = await this.usersService.findById(id);
    if (user) {
      return user;
    }
    return null;
  }
}
