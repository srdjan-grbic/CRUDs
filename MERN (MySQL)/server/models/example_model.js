module.exports = (sequelize, DataTypes) => {

    const Example_model = sequelize.define('Example_model', {

        id: {
            type: DataTypes.INTEGER, 
            primaryKey: true, 
            autoIncrement: true
        }, 

    }, 
    {
        timestamps: false
    }); 

    return Example_model; 

}