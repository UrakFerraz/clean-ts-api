import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http/http-helper'
import { HttpRequest, HttpResponse } from './protocols/http'

/* eslint-disable @typescript-eslint/strict-boolean-expressions */

const params = ['name', 'email', 'password', 'passwordConfirmation']
export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const param = params.find(param => {
      return !httpRequest.body[param]
    })
    return badRequest(new MissingParamError(param))
  }
}
