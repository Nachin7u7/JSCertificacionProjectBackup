import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from "typeorm";
import { User } from "./User";

    @Index("ixfk_comment_user", ["idUser"], {})
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

      
  }