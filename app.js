const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();

const clientRoutes = require('./src/routes/clientsRoutes');
app.use('/clients', clientRoutes);


const connectDB = async () => {
    try{
        await mongoose.connect(process.env.BD_STR_CON);
        console.log("Conectado");
    } catch(error){
        console.error(error);
    }
}
connectDB();

app.get('/', (req, res) => {
    res.json({ message: "Bem vindo ao CRUD client" });
})

const port = 3001;
app.listen(port, () => {
    console.log(`Rodando em: localhost:${port}`);
});