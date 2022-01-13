import validator from 'validator';

export class UserValidator {
  static validate(body, toValidate: string[]) {
    const errors: string[] = [];

    if (toValidate.includes('name') && validator.isEmpty(body.name)) {
      errors.push('Name cannot be empty');
    }

    if (toValidate.includes('email') && !validator.isEmail(body.email)) {
      errors.push('Invalid Email format');
    }

    if (
      toValidate.includes('password') &&
      validator.isEmpty(body.password)
    ) {
      errors.push('Password cannot be empty');
    }

    return errors;
  }
}
