import { Body, Controller, Delete, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { News } from 'src/model/News';
import { NewsService } from '../services/news.service';

@Controller('news')
export class NewsController {
    constructor(
        public newsService: NewsService
    ) {}
    @Get('all')
    async showAllNews() {
      const news =  await this.newsService.showAllNews();
      return {
        statusCode: HttpStatus.OK,
        message: 'News fetched successfully',
        news
      };
    }

    @Post('save')
    saveAlumno(@Body() news: News): Promise<News>{
        return this.newsService.saveNews(news);
    }
    
    @Get('find/:id')
    findOne(@Param('id') id: number): Promise<News>{
        return this.newsService.findOneNews(id);
    }

    @Delete(':id')
      async deleteNews(@Param('id') id: number) {
        await this.newsService.deleteNews(id);
        return {
          statusCode: HttpStatus.OK,
          message: 'News deleted successfully',
        };
      }
}
