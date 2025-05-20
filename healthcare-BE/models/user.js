"use strict";
const bcrypt = require("bcrypt");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Post, {
        foreignKey: 'author_id',
        as: 'posts'
      });
      User.hasOne(models.Cart, { foreignKey: 'userId' });
      User.hasMany(models.Order, { foreignKey: 'userId' });

      
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: "Email không hợp lệ",
          },
        },
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          isInt: {
            msg: "Tuổi phải là số nguyên",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [6, 28],
            msg: "Mật khẩu phải có từ 6 đến 28 ký tự",
          },
        },
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          is: {
            args: [/^\d{10}$/], // Kiểm tra đúng 10 chữ số
            msg: "Số điện thoại phải gồm 10 chữ số",
          },
        },
      },
      role: {
        type: DataTypes.ENUM("admin", "user"),
        allowNull: false,
        defaultValue: "user",
      },
    },
    {
      sequelize,
      tableName: "User",
      modelName: "User",
      timestamps: true,
      paranoid: false,
    }
  );
  User.addHook("beforeCreate", async (user) => {
    const saltRounds = 10;
    user.password = await bcrypt.hash(user.password, saltRounds);
  });
  return User;
};
