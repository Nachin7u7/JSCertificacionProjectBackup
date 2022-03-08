import { Body, Controller, Delete, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { Suggestion } from 'src/model/Suggestion';
import { SuggestionService } from '../services/suggestion.service';

@Controller('suggestion')
export class SuggestionController {
    constructor(
        public suggestionService:SuggestionService
    ){}

    @Post('save')
    saveSuggestion(@Body() suggestion: Suggestion):any{
        return this.suggestionService.saveSuggestion(suggestion);
    }

    @Get('all')
    async showAllSuggestions() {
      const suggestions =  await this.suggestionService.showAllSuggestions();
      return {
        statusCode: HttpStatus.OK,
        message: 'Suggestions fetched successfully',
        suggestions
      };
    }

    @Get('find/:id')
    findOne(@Param('id') id: number): Promise<Suggestion>{
        return this.suggestionService.findOneSuggestion(id);
    }

    @Delete('delete/:id')
    async deleteSuggestion(@Param('id') id:number){
        await this.suggestionService.deleteSuggestion(id);
        return{
            statusCode: HttpStatus.OK,
            message:'Suggestion deleted successfully'
        }
    }
}
