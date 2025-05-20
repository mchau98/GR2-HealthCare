"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });
      Order.hasMany(models.OrderItem, {
        foreignKey: 'orderId',
        as: 'orderItems',
      });
    }
  }

  Order.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          min: {
            args: [0],
            msg: "Tổng giá trị đơn hàng không hợp lệ",
          },
        },
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: {
            args: [["pending", "paid", "shipped", "completed", "cancelled"]],
            msg: "Trạng thái đơn hàng không hợp lệ",
          },
        },
        defaultValue: "pending",
      },
    },
    {
      sequelize,
      tableName: "Orders",
      modelName: "Order",
      timestamps: true,
    }
  );

  return Order;
};
