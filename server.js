
const Sequelize = require("sequelize")
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/dealers_choice_redux_db')

const Meat = sequelize.define('meat', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true
    }
    
})

const Animal = sequelize.define('animal', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true
    }
    
})

Meat.belongsTo(Animal)
Animal.hasMany(Meat)

const express = require('express');
const app = express();
const path = require('path');


app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));


app.get("/api/animals", async(req,res,next)=> {
    try {
        res.send(await Animal.findAll({
        }))
    } catch(err) {
        next(err)
    }
})


app.get("/api/meats", async(req,res,next)=> {
    try {
        res.send(await Meat.findAll({
            include: Animal
        }))
    } catch(err) {
        next(err)
    }
})

const init = async(req,res) => {
    await sequelize.sync({force: true})
    
    const Chicks = await Animal.create({name: 'Chicks'})
    const Cow =  await Animal.create({name: 'Cow'})
    const Deer =   await Animal.create({name: 'Deer'})
    const Lamb = await Animal.create({name: 'Lamb'})
     
    
    await Meat.create({name: 'Chicken', animalId: Chicks.id })
    await Meat.create({name: 'Beef', animalId: Cow.id})
    await Meat.create({name: 'Venison', animalId: Deer.id})
    await Meat.create({name: 'Mutton', animalId: Lamb.id})
    
   
    const port = process.env.PORT || 8080;

app.listen(port, ()=> console.log(`listening on port ${port}`));

    
}



init()
