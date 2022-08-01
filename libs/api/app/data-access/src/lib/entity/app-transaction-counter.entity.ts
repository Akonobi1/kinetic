import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class AppTransactionCounter {
  @Field({ nullable: true })
  limit?: number
  @Field({ nullable: true })
  page?: number
  @Field({ nullable: true })
  pageCount?: number
  @Field({ nullable: true })
  total?: number
}
