"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.User, {
        foreignKey: "author_id",
        as: "author",
      });
    }
  }
  Post.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      images: {
        type: DataTypes.TEXT,
        allowNull: true,
        get() {
          const rawValue = this.getDataValue("images");
          return rawValue ? JSON.parse(rawValue) : [];
        },
        set(value) {
          this.setDataValue("images", JSON.stringify(value));
        },
      },
      author_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      category: {
        type: DataTypes.ENUM(
          "Kiến thức dinh dưỡng",
          "Ăn uống lành mạnh",
          "Giảm cân lành mạnh"
        ),
        allowNull: false,
      },
      tagSearch: {
        type: DataTypes.TEXT,
        allowNull: true,
        get() {
          const rawValue = this.getDataValue("tags");
          return rawValue ? JSON.parse(rawValue) : [];
        },
        set(value) {
          this.setDataValue("tags", JSON.stringify(value));
        },
      },
      summary: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "Posts",
      modelName: "Post",
      timestamps: true,
      paranoid: true,
      // hooks: {
      //   beforeCreate: (post) => {
      //     if (!post.summary && post.content) {
      //       post.summary = post.content.substring(0, 100);
      //     }
      //   },
      //   beforeUpdate: (post) => {
      //     if (!post.summary && post.content) {
      //       post.summary = post.content.substring(0, 100);
      //     }
      //   }
      // }
    }
  );

  return Post;
};
