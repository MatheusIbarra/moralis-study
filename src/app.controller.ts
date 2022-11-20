import { Controller, Get, Query } from '@nestjs/common';
import { InternalServerErrorException } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/getNft')
  async getNft(@Query() query: any): Promise<any> {
    const { token } = query;

    if (!token) {
      throw new InternalServerErrorException({
        error: 'Please send token in query.',
      });
    }

    return await this.appService.getNft(token);
  }

  @Get('/nftsOwner')
  async getNftOwnerByAddress(@Query() query: any): Promise<any> {
    const { address } = query;

    if (!address || address.length !== 42) {
      throw new InternalServerErrorException({
        error: 'Please send address in query.',
      });
    }

    return await this.appService.getNftOwnerByAddress(address);
  }

  @Get('/nftsownercrosschain')
  async getNftOwnerByAddressCrossChain(@Query() query: any): Promise<any> {
    const { address } = query;

    if (!address || address.length !== 42) {
      throw new InternalServerErrorException({
        error: 'Please send address in query.',
      });
    }

    return await this.appService.getNftOwnerByAddressCrossChain(address);
  }

  @Get('/getNftsFromCollection')
  async getNftsFromCollection(@Query() query: any): Promise<any> {
    const { address } = query;

    if (!address || address.length !== 42) {
      throw new InternalServerErrorException({
        error: 'Please send address in query.',
      });
    }

    return await this.appService.getAllNftsFromCollection(address);
  }

  @Get('/getOwnersOfNftCollection')
  async getOwnersOfNftCollection(@Query() query: any): Promise<any> {
    const { address } = query;

    if (!address || address.length !== 42) {
      throw new InternalServerErrorException({
        error: 'Please send address in query.',
      });
    }

    return await this.appService.getOwnersOfNftCollection(address);
  }

  @Get('/getOwnerOfAnNft')
  async getNftOwner(@Query() query: any): Promise<any> {
    const { address, token } = query;

    if (!address || address.length !== 42) {
      throw new InternalServerErrorException({
        error: 'Please send address in query.',
      });
    }

    if (!token) {
      throw new InternalServerErrorException({
        error: 'Please send token in query.',
      });
    }

    return await this.appService.getNftOwner(address, token);
  }
}
