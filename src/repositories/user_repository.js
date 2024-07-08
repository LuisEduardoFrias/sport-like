//
import daj from 'dajts';
import User from '../models/user.js';
import UserError from '../helpers/user_error.js';
import UserDto from '../dtos/user_dto.js';

//zod for validations
export default class UserRepository {
  static create(userName, password) {
    const user = User.validate(userName, password);
    const result = daj.registerSync(user);

    return { ...result, id: user.key };
  }
  static login(userName, password) {
    const { error, data } = daj.getSync(User.getInstance());

    if (error) return error;

    const user = data.find(e => e.user === userName);

    if (user) {
      if (user._token?.token) return { error: new UserError().loggedIn, date: null };

      const token = daj.loginSync(User.validate(userName, password));
      return { error: null, data: new UserDto(user, token.token) };
    }

    return { error: `${userName} not found`, data: null };
  }
  static logout(data) {
    /*
    {
      "data":{
        "token":"0b3508f1-bab8-0ecc-cc05-ef0bdbe91fb0",
        "key":"acea9dab-e546-4ecb-ea79-02aba47e0f80",
        "user":"luis"
      },
      "iat":1720262640,
      "exp":1720266240
    }
    */
    const { error, data: _data } = daj.getSync(User.getInstance());

    if (error) return error;

    const user = _data.find(e => e.key === data?.data?.key);

    if (user) {
      const { error, data: _data_ } = daj.logoutAsync({ user: user.user, password: user.password });

      return { error: `${user.user} not found`, data: null };
    }

    return { error: null, data: null };
  }
} 