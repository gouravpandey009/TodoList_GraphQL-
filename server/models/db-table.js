module.exports = (sequelize, DataTypes) => {
  const todoTable = sequelize.define("todolists", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    jobtodo: {
      type: DataTypes.STRING(4294967295),
      allowNull: false,
    },
    toggle: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });
  return todoTable;
};
