import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from "typeorm";
import { User } from "./User";
  
  @Index("ixfk_news_user", ["idUser"], {})
  @Index("pk_news", ["idNews"], { unique: true })
  @Entity("news", { schema: "public" })
  export class News {
    @PrimaryGeneratedColumn({ type: "integer", name: "id_news" })
    idNews: number;
  
    @Column({ type: "integer", name: "id_user" })
    idUser: number;

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
    
    @ManyToOne(() => User, (user) => user.noticias)
    @JoinColumn([{ name: "id_user", referencedColumnName: "idUser" }])
    idUser2: User;
  }