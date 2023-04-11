module.exports=(sequelize,DataTypes)=>{
    const Annonces=sequelize.define(
        'Annonces',
        {
           
            categorie:{
                type:DataTypes.STRING,
                allowNull: false
            },
            Type_categorie:{
                type:DataTypes.STRING,
            },
         
            Titre_de_lannonce:{
                type:DataTypes.STRING,
                allowNull: false
            },
            Description:{
                type:DataTypes.STRING,
                allowNull: false
            },
            image:{
                type:DataTypes.STRING,
                allowNull: false
            },
            Prix:{
                type:DataTypes.INTEGER,
                allowNull: false
            },
            Phone:{
                type:DataTypes.INTEGER,
                allowNull: false
            },
            ville:{
                type:DataTypes.STRING,
                allowNull: false
            },
                  
        }
    );

    Annonces.associate = models => {
        Annonces.belongsTo(models.Users,{onDelete:"cascade"})
        Annonces.belongsTo(models.Type_Annonces,{onDelete:"cascade"})

    }
   
    return Annonces;
}