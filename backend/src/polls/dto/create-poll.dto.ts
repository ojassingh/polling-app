import { ApiProperty } from "@nestjs/swagger"
export class CreatePollDto {

        @ApiProperty()
        title: string;

        @ApiProperty()
        description: string;

        @ApiProperty()
        date: string;

        @ApiProperty()
        createdAt: string;

        @ApiProperty()
        location: string;

        @ApiProperty()
        creator: string;
}


