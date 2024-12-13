const mongoose = require('mongoose')

const pokemonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    sprite: {
        type: String
    },
    types: [{
        type: String
    }],
    stats: {
        hp: {
            type: Number
        },
        attack: {
            type: Number
        },
        defense: {
            type: Number
        },
        special_attack: {
            type: Number
        },
        special_defense: {
            type: Number
        },
        speed: {
            type: Number
        },
    }
});





const pokeTeamSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User', 
        required: true
    },
    name: {
        type: String, 
        required: true
    },
    pokemons: [
        pokemonSchema
    ]
},{
    timestamps: true,
});

module.exports = mongoose.model('PokeTeam', pokeTeamSchema)