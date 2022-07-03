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
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'test',
        entities: [Hirer],
      }),
    }),
    HirerModule,
  ],
})
export class AppModule {}
