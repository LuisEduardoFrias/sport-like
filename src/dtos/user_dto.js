//
export default class UserDto {
  constructor(user, token) {
    this.token = token;
    const { password: _, _token:__, ...userDto } = user;

    const keys = Reflect.ownKeys(userDto);

    keys.forEach(key =>
      Reflect.set(this, key, userDto[key])
    );
  }
}