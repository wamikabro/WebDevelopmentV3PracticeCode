const days = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday'
]

for(let i=0; i< days.length; i++){
    console.log('day', i, 'is', days[i])
}


days.forEach(element => { // functional way
    console.log(element)
});

days.forEach(function (days){ // old functional way
    console.log(days)
})

// old way more clear
function logDays(days){
    console.log(days)
}
days.forEach(logDays)