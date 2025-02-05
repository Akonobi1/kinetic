import { ApiCoreDataAccessModule } from '@kin-kinetic/api/core/data-access'
import { ApiSolanaDataAccessModule } from '@kin-kinetic/api/solana/data-access'
import { Module } from '@nestjs/common'
import { ApiClusterAdminDataAccessService } from './api-cluster-admin-data-access.service'
import { ApiClusterUserDataAccessService } from './api-cluster-user-data-access.service'

@Module({
  providers: [ApiClusterAdminDataAccessService, ApiClusterUserDataAccessService],
  exports: [ApiClusterAdminDataAccessService, ApiClusterUserDataAccessService],
  imports: [ApiCoreDataAccessModule, ApiSolanaDataAccessModule],
})
export class ApiClusterDataAccessModule {}
