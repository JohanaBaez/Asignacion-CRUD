import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ComputerService } from './computer.service';
import { CreateComputerDto } from './dto/computer.dto';

@Controller('computer')
export class ComputerController {
  constructor(private readonly computerServiceRepo: ComputerService) {}

  //Metodo para crear un producto
  @Post()
  create(@Body() computerDto: CreateComputerDto) {
    return this.computerServiceRepo.create(computerDto);
  }

  //Metodo para mostrar todos los productos
  @Get()
  findAll() {
    return this.computerServiceRepo.findAll();
  }

  //Metodo para mostrar un producto especifico
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.computerServiceRepo.findOne(id);
  }

  //Eliminar un producto especifico
  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.computerServiceRepo.remove(id);
  }

  //Crear método patch, para actualizar
  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateComputerDto: CreateComputerDto,
  ){
    return this.computerServiceRepo.update(id, updateComputerDto);
  }
}
