import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = []; 

  create(createUserDto: CreateUserDto) {
    const newUser = { id: Date.now(), ...createUserDto }; 
    this.users.push(newUser);
    return newUser;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    
    const one=this.users.find(user => user.id == id)
    console.log("inservice_findone",id,one)

    return one;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    console.log("inservice_update_1",id)
    const userIndex = this.users.findIndex(user => user.id == id);
    if (userIndex !== -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...updateUserDto };
      console.log("inservice_update_2",id,this.users[userIndex])
      return this.users[userIndex];

    }
    return null;
  }

  remove(id: number) {
    console.log("inservice_remove_1",id)
    const userIndex = this.users.findIndex(user => user.id == id);
    console.log("userindex",userIndex)
    if (userIndex !== -1) {
      const removedUser = this.users.splice(userIndex, 1);
      return removedUser[0];
      
    }
    return null;
  }
}

