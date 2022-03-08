import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
  } from "typeorm";
import { User } from "./User";
import { Comment } from "./Comment";

  
  @Index("ixfk_review_user", ["idUser"], {})
  @Index("pk_review", ["idReview"], { unique: true })
  @Entity("review", { schema: "public" })
  export class Review {
    @PrimaryGeneratedColumn({ type: "integer", name: "id_review" })
    idReview: number;
  
    @Column("integer", {name: "id_user"})
    idUser: number;

    @Column("character varying", { name: "name", length: 250 })
    name: string;
  
    @Column("character varying", { name: "content", length: 250 })
    content: string;

    @Column("character varying", { name: "account", length: 250 }) //<- need?
    account: string;

    @ManyToOne(() => User, (user) => user.reviews)
    @JoinColumn([{ name: "id_user", referencedColumnName: "idUser" }])
    idUser2: User;

    @OneToMany(
      () => Comment,
      (comment) => comment.idReview2
    )
    comments: Comment[];
  
  }