import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // change if needed
      port: 5432,
      username: 'admin', // your DB username
      password: 'secret', // your DB password
      database: 'mydb', // your DB name
      autoLoadEntities: true,
      synchronize: true, // auto create schema in dev (turn off in prod!)
    }),
    UserModule,
  ],
})
export class AppModule {}
