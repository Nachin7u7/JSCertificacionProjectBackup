import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { News } from 'src/model/News';
import { DeleteResult, Repository } from 'typeorm'

@Injectable()
export class NewsService {
    constructor(
        @InjectRepository(News)
        private readonly newsRespository: Repository<News>
    ) {}

    async showAllNews() {
        return await this.newsRespository.find();
      }
    async saveNews(news: News): Promise<News>{
        return await this.newsRespository.save(news); 
    }
    async findOneNews(id: number): Promise<News>{
        return await this.newsRespository.findOne({}); 
    }

    async deleteNews(id: number):Promise<DeleteResult>{
        return await this.newsRespository.delete({idNews: id}); //delete from alumno where idAlumno = id
    }

}
