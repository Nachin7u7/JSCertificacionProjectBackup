import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../model/User';
import { Comment } from '../../model/Comment';
import { CommentController } from './controllers/comment.controller';
import { CommentService } from './services/comment.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Comment,
      User
    ])
  ],
  controllers: [CommentController],
  providers: [CommentService]
})
export class CommentModule {}
