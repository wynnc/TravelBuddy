module.exports = function (sequelize, DataTypes) {
  var Trip = sequelize.define('Trip', {
    tripName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    startDate: {
      type: DataTypes.STRING,
      allowNull: false

    },
    endDate: {
      type: DataTypes.STRING,
      allowNull: false
    }

  });

  Trip.associate = function (models) {
    Trip.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    Trip.hasMany(models.Flight, {
      onDelete: 'cascade'
    });
    Trip.hasMany(models.Lodging, {
      onDelete: 'cascade'
    });
    Trip.hasMany(models.Transport, {
      onDelete: 'cascade'
    });
  };
  return Trip;
};
