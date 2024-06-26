import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { v4 as uuid } from 'uuid'
import { Repository } from 'typeorm';

@Injectable()
export class LessonService {
    constructor(
        @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>,
      ) {}
      
    async createLesson(name, startDate, endDate) {
        
        const lesson = this.lessonRepository.create({
          id: uuid(),
          name,
          startDate,
          endDate,
        });
    
        return this.lessonRepository.save(lesson);
      }
}
