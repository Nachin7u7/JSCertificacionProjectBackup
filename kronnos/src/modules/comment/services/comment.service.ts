import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from '../../../model/Comment';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class CommentService {
    constructor(
        @InjectRepository(Comment)
        private readonly commentRepository: Repository<Comment>,
    ){}
      saveComment(comment: Comment):Promise<Comment> {
        return   this.commentRepository.save(comment);
     }

     findComments(): Promise<Comment[]> {
         return this.commentRepository.find();
     }

     findOneComment(id:number): Promise<Comment> {
         return this.commentRepository.findOne({idComment:id});
     }

     deleteComment(id:number): Promise<DeleteResult> {
         return this.commentRepository.delete({idComment:id});
     }

     



    
}
