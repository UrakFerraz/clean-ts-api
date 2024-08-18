import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http/http-helper'
import { HttpRequest, HttpResponse } from './protocols/http'

/* eslint-disable @typescript-eslint/strict-boolean-expressions */

const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}
