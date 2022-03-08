import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from "typeorm";
import { User } from "./User";

  @Index("ixfk_suggestion_user", ["idUser"], {})
  @Index("pk_suggestion", ["idSuggestion"], { unique: true })
  @Entity("suggestion", { schema: "public" })

  export class Suggestion {
    @PrimaryGeneratedColumn({ type:"integer", name: "id_suggestion"})
    idSuggestion: number;

    @Column("integer", {name: "id_user"})
    idUser: number;

    @Column("character varying", { name: "name", length: 250 })
    name: string;

    @Column("character varying", { name: "platforms", length: 250 })
    platforms: string;

    @Column("character varying", { name: "img_url", length: 250 })
    imgUrl: string;

    @Column("character varying", { name: "categories", length: 250 })
    categories: string;
  
    @Column("timestamp without time zone", { name: "Created" })
    Created: Date;
  
    @Column("timestamp without time zone", { name: "Updated" })
    Updated: Date;

    @ManyToOne(() => User, (user) => user.suggestions)
    @JoinColumn([{ name: "id_user", referencedColumnName: "idUser" }])
    idUser2: User;


  }