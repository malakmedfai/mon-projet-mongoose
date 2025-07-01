const Person = require('../models/person');

// ✅ 1. Créer une personne
const createSinglePerson = () => {
    const newPerson = new Person({
        name: 'Chaima',
        age: 25,
        favoriteFoods: ['Pizza', 'Couscous']
    });

    return newPerson.save()
        .then(data => console.log("✅ Personne enregistrée :", data))
        .catch(err => console.error("❌ Erreur :", err));
};

// ✅ 2. Créer plusieurs personnes
const createManyPeople = () => {
    const arrayOfPeople = [
        { name: 'Amine', age: 30, favoriteFoods: ['Tacos', 'Burger'] },
        { name: 'Sara', age: 22, favoriteFoods: ['Salade', 'Pâtes'] },
        { name: 'Ali', age: 28, favoriteFoods: ['Sushi'] }
    ];

    return Person.create(arrayOfPeople)
        .then(data => console.log("✅ Plusieurs personnes ajoutées :", data))
        .catch(err => console.error("❌ Erreur :", err));
};

// 🔍 3. Trouver toutes les personnes avec un nom donné
const findPeopleByName = (personName) => {
    return Person.find({ name: personName })
        .then(data => console.log("🔍 Personnes trouvées :", data))
        .catch(err => console.error("❌ Erreur :", err));
};

// 🔎 4. Trouver une personne par un aliment favori
const findOneByFood = (food) => {
    return Person.findOne({ favoriteFoods: food })
        .then(data => console.log("🔎 Trouvé par aliment :", data))
        .catch(err => console.error("❌ Erreur :", err));
};

// 🆔 5. Trouver une personne par ID
const findPersonById = (personId) => {
    return Person.findById(personId)
        .then(data => console.log("🆔 Trouvé par ID :", data))
        .catch(err => console.error("❌ Erreur :", err));
};

// ✏️ 6. Modifier : Ajouter "hamburger" à favoriteFoods, puis sauvegarder
const updateFavoriteFoods = (personId) => {
    return Person.findById(personId)
        .then(person => {
            person.favoriteFoods.push('hamburger');
            return person.save();
        })
        .then(updated => console.log("🍔 Favoris mis à jour :", updated))
        .catch(err => console.error("❌ Erreur :", err));
};

// 🔄 7. Modifier l'âge via findOneAndUpdate
const updateAgeByName = (personName) => {
    return Person.findOneAndUpdate({ name: personName }, { age: 20 }, { new: true })
        .then(data => console.log("🧓 Âge mis à jour :", data))
        .catch(err => console.error("❌ Erreur :", err));
};

// ❌ 8. Supprimer par ID
const deletePersonById = (personId) => {
    return Person.findByIdAndRemove(personId)
        .then(data => console.log("🗑️ Supprimé :", data))
        .catch(err => console.error("❌ Erreur :", err));
};

// ❌ 9. Supprimer tous les "Mary"
const deleteManyMary = () => {
    return Person.deleteMany({ name: 'Mary' })
        .then(result => console.log("🧹 Supprimés (Mary) :", result))
        .catch(err => console.error("❌ Erreur :", err));
};

// 🔗 10. Requête avec tri, limite, et sélection
const searchBurritoLovers = () => {
    return Person.find({ favoriteFoods: 'burritos' })
        .sort({ name: 1 }) // Trier par nom (ascendant)
        .limit(2) // Limiter à 2 résultats
        .select('-age') // Masquer l'âge
        .exec()
        .then(data => console.log("🔗 Recherche filtrée :", data))
        .catch(err => console.error("❌ Erreur :", err));
};

module.exports = {
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
};