
const Sequelize = require("sequelize")
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/dealers_choice_redux_db')

const Meat = sequelize.define('meat', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true
    }
    
})

Meat.generateRandom = function() {
    return this.create({name: `Meat ${Math.ceil(Math.random()*1000)}`});
}


const express = require('express');
const app = express();
const path = require('path');


app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));
app.use('/public', express.static(path.join(__dirname, 'public')));


app.get("/api/meats", async(req,res,next)=> {
    try {
        res.send(await Meat.findAll())
    } catch(err) {
        next(err)
    }
})

// app.post("/api/meats", async(req,res,next)=> {
//     try {
//          res.send(await Meat.generateRandom())
       
//     } catch(err) {
//         next(err)
//     }
// })

// app.delete("/api/meats/:id", async(req,res,next)=> {
//     try {
//          const meat = await Meat.findByPk(req.params.id)
     
//          Meat.destroy()
           
//     } catch(err) {
//         next(err)
//     }
// })




const init = async(req,res) => {
    await sequelize.sync({force: true})

    await Meat.create({name: 'Chicken' })
    await Meat.create({name: 'Beef'})
    await Meat.create({name: 'Venison'})
    await Meat.create({name: 'Mutton'})
    
    const port = process.env.PORT || 8080;

app.listen(port, ()=> console.log(`listening on port ${port}`));

    
}



init()
