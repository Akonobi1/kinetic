import { ApiCoreDataAccessModule } from '@kin-kinetic/api/core/data-access'
import { ApiSolanaDataAccessModule } from '@kin-kinetic/api/solana/data-access'
import { ApiWebhookDataAccessModule } from '@kin-kinetic/api/webhook/data-access'
import { Module } from '@nestjs/common'
import { ApiTransactionDataAccessService } from './api-transaction-data-access.service'
import { ApiTransactionUserDataAccessService } from './api-transaction-user-data-access.service'

@Module({
  imports: [ApiCoreDataAccessModule, ApiSolanaDataAccessModule, ApiWebhookDataAccessModule],
  providers: [ApiTransactionDataAccessService, ApiTransactionUserDataAccessService],
  exports: [ApiTransactionDataAccessService, ApiTransactionUserDataAccessService],
})
export class ApiTransactionDataAccessModule {}
