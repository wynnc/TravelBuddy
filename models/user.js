module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    // grabbing this from the user login req.user.user_id unique to each user
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    // grabbing this either from req.user.emails.value or if they input a new one
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    }
  });

  //   Sets up foreign keys on Userid with other models and deletes if User is deleted
  User.associate = function (models) {
    User.hasMany(models.Trip, {
      onDelete: 'cascade'
    });
  };
  return User;
};
