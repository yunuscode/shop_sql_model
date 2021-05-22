const { Sequelize } = require('sequelize');
const CategoryModel = require('./models/CategoryModel');
const ProductModel = require('./models/ProductModel');
const UserModel = require('./models/UserModel');

const sequelize = new Sequelize('postgres://postgres:new_password@localhost:5432/shop_model', {
    logging: (log) => console.log(`SQL: ${log}`)
})


async function main() {
    try {
        await sequelize.authenticate();
        console.log("Connected Successfully");

        let db = {}

        db.users = await UserModel(Sequelize, sequelize)
        db.categories = await CategoryModel(Sequelize, sequelize)
        db.products = await ProductModel(Sequelize, sequelize)


        // References

        db.categories.hasMany(db.products, {
            foreign_key: {
                name: "category_id",
                allowNull: false
            }
        })

        db.products.belongsTo(db.categories, {
            foreign_key: {
                name: "category_id",
                allowNull: false
            }
        })

        sequelize.sync({ force: true })
        
    }
    catch(e) {
        console.log("SQL ERROR:", e);
    }
}


main()