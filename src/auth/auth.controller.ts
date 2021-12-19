import { Body, Controller } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { AuthCredentialDto } from './dto/auth.credential.dto';
import { AuthService } from './auth.service';
import { Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {

    constructor(private authService : AuthService) {

    }
    @Post('/login')
    signUp(@Body() authCredentialDto:AuthCredentialDto):Promise<void> {
        return this.authService.signUp(authCredentialDto)
    }

    @Get('login')
    login(){
       return 'loggedIn'
    }
    
}
