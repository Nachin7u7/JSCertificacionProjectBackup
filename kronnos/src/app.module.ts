import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { NewsModule } from './modules/news/news.module';
import { SuggestionModule } from './modules/suggestion/suggestion.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'postgres',
      host: 'localhost',//'localhost',
      port: 5432,
      username: 'postgres',
      password: '11037',
      database: 'login',
      schema: 'public',
      synchronize: true,
      entities: [__dirname + '/model/**/*{.ts,.js}'],
      autoLoadEntities: true,
    }),
    UserModule,
    NewsModule,SuggestionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
