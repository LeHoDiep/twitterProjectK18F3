import { NextFunction, Response, Request } from 'express'
import { omit } from 'lodash'
import HTTP_STATUS from '~/constants/httpStatus'

export const defaultErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  //đây là nơi mà tất cả lỗi trên hệ thống sẽ dồn về
  res.status(err.status || HTTP_STATUS.INTERNAL_SERVER_ERROR).json(omit(err, ['status']))
}

//err
//{msg, empty}
