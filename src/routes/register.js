import express from 'express';
import { router } from 'api_httpc';
import jwt from "jsonwebtoken";
import { SECRET_JWT_KEY } from "../config.js";
import bodyRequire from '../midleware.js'

import UserRepository from '../repositories/user_repository.js';

const app = new router(express);
// routes
app.post('/login', (req, res) => {
  const { userName, password } = req.body;

  const { error, data } = UserRepository.login(userName, password);

  if (error) {
    res.status(409).json({ message: error });
    return;
  }

  const token = jwt.sign({ data }, SECRET_JWT_KEY, { expiresIn: '1h' });

  res.cookie('access_token', token, configCookies).send({ data });

}, bodyRequire);
//
app.post('/logout', (req, res) => {
  const { user } = req.session;

  console.log("logout: ", JSON.stringify(user, null, 2));

  if (!user) {
    res.status(401).json({ message: "Access not Authorized" });
    return;
  }

  const result = UserRepository.logout(user);

  if (result) {
    res.cookie('access_token', null, configCookies).status(200).send({ message: "logout" });
    return;
  }

  res.status(400).send({ message: result });

}, middlewares);
//
app.post('/register', (req, res) => {
  const { userName, password } = req.body;

  const { error, data } = UserRepository.create(userName, password);

  if (error) {
    res.status(409).json({ message: error });
    return;
  }

  res.status(200).json({ message: data });

}, bodyRequire);
//
const register = app.router();
export default register;