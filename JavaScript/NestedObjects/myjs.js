const person = {
    identity: {
        firstName: 'wamique',
        lastName: 'abro',
        age: 20
    },

    location: {
        city: 'hyderabad',
        province: 'sindh',
        country: 'pakistan'
    }
};


console.log(`Hey ${person.identity.firstName} ${person.identity.lastName}. We're happy that you're ${person.identity.age} years old 
from ${person.location.city} ${person.location.province} ${person.location.country}.`)