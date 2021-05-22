module.exports = async (Sequelize, sequelize) => {
    return await sequelize.define('cart', {
        id: {
            type: Sequelize.DataTypes.UUID,
            primaryKey: true,
            defaultValue: Sequelize.DataTypes.UUIDV4()
        },
        count: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        }
    })
}