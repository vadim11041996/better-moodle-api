'use strict';

module.exports = function defineStudent(sequelize, DataTypes) {
  const Student = sequelize.define('Student', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    firstName: {
      type: DataTypes.STRING,
      field: 'first_name',
      validate: {
        len: [1, 50],
      },
    },
    lastName: {
      type: DataTypes.STRING,
      field: 'last_name',
      validate: {
        len: [1, 50],
      },
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: [8, 16],
      },
    },
    phoneNumber: {
      type: DataTypes.STRING,
      field: 'phone_number',
      validate: {
        is: ['^[\+]?[0]{0,2}?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$', 'i'],
        len: [9, 20],
      },
    },
    email: {
      type: DataTypes.STRING,
      field: 'email',
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    idGroup: {
      type: DataTypes.INTEGER,
      field: 'id_group',
      foreignKey: true,
    },

  }, {
    tableName: 'students',
    timestamps: false,
  });
  Student.associate = function associateStudent(models) {
    Student.belongsTo(models.Group, { foreignKey: 'id' });
  };
  return Student;
};