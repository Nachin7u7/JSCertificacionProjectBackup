import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CommentService } from '../services/comment.service';
import { Comment } from '../../../model/Comment';
import { DeleteResult } from 'typeorm';

@Controller('comment')
export class CommentController {
    constructor(
        public commentService: CommentService
    ){}
    @Post ('save')
    saveComment(@Body() comment: Comment):Promise<Comment>{
        return this.commentService.saveComment(comment);
    }

    @Get('find')
    findComments():Promise<Comment[]>{
        return this.commentService.findComments();
    }

    @Get('find/:id')
    findOneComment(@Param('id') id:number):Promise<Comment>{
        return this.commentService.findOneComment(id);
    }
    @Delete('delete/:id')
    deleteComment(@Param('id') id:number):Promise<DeleteResult>{
        return this.commentService.deleteComment(id);
    }





}
