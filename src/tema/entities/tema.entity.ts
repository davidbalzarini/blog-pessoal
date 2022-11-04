import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Postagem } from "src/postagem/entities/postagem.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_temas"})
export class Tema {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 255, nullable:false})
    descricao: string 

    @ApiProperty()
    @OneToMany(() => Postagem, (Postagem) => Postagem.id)
    postagem: Postagem[]
}