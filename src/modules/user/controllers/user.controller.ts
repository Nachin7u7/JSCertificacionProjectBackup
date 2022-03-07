import { Body, Controller, Delete, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { User } from 'src/model/User';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
    constructor(
        public userService: UserService
    ) {}
    @Get('all')
    async showAllUsers() {
      const users =  await this.userService.showAllUsers();
      return {
        statusCode: HttpStatus.OK,
        message: 'Users fetched successfully',
        users
      };
    }

    @Post('save')
    saveAlumno(@Body() user: User): Promise<User>{
        return this.userService.saveUser(user);
    }
    @Get('find/:id')
    findOne(@Param('id') id: number): Promise<User>{
        return this.userService.findOneUser(id);
    }

    @Delete(':id')
      async deleteUser(@Param('id') id: number) {
        await this.userService.deleteUser(id);
        return {
          statusCode: HttpStatus.OK,
          message: 'User deleted successfully',
        };
      }
}
