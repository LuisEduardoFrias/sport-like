//
import { User as Us } from 'dajts';
import UserError from '../helpers/user_error.js';

export default class User extends Us {
  constructor(userName, password) {
    super(userName, password);
  }

  /*
    I created this method because when executing the 'getInstance' method
    inherited from 'User', validations are activated when entering the 
    validation methods in the constructor.
  */
  static validate(userName, password) {
    return new this(
      this.#validateUserName(userName),
      this.#validatePasswork(password)
    );
  }

  static #validateUserName(userName) {
    if (typeof userName !== 'string') throw new UserError().isNotString;
    if (userName.length <= 3) throw new UserError().notSpecificLength;
    return userName;
  }

  static #validatePasswork(password) {
    if (typeof password !== 'string') throw new UserError().isNotString;
    if (password.length < 8) throw new UserError().notSpecificLength;
    if (password.search(/[.]/) === -1) throw new UserError().dotless;
    return password;
  }
}