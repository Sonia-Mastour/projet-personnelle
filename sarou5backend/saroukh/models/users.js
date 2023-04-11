module.exports=(sequelize,DataTypes)=>{
    const Users=sequelize.define(
        'Users',
        {
           
            name:{
                type:DataTypes.STRING,
                allowNull: false
            },
           mail:{
                type:DataTypes.STRING,
            },
           phone:{
                type:DataTypes.INTEGER,
                allowNull: false
            },
            passwod:{
                type:DataTypes.STRING,
                allowNull: false
            },
                  
        }
    );
            Users.associate = models => {
                Users.hasMany(models.Annonces, { onDelete: "cascade" })

            }

   
    return Users;
}