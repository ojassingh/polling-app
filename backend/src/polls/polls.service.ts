import { Injectable } from '@nestjs/common';
import { CreatePollDto } from './dto/create-poll.dto';
import { UpdatePollDto } from './dto/update-poll.dto';
import { PrismaClient } from '@prisma/client';
import { Req, Res } from '@nestjs/common';

const prisma = new PrismaClient();

@Injectable()
export class PollsService {
  async create(createPollDto: CreatePollDto) {
    const poll = await prisma.poll.create({
      data: {
        title: createPollDto.title,
        description: createPollDto.description,
        location: createPollDto.location,
        creator: createPollDto.creator,
        date: createPollDto.date
      },
    });
    
    return poll;
  }

  async findAll() {
    const allPolls = await prisma.poll.findMany();
    return allPolls;
  }

  async findOne(id: string) {
    const poll = await prisma.poll.findUnique({
      where: { id: id},
    });
    return poll;
  }

  update(id: number, updatePollDto: UpdatePollDto) {
    return 'action prohibited';
  }

  async remove(id: string) {
    const deletedPoll = await prisma.poll.delete({
      where: { id: id },
    });
    return deletedPoll
  }
}
