
const express = require('express');
const contactRoutes = require('./routes/contacts');
const cors = require('cors')
const app = express();
const mongoose = require('mongoose')

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

const db = "mongodb+srv://amircabili:EwF38Ome8zsnkPvi@cluster0.l2jc0l0.mongodb.net/contactList?retryWrites=true&w=majority"
// const db = "mongodb+srv://amir-1:Mombasa781@cluster0.igugohc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


// Connect to MongoDB
mongoose.connect(db)
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('MongoDB connection error:', error));

// Routes
app.use('/contacts', contactRoutes);

app.get('/', function(req, res){
    res.send('Hello from server contactList!!')
})

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
