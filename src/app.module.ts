import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './controllers/user.controller';
import { AuthModule } from './auth/auth.module';



@Module({
  imports: [AuthModule , TypeOrmModule.forRoot({
    type : "mysql",
    username : "root",
    password : "password",
    host : "localhost",
    database : "nest",
    port : 3306,
    autoLoadEntities:true,
    synchronize:true
  })],
controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
