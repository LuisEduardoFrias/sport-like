//
const configCookies = {
  httpOnly: false,
  secure: process.env.NODE_ENV === 'production',
  saneSite: 'strict',
  maxAge: 1000 * 60 * 60,
};

export default configCookies;