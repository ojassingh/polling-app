import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PollsModule } from './polls/polls.module';
import { ResponsesModule } from './responses/responses.module';

@Module({
  imports: [PrismaModule, PollsModule, ResponsesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
