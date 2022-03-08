import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Suggestion } from 'src/model/Suggestion';
import { User } from 'src/model/User';
import { SuggestionController } from './controllers/suggestion.controller';
import { SuggestionService } from './services/suggestion.service';

@Module({
  imports:[TypeOrmModule.forFeature([
    User,
    Suggestion
  ])],
  controllers: [SuggestionController],
  providers: [SuggestionService]
})
export class SuggestionModule {}
