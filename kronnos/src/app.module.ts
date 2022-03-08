import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { NewsModule } from './modules/news/news.module';
import { SuggestionModule } from './modules/suggestion/suggestion.module';
import { CommentModule } from './modules/comment/comment.module';

@Module({
  imports: [
      TypeOrmModule.forRoot({
        name: 'default',
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'root123',
        database: 'kronnosDB',
        schema:'public',
        synchronize: true,
        entities:[__dirname + '/model/**/*{.ts,.js}'],
        autoLoadEntities: true,
      }),
    UserModule,
    CommentModule,
    SuggestionModule,
    NewsModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
