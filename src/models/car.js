const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    static associate(models) {
      // define association here
    }
  }
  Car.init(
    {
      UUID: DataTypes.STRING,
      VIN: DataTypes.STRING,
      make: DataTypes.STRING,
      model: DataTypes.STRING,
      mileage: DataTypes.INTEGER,
      year: DataTypes.INTEGER,
      price: DataTypes.STRING,
      zip_code: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Car',
      tableName: 'cars',
    }
  );
  return Car;
};
