import { Injectable } from '@nestjs/common';
import { EvmChain } from '@moralisweb3/evm-utils';
import { InternalServerErrorException } from '@nestjs/common';
import Moralis from 'moralis';
import { startMoralis } from './service/moralis';

@Injectable()
export class AppService {
  async getNft(token: string): Promise<any> {
    try {
      const chain = EvmChain.ETHEREUM;

      const response = await Moralis.EvmApi.nft.getNFTMetadata({
        address: '0x1616616bc0e824d599c6c31de47718b8e3945192',
        chain,
        tokenId: token,
      });

      return { success: true, data: response };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async getNftOwnerByAddress(address: string): Promise<any> {
    try {
      const chain = EvmChain.ETHEREUM;

      const response = await Moralis.EvmApi.nft.getWalletNFTs({
        address,
        chain,
      });

      return { success: true, data: response };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async getNftOwnerByAddressCrossChain(address: string): Promise<any> {
    try {
      const allNFTs = [];

      const chains = [EvmChain.ETHEREUM, EvmChain.BSC, EvmChain.POLYGON];

      for (const chain of chains) {
        const response = await Moralis.EvmApi.nft.getWalletNFTs({
          address,
          chain,
        });

        if (response.result.length > 0) {
          allNFTs.push(response);
        }
      }

      return { success: true, data: allNFTs };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async getAllNftsFromCollection(address: string): Promise<any> {
    const chain = EvmChain.ETHEREUM;

    const response = await Moralis.EvmApi.nft.getContractNFTs({
      address,
      chain,
    });

    return response;
  }

  async getOwnersOfNftCollection(address: string): Promise<any> {
    const chain = EvmChain.ETHEREUM;

    const response = await Moralis.EvmApi.nft.getNFTOwners({
      address,
      chain,
    });

    return response;
  }

  async getNftOwner(address: string, token: string): Promise<any> {
    const chain = EvmChain.ETHEREUM;

    const response = await Moralis.EvmApi.nft.getNFTTokenIdOwners({
      address,
      chain,
      tokenId: token,
    });

    return response;
  }
}
