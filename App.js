require('dotenv').config();
const mongoose = require('mongoose');

const {
    createSinglePerson,
    createManyPeople,
    findPeopleByName,
    findOneByFood,
    findPersonById,
    updateFavoriteFoods,
    updateAgeByName,
    deletePersonById,
    deleteManyMary,
    searchBurritoLovers
} = require('./controllers/personController');

// Connexion
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ Connecté à MongoDB Atlas !");

        // 👉 Active les fonctions que tu veux tester :

        //createSinglePerson();

        // createManyPeople([
        //   { name: 'Amine', age: 30, favoriteFoods: ['Tacos', 'Burger'] },
        //   { name: 'Sara', age: 22, favoriteFoods: ['Salade', 'Pâtes'] },
        //   { name: 'Ali', age: 28, favoriteFoods: ['Sushi'] }
        // ]);

        // findPeopleByName('Chaima');
        // findOneByFood('Pizza');
        // findPersonById('665fe6a0cf0543a1c1234567');
        // updateFavoriteFoods('665fe6a0cf0543a1c1234567');
        // updateAgeByName('Sara');
        // deletePersonById('665fe6a0cf0543a1c1234567');
        // deleteManyMary();
        // searchBurritoLovers();

    })
    .catch(err => console.error("❌ Erreur de connexion :", err));