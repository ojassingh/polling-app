import { Injectable } from '@nestjs/common';
import { CreatePollDto } from './dto/create-poll.dto';
import { UpdatePollDto } from './dto/update-poll.dto';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

const prisma = new PrismaClient();

@Injectable()
export class PollsService {
  constructor(private prisma: PrismaService) {}
  
  async create(createPollDto: CreatePollDto) {
    const poll = await prisma.poll.create({
      data: 
      {
        title: createPollDto.title,
        description: createPollDto.description,
        location: createPollDto.location,
        creator: createPollDto.creator,
        date: createPollDto.date
      },
      // createPollDto
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

  async update(id: string, updatePollDto: UpdatePollDto) {

    // const poll = await prisma.poll.findUnique({
    //   where: {id: id},
    //   select: {responses}
    // })

    // const updatedPost = await prisma.poll.update({
    //   where: { id: id },
    //   data: {
    //     responses: {
    //       set: [...responses, updatePollDto.response],
    //     },
    //   },
    // });
    
    // return updatedPost
  }

  async remove(id: string) {
    const deletedPoll = await prisma.poll.delete({
      where: { id: id },
    });
    return deletedPoll
  }
}
