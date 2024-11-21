import { Controller, Get, Post, Body, Param, Put, Delete,All, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}



  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log("in post")
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    console.log("in findall")
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    console.log("in findone",id)
    return this.usersService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    console.log("in update",id)
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    console.log("in delete",id)
    return this.usersService.remove(id);
  }
  @All('*')  
  handleUnknownRoute() {
    throw new NotFoundException('Route not found');
  }

}

