import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from "typeorm";
import { News } from "./News";
import { Review } from "./Review";
import { User } from "./User";

    @Index("ixfk_comment_user", ["idUser"], {})
    @Index("ixfk_comment_review", ["idReview"], {})
    @Index("ixfk_comment_news", ["idNews"], {})
  @Index("pk_comment",["idComment"],{unique:true})
  @Entity("comment",{schema:"public"})
  export class Comment{
      @PrimaryGeneratedColumn({ type: "integer", name: "id_comment"})
      idComment: number;

      @Column("integer",{name:"id_user"})
      idUser: number;

      @Column("integer",{name:"id_review"})
      idReview: number;

      @Column("integer",{name:"id_news"})
      idNews: number;

      @Column("character varying", { name: "content", length: 500 })
      content: string;

      @Column("integer", { name: "likes"})
      likes: number;

    @ManyToOne(() => User, (user) => user.comments)
    @JoinColumn([{ name: "id_user", referencedColumnName: "idUser" }])
    idUser2: User;

    @ManyToOne(() => News, (news) => news.comments)
    @JoinColumn([{ name: "id_news", referencedColumnName: "idNews" }])
    idNews2: News;

    @ManyToOne(() => Review, (review) => review.comments)
    @JoinColumn([{ name: "id_review", referencedColumnName: "idReview" }])
    idReview2: Review;
      
  }