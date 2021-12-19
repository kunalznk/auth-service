import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepositroy } from './users.repository';
import { AuthCredentialDto } from './dto/auth.credential.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepositroy)
        private userRepositroy : UserRepositroy
    ){ }

    async signUp(authCredentailDto: AuthCredentialDto): Promise<void> {
        return this.userRepositroy.createUser(authCredentailDto);
    } 
}
