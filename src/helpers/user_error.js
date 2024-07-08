//
export default class UserError extends Error {
  constructor() {
    super();
    this.name = "User error: ";
    this.isNotString = 'The value isn\'t a \'string\'.';
    this.notSpecificLength = 'The value does not complie with the specified minimum length.';
    this.dotless = 'The value does not has dot in structure him.';
    this.loggedIn = 'You are logged in.';
  }
}