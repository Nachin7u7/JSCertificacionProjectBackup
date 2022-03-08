import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from 'src/model/Review';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class ReviewService {
    
    constructor(
        @InjectRepository(Review)
        private readonly reviewRespository: Repository<Review>
    ) {}

    async showAllReviews() {
        return await this.reviewRespository.find();
    }
    
    async findOneReview(id: number): Promise<Review> {
        return await this.reviewRespository.findOne({});
    }
    async saveReview(review: Review): Promise<Review> {
        return await this.reviewRespository.save(review);
    }

    // TODO delete??
    async deleteReview(id: number):Promise<DeleteResult>{
        return await this.reviewRespository.delete({idReview: id}); 
    }

}
