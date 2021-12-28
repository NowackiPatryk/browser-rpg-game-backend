import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { characterBaseStats } from './character-base-stats';
import { Character } from './character.entity';
import { CreateCharacterDto } from './dtos/create-character.dto';

@Injectable()
export class CharactersService {
  constructor(
    @InjectRepository(Character)
    private readonly characterRepository: Repository<Character>,
  ) {}

  async create(payload: CreateCharacterDto) { //  TODO: validate if payload matches CreateCharacterDto ( runtime )
    this.characterRepository.save({
      ...payload,
      ...characterBaseStats,
    });
  }
}
