import {
    Column,
    Entity,
    Index,
    OneToMany,
    PrimaryGeneratedColumn,
  } from "typeorm";
  
  @Index("pk_user", ["idNews"], { unique: true })
  @Entity("user", { schema: "public" })
  export class News {
    @PrimaryGeneratedColumn({ type: "integer", name: "id_news" })
    idNews: number;
  
    @Column("character varying", { name: "title", length: 250 })
    title: string;
  
    @Column("character varying", { name: "description", length: 1000 })
    description: string;
  
    @Column("character varying", { name: "img_url", length: 250 })
    img_url: string;
  
    @Column("character varying", { name: "category", length: 50 })
    category: string;
  
    @Column("timestamp without time zone", { name: "Created" })
    Created: Date;

    @Column("timestamp without time zone", { name: "Updated" })
    Updated: Date;
  }