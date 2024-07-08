import express from 'express';
import { router } from 'api_httpc';
import jwt from "jsonwebtoken";
import { SECRET_JWT_KEY } from "../config.js";

const app = new router(express);

const _products = [
  {
    "id": 1,
    "name": "Soccer Ball",
    "price": "$20.00",
    "image": "https://example.com/soccerball.jpg",
    "alt": "Soccer Ball Image"
  },
  {
    "id": 2,
    "name": "Running Shoes",
    "price": "$80.00",
    "image": "https://example.com/runningshoes.jpg",
    "alt": "Running Shoes Image"
  },
  {
    "id": 3,
    "name": "Basketball",
    "price": "$25.00",
    "image": "https://example.com/basketball.jpg",
    "alt": "Basketball Image"
  },
  {
    "id": 4,
    "name": "Tennis Racket",
    "price": "$50.00",
    "image": "https://example.com/tennisracket.jpg",
    "alt": "Tennis Racket Image"
  },
  {
    "id": 5,
    "name": "Yoga Mat",
    "price": "$30.00",
    "image": "https://example.com/yogamat.jpg",
    "alt": "Yoga Mat Image"
  },
  {
    "id": 6,
    "name": "Golf Club Set",
    "price": "$200.00",
    "image": "https://example.com/golfclubset.jpg",
    "alt": "Golf Club Set Image"
  },
  {
    "id": 7,
    "name": "Swimming Goggles",
    "price": "$15.00",
    "image": "https://example.com/swimminggoggles.jpg",
    "alt": "Swimming Goggles Image"
  },
  {
    "id": 8,
    "name": "Cycling Helmet",
    "price": "$40.00",
    "image": "https://example.com/cyclinghelmet.jpg",
    "alt": "Cycling Helmet Image"
  },
  {
    "id": 9,
    "name": "Weightlifting Gloves",
    "price": "$10.00",
    "image": "https://example.com/weightliftinggloves.jpg",
    "alt": "Weightlifting Gloves Image"
  },
  {
    "id": 10,
    "name": "Baseball Bat",
    "price": "$35.00",
    "image": "https://example.com/baseballbat.jpg",
    "alt": "Baseball Bat Image"
  }
]

app.get('/', (req, res) => {
  res.render('home', { _products });
});

const products = app.router();
export default products;