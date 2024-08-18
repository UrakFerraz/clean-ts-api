import { InvalidParamError } from '../errors/invalid-param-error'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http/http-helper'
import { Controller } from './protocols/controller'
import { EmailValidator } from './protocols/email-validator'
import { HttpRequest, HttpResponse } from './protocols/http'

/* eslint-disable @typescript-eslint/strict-boolean-expressions */

const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
export class SignUpController implements Controller {
  constructor (private readonly emailValidator: EmailValidator) {}
  handle (httpRequest: HttpRequest): HttpResponse {
    const isValidEmail = this.emailValidator.isValid(httpRequest.body.email)
    if (!isValidEmail) return badRequest(new InvalidParamError('email'))
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}
