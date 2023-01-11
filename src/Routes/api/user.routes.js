const express = require("express");
const {
  createUser,
  indexUsers,
  updateUser,
  showUser,
  indexUsersSorted,
  deleteUser,
} = require("../../Controller/user.contoller");
const createUserValidator = require("../../Middleware/User/create.middleware");
const userIdValidator = require("../../Middleware/user/id.middleware");
const updateUserValidator = require("../../Middleware/user/update.middleware");
const userRoute = express.Router();

userRoute.route("/").get(indexUsers).post(createUserValidator, createUser);

userRoute.route("/sorted").get(indexUsersSorted);

userRoute.route("/:id")
  .get(userIdValidator, showUser)
  .put(updateUserValidator, updateUser)
  .delete(userIdValidator, deleteUser);

module.exports = userRoute;
