import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateHirerDto, UpdateHirerDto } from './hirer.dto'
import { Hirer } from './hirer.entity'

@Injectable()
export class HirerService {
  constructor(
    @InjectRepository(Hirer) private hirerRepository: Repository<Hirer>,
  ) {}

  async get(id: number): Promise<Hirer> {
    return await this.hirerRepository.findOne({ where: { id } })
  }

  async listAll(): Promise<Hirer[]> {
    return await this.hirerRepository.find()
  }

  async create(createHirerDto: CreateHirerDto): Promise<Hirer> {
    return await this.hirerRepository.save(createHirerDto)
  }

  async update(updateHirerDto: UpdateHirerDto) {
    return await this.hirerRepository.update(
      { id: updateHirerDto.id },
      updateHirerDto,
    )
  }

  async delete(id: number) {
    return await this.hirerRepository.delete(id)
  }
}
