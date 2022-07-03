import { Test } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Hirer } from './hirer.entity'
import { HirerService } from './hirer.service'

const id = 1

const mockedHirerDto = {
  name: 'vinicius',
}

const mockedResult = {
  id: 1,
  name: 'vinicius',
  createdAt: new Date(),
  updatedAt: new Date(),
}

describe('Unit Test for HirerService', () => {
  let hirerService: HirerService
  let repositoryHirer: Repository<Hirer>

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: getRepositoryToken(Hirer),
          useValue: {
            find: jest.fn().mockReturnValue([mockedResult]),
            findOne: jest.fn().mockReturnValue(mockedResult),
            save: jest.fn().mockReturnValue(mockedResult),
            update: jest.fn().mockReturnValue(mockedResult),
            delete: jest.fn(),
          },
        },
        HirerService,
      ],
    }).compile()

    hirerService = moduleRef.get<HirerService>(HirerService)
    repositoryHirer = moduleRef.get(getRepositoryToken(Hirer))
  })

  it('Should create a Hirer with correct params', async () => {
    const repoSpy = jest.spyOn(repositoryHirer, 'save')

    expect(await hirerService.create(mockedHirerDto)).toEqual(mockedResult)
    expect(repoSpy).toBeCalledWith(mockedHirerDto)
  })

  it('Should list all avaliables Hirer', async () => {
    const repoSpy = jest.spyOn(repositoryHirer, 'find')

    expect(await hirerService.listAll()).toEqual([mockedResult])
    expect(repoSpy).toBeCalled()
  })

  it('Should get a hirer by id', async () => {
    const repoSpy = jest.spyOn(repositoryHirer, 'findOne')

    expect(await hirerService.get(id)).toEqual(mockedResult)
    expect(repoSpy).toBeCalledWith({ where: { id } })
  })

  it('Should update a hirer name by id', async () => {
    const callUpdate = jest.spyOn(repositoryHirer, 'update')

    const updateHirerDto = { name: 'vinicius 02', id }

    expect(await hirerService.update(updateHirerDto)).toEqual(mockedResult)
    expect(callUpdate).toBeCalledWith({ id }, updateHirerDto)
  })

  it('Should delete a hirer by id', async () => {
    const callDelete = jest.spyOn(repositoryHirer, 'delete')

    expect(await hirerService.delete(id)).toBe(undefined)
    expect(callDelete).toBeCalledWith(id)
  })
})
