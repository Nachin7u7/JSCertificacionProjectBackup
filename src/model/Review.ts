import {
    Column,
    Entity,
    Index,
    OneToMany,
    PrimaryGeneratedColumn,
  } from "typeorm";
  
  @Index("pk_review", ["idReview"], { unique: true })
  @Entity("review", { schema: "public" })
  export class Review {
    @PrimaryGeneratedColumn({ type: "integer", name: "id_review" })
    idReview: number;
  
    @Column("character varying", { name: "name", length: 250 })
    name: string;
  
    @Column("character varying", { name: "content", length: 250 })
    content: string;

    @Column("character varying", { name: "account", length: 250 }) //<- need?
    account: string;
  
  }