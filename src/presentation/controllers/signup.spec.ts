import { SignUpController } from './signup'

describe('SIgnUp Controller', () => {
  test('should return status 400 if no name is provided ', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        password: 'any_password',
        passwordConfirmation: 'any_password',
        email: 'any_email@mail.com'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing param: name'))
  })
  test('should return status 400 if no email is provided ', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        password: 'any_password',
        passwordConfirmation: 'any_password',
        name: 'any_name'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing param: email'))
  })
  test('should return status 400 if no password is provided ', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        passwordConfirmation: 'any_password',
        name: 'any_name',
        email: 'any_email@mail.com'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing param: password'))
  })
  test('should return status 400 if no passwordConfirmation is provided ', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        password: 'any_password',
        name: 'any_name',
        email: 'any_email@mail.com'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing param: passwordConfirmation'))
  })
})
