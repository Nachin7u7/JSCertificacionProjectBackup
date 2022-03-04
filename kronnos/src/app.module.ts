import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonaModule } from './modules/persona/persona.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [PersonaModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
