import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Hirer } from './Hirer/hirer.entity'
import { HirerModule } from './Hirer/hirer.module'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: () => ({
        type: 'postgres',
        host: '',
        port: 3306,
        username: '',
        password: '',
        database: '',
        entities: [Hirer],
      }),
    }),
    HirerModule,
  ],
})
export class AppModule {}
