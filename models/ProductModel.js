module.exports = async (Sequelize, sequelize) => {
    return await sequelize.define('product', {
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
        },
        price: {
            type: Sequelize.DataTypes.BIGINT,
            allowNull: false,
            defaultValue: 0
        },
        count: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        }
    })
}