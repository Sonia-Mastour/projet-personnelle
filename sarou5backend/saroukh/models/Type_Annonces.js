module.exports=(sequelize,DataTypes)=>{
    const Type_Annonces=sequelize.define(
        'Type_Annonces',
        {
            nom_Annonces:{
                type:DataTypes.STRING
            }
        }
    );
    Type_Annonces.associate=models=>{
        Type_Annonces.hasMany(models.Annonces,{onDelete:"cascade"})
    }
    return Type_Annonces;
}