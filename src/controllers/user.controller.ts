import { Controller  , Get, Post , Req } from "@nestjs/common";
import { AppService } from '../app.service';
import { Request } from "express"


@Controller()
export class User {
  constructor(private readonly appService: AppService) {}

  @Get('login')
  singIn(@Req() req: Request): string {
    return 'Sign in ';
  }

  @Post('register')
  signUp(): string { 
    return 'Sign in ';
  }
}

