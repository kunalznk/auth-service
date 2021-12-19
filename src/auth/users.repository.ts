import { EntityRepository, Repository } from "typeorm";
import { User } from './user.entity';
import { AuthCredentialDto } from './dto/auth.credential.dto';

@EntityRepository(User)
export class UserRepositroy extends Repository<User> {
    async createUser(authCredentailDto : AuthCredentialDto): Promise<void>{

        const {email , password} = authCredentailDto;
        
        const user =  this.create({email , password})
        await this.save(user);

    }
}