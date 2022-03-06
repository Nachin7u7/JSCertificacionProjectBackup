import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { ReviewModule } from './modules/review/review.module';

@Module({
  imports: [
      TypeOrmModule.forRoot({
        name: 'default',
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'root',
        database: 'kronnosDB',
        schema:'public',
        synchronize: true,
        entities:[__dirname + '/model/**/*{.ts,.js}'],
        autoLoadEntities: true,
      }),
    UserModule,
    ReviewModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
