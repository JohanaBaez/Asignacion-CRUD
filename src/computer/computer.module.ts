import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Computer } from './entities/computer.entity';
import { ComputerController } from './computer.controller';
import { ComputerService } from './computer.service';

@Module({
  imports: [TypeOrmModule.forFeature([Computer])],
  controllers: [ComputerController],
  providers: [ComputerService],
})
export class ComputerModule {}
