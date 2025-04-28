import { Controller, Post, Body } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto/signup.dto';
import { AuthService } from './auth.service';
import { loginDto } from './dto/login.dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body() signupDto: SignupDto) {
    return this.authService.signup(signupDto);
  }

  @Post('login')
  login(@Body() loginDto: loginDto) {
    return this.authService.login(loginDto);
  }
}
