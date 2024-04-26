const days = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday'
]

console.log('length of days array is: ' + days.length)

console.log(days.join(' | ')) // show whole array joined by this
 
days.push('newday') // add new day to the array

console.log(days.join(' | '))  // show array again

days[days.length-1] = 'moonday' // replace the last occuring of array to moonday

console.log(days.join(' | ')) // show array again

days.pop() // remove the last occurance

console.log(days.join(' | ')) // show array again