import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/model/User';
import { DeleteResult, Repository } from 'typeorm';


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRespository: Repository<User>
    ) {}

    async showAllUsers() {
        return await this.userRespository.find();
      }
    async saveUser(user: User): Promise<User>{ //insert - update
        return await this.userRespository.save(user); //insert
    }
    async findOneUser(id: number): Promise<User>{
        return await this.userRespository.findOne({}); //select * from alumno where idAlumno = id limit 1 => []
        //return this.alumnoRepository.findOne({idAlumno: id}); //select * from alumno where idAlumno = id limit 1 =>Obj
    }

    async deleteUser(id: number):Promise<DeleteResult>{
        return await this.userRespository.delete({idUser: id}); //delete from alumno where idAlumno = id
    }

}
