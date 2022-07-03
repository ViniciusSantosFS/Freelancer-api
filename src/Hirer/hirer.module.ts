import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { HirerController } from './hirer.controller'
import { Hirer } from './hirer.entity'
import { HirerService } from './hirer.service'

@Module({
  imports: [TypeOrmModule.forFeature([Hirer])],
  controllers: [HirerController],
  providers: [HirerService],
})
export class HirerModule {}
