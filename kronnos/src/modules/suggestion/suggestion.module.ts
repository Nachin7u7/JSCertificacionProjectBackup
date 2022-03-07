import { Module } from '@nestjs/common';
import { SuggestionController } from './controllers/suggestion.controller';
import { SuggestionService } from './services/suggestion.service';

@Module({
  controllers: [SuggestionController],
  providers: [SuggestionService]
})
export class SuggestionModule {}
