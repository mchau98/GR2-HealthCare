const { where } = require("sequelize");
const db = require("../models/index");
const createUser = async (userData) => {
    try {
      const existingUser = await db.User.findOne({
        where: { email: userData.email },
      });
      if (existingUser) {
        return {
          message: "Email already existed",
        };
      }
  
      const user = await db.User.create(userData);
      return user;
    } catch (error) {
      throw error;
    }
  };
  
  const checkUserExist = async (userData) => {
    const existedUser = await db.User.findOne({
      where: { email: userData.email },
    });
    return existedUser;
  };
  const updatePassword = async (email, hashedPassword) => {
    try {
      await db.User.update(
        { password: hashedPassword },
        { where: { email: email } }
      );
    } catch (error) {
      throw error;
    }
  };

  module.exports = { createUser, checkUserExist, updatePassword };