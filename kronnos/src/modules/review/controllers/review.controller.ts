import { Body, Controller, Delete, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { Review } from 'src/model/Review';
import { ReviewService } from '../services/review.service';

@Controller('review')
export class ReviewController {
    constructor(public reviewService: ReviewService){}
    @Get('all')
    async showAllReviews(){
        const review =  await this.reviewService.showAllReviews();
        return {
          statusCode: HttpStatus.OK,
          review
        };
    }

    @Post('save')
    saveReview(@Body() review: Review): Promise<Review>{
        return this.reviewService.saveReview(review);
    }
    @Get('find/:id')
    findOne(@Param('id') id: number): Promise<Review>{
        return this.reviewService.findOneReview(id);
    }
    //TODO delete review?

    @Delete(':id')
      async deleteReview(@Param('id') id: number) {
        await this.reviewService.deleteReview(id);
        return {
          statusCode: HttpStatus.OK,
          message: 'Review deleted successfully',
        };
    }

}
