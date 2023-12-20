'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Category.hasMany(models.Product, { foreignKey: "category_id", as: "category" })
    }
  }
  Category.init({
    name: DataTypes.STRING,
    delete_flag: DataTypes.BOOLEAN,
  }, {
    sequelize,
    freezeTableName: true,
    tableName: "category",
    modelName: "Category"
  });
  return Category;
};