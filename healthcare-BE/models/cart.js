"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate(models) {
      Cart.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });
      Cart.hasMany(models.CartItem, {
        foreignKey: 'cartId',
        as: 'cartItems',
      });
    }
  }

  Cart.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "Carts",
      modelName: "Cart",
      timestamps: true,
    }
  );

  return Cart;
};
