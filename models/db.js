const Sequelize = require('sequelize');

const sequelize = new Sequelize('postapp', 'root', 'Lau17112010*', {
        host: "localhost",
        dialect: 'mysql'
    })

    module.exports = {
        Sequelize : Sequelize,
        sequelize : sequelize
    }