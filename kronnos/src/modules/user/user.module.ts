import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';

@Module({
  //imports:[
    //MongooseModule.forFeature([{name: Persona.name, schema: PersonaSchema}])
  //],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
