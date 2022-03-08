import {
    Column,
    Entity,
    Index,
    PrimaryGeneratedColumn,
  } from "typeorm";

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

      
  }