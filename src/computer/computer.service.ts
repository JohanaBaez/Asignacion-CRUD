import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Computer } from './entities/computer.entity';
import { CreateComputerDto } from './dto/computer.dto';

@Injectable()
export class ComputerService {
  constructor(
    @InjectRepository(Computer)
    private readonly computerRepository: Repository<Computer>,
  ) {}

  //Metodo para crear un producto
  async create(computerDto: CreateComputerDto) {
    const computer = this.computerRepository.create(computerDto);
    await this.computerRepository.save(computer);

    return computer;
  }

  //Metodo para visualizar todos los productos
  findAll() {
    return this.computerRepository.find();
  }

  //Metodo para visualizar un producto especifico
  findOne(id: string) {
    return this.computerRepository.findOneBy({ id });
  }

  //Remover un producto especifico
  async remove(id: string) {
    const computer = await this.findOne(id);
    await this.computerRepository.remove(computer);
    return 'computadora eliminada satisfactoriamente';
  }

  //Actualizar un producto especifico
  async update(id: string, cambios: CreateComputerDto) {
    const findComputer = await this.findOne(id);
    const updatedComoputer = await this.computerRepository.merge(
      findComputer,
      cambios,
    );

    return this.computerRepository.save(updatedComoputer);
  }
}
