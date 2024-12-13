const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const testJWTRouter = require('./controllers/test-jwt');
const usersRouter = require('./controllers/users');
const profilesRouter = require('./controllers/profiles');
const pokemonTeamsRouter = require('./controllers/pokemon-teams')

const verifyToken = require('./middleware/verify-token');
// const { verify } = require('jsonwebtoken');

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});
app.use(cors());
app.use(express.json());

// Routes go here
app.use('/test-jwt', testJWTRouter);
app.use('/users', usersRouter);
app.use('/profiles', profilesRouter);

app.use(verifyToken)
app.use('/pokemon-teams', pokemonTeamsRouter)

app.listen(3000, () => {
    console.log('The express app is ready!');
});