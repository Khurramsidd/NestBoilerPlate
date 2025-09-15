import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // <-- THIS LINE IS CRUCIAL
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], // optional, if used outside
})
export class UserModule {}
