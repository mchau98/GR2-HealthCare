"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Categories.hasMany(models.Product, {
        foreignKey: "category_id",
        as: "category",
      });
    }
  }
  Categories.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Categories",
      tableName: "Categories",
      timestamps: true,
      paranoid: true,
    }
  );
  return Categories;
};
