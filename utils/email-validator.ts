import { EmailValidator } from './../src/presentation/controllers/protocols/email-validator'
export class EmailValidatorStub implements EmailValidator {
  isValid (email: string): boolean {
    return true
  }
}
