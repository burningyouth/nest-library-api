import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { JoiValidationPipe } from 'src/modules/validation/pipes/validation.pipe';
import { AuthService } from './auth.service';
import { LoginDto, RegistrationDto } from './interfaces/auth';
import { loginSchema, registerSchema } from './schemas/auth.schemas';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @UsePipes(new JoiValidationPipe(loginSchema))
  @Post('signin')
  login(@Body() loginDto: LoginDto) {
    return this.service.signIn(loginDto.email, loginDto.password);
  }

  @UsePipes(new JoiValidationPipe(registerSchema))
  @Post('signup')
  registration(@Body() registrationDto: RegistrationDto) {
    return this.service.register(registrationDto);
  }
}
