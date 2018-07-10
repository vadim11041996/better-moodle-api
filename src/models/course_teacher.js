'use strict';

module.exports = function defineCourseTeacher(sequelize, DataTypes) {
  const CourseTeacher = sequelize.define('CourseTeacher', {
    idCourse: {
      type: DataTypes.INTEGER,
      field: 'id_course',
      foreignKey: true,
    },
    idTeacher: {
      type: DataTypes.INTEGER,
      field: 'id_teacher',
      foreignKey: true,
    },

  }, {
    tableName: 'courses_teachers',
    timestamps: false,
  });
  CourseTeacher.associate = function associateCourseTeacher(models) {
    CourseTeacher.hasMany(models.Teacher, { foreignKey: 'id' });
    CourseTeacher.hasMany(models.Course, { foreignKey: 'id' });
  };
  return CourseTeacher;
};