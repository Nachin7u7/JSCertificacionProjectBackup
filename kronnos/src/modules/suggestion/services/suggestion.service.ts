import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Suggestion } from 'src/model/Suggestion';
import { User } from 'src/model/User';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class SuggestionService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository:Repository<User>,

        @InjectRepository(Suggestion)
        private readonly suggestionRepository:Repository<Suggestion>
    ){}

    async saveSuggestion(suggestion: Suggestion){
        return await this.suggestionRepository.save(suggestion);
    }

    async showAllSuggestions(){
        return await this.suggestionRepository.find();
    }

    async findOneSuggestion(id:number):Promise<Suggestion>{
        return await this.suggestionRepository.findOne({});
    }

    async deleteSuggestion(id:number):Promise<DeleteResult>{
        return await this.suggestionRepository.delete({idSuggestion:id});
    }
    

}
