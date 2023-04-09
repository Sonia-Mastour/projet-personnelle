

module.exports = (sequelize, DataTypes) => {
    const U = sequelize.define(
      'Users',
      {
        name: {
          type: DataTypes.STRING(50),
          allowNull: false,
  
        },
        mail: {
          type: DataTypes.STRING(50),
          allowNull: false,
  
        },
        phone: {
          type: DataTypes.STRING(13),
          allowNull: false,
  
        },
        pwd: {
          type: DataTypes.STRING(50),
          allowNull: false
  
        },
      });
   
  
    return U;
  }