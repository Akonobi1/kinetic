import { getAppKey } from '@kin-kinetic/api/core/util'
import {
  ApiTransactionDataAccessService,
  GetTransactionResponse,
  LatestBlockhashResponse,
  MakeTransferRequest,
  MinimumRentExemptionBalanceRequest,
  MinimumRentExemptionBalanceResponse,
  Transaction,
} from '@kin-kinetic/api/transaction/data-access'
import { Body, Controller, Get, Param, ParseIntPipe, Post, Req } from '@nestjs/common'
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Request } from 'express'

@ApiTags('transaction')
@Controller('transaction')
export class ApiTransactionFeatureController {
  constructor(private readonly service: ApiTransactionDataAccessService) {}

  @Get('latest-blockhash/:environment/:index')
  @ApiOperation({ operationId: 'getLatestBlockhash' })
  @ApiParam({ name: 'index', type: 'integer' })
  @ApiResponse({ type: LatestBlockhashResponse })
  getLatestBlockhash(@Param('environment') environment: string, @Param('index', ParseIntPipe) index: number) {
    return this.service.getLatestBlockhash(getAppKey(environment, index))
  }

  @Get('minimum-rent-exemption-balance/:environment/:index')
  @ApiOperation({ operationId: 'getMinimumRentExemptionBalance' })
  @ApiParam({ name: 'index', type: 'integer' })
  @ApiResponse({ type: MinimumRentExemptionBalanceResponse })
  getMinimumRentExemptionBalance(
    @Param('environment') environment: string,
    @Param('index', ParseIntPipe) index: number,
    @Param('input') input: MinimumRentExemptionBalanceRequest,
  ) {
    return this.service.getMinimumRentExemptionBalance(getAppKey(environment, index), input)
  }

  @Post('make-transfer')
  @ApiBody({ type: MakeTransferRequest })
  @ApiOperation({ operationId: 'makeTransfer' })
  @ApiResponse({ type: Transaction })
  makeTransfer(@Req() req: Request, @Body() body: MakeTransferRequest) {
    return this.service.makeTransfer(req, body)
  }

  @Get('transaction/:environment/:index/:signature')
  @ApiOperation({ operationId: 'getTransaction' })
  @ApiParam({ name: 'index', type: 'integer' })
  @ApiResponse({ type: GetTransactionResponse })
  getTransaction(
    @Param('environment') environment: string,
    @Param('index', ParseIntPipe) index: number,
    @Param('signature') signature: string,
  ) {
    return this.service.getTransaction(getAppKey(environment, index), signature)
  }
}
