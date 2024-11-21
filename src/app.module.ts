import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule], // Import the UsersModule here
})
export class AppModule {}
