import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
<<<<<<< HEAD
import { ReviewModule } from './modules/review/review.module';
=======
import { NewsModule } from './modules/news/news.module';
import { SuggestionModule } from './modules/suggestion/suggestion.module';
import { CommentModule } from './modules/comment/comment.module';
>>>>>>> 375645341c57b957739ca58631d9de33dec2c5fa

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
<<<<<<< HEAD
    ReviewModule],
=======
    CommentModule,
    SuggestionModule,
    NewsModule],

>>>>>>> 375645341c57b957739ca58631d9de33dec2c5fa
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
