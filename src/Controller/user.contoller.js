const UserModel = require("../Database/user.model");

const model = new UserModel();

const createUser = async (req, res, next) => {
  try {
    const user = res.locals.user;
    const u = model.createUser(user);
    return res.status(200).json({
      status: 200,
      message: "user created successfully",
      data: u,
    });
  } catch (error) {
    next(error);
  }
};
const showUser = async (req, res, next) => {
  try {
    const user = model.getUserById(res.locals.id);
    res.status(200).json({
      status: 200,
      message: "retrive user successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};
const indexUsers = async (req, res, next) => {
  try {
    const users = model.indexUsers();
    res.status(200).json({
      status: 200,
      message: "indexed all users successfully",
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

const indexUsersSorted = async (req, res, next) => {
  try {
    const users = model.indexUsersSorted();
    res.status(200).json({
      status: 200,
      message: "indexed all users sorted alph.. successfully",
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const user = model.updateUser(res.locals.user);
    res.status(200).json({
      status: 200,
      message: "updateed user successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const user = model.deleteUser(res.locals.id);
    res.status(200).json({
      status: 200,
      message: "deleted user successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  indexUsers,
  showUser,
  updateUser,
  deleteUser,
  indexUsersSorted,
};
