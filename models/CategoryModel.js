module.exports = async (Sequelize, sequelize) => {
    return await sequelize.define('category', {
        id: {
            type: Sequelize.DataTypes.UUID,
            primaryKey: true,
            defaultValue: Sequelize.DataTypes.UUIDV4()
        },
        name: {
            type: Sequelize.DataTypes.STRING(32),
            allowNull: false
        },
        slug: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        }
    })
}