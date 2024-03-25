import { PaginationParams } from '@/core/repositories/pagination-params'
import { QuestionComment } from '../../enterprise/entities/question-comment'

export interface QuestionCommentsRepository {
  findById(id: string): Promise<QuestionComment | null>
  create(comment: QuestionComment): Promise<void>
  delete(comment: QuestionComment): Promise<void>
  findManyByQuestionId(
    questionId: string,
    page: PaginationParams,
  ): Promise<QuestionComment[]>
}
