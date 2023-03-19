import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { Repository } from 'typeorm';


@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>
  ) { }
  create(createTodoDto: CreateTodoDto) {
    //insert into todo ('title',''username','status')value('ทดสอบ','ทดสอบ',:'กหฟฟ')
    return this.todoRepository.save(createTodoDto);
  }

  findAll() {

    return this.todoRepository.find();
  }

  findOne(id: number) {
    return this.todoRepository.findBy({
      id:id
    });
  }

  update(id: number, updateTodoDto: any) {
    return this.todoRepository.save({
      id: id,
      title: updateTodoDto.title,
      username: updateTodoDto.username,
      status: updateTodoDto.status,
    });
  }

  remove(id: number) {
    return this.todoRepository.delete(id);
  }
}
