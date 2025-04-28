import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
// import { JwtService } from '@nestjs/jwt';
import { User, UserDocument } from 'src/auth/schemas/user.schema/user.schema';
import { SignupDto } from './dto/signup.dto/signup.dto';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async signup(signupDto: SignupDto) {
    const { email, password } = signupDto;

    const existingUser = await this.userModel.findOne({ email });
    if (existingUser) {
      throw new BadRequestException('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new this.userModel({ email, password: hashedPassword });
    await user.save();

    return { message: 'User registered successfully' };
  }
}
