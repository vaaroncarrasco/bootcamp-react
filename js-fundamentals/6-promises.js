// ? Promises
/*

JS is an async, single threaded language. This is possible thanks
to the Event Loop, which works with promises.

A promise is an object returned by an async task.

* The promise can be at 4 different states:
    1. Pending: Async task hasnt finished yet.
    2. Fulfilled: Promise has been resolved succesfully.
    3. Rejected: Promise was not resolved.
    4. Settled: When promise has been finished succesfully or with an error.
*/

let p = fetch('https://api.github.com/users/codigofacilito');

p.then(function(response){
  console.log('Promise Fulfilled');

  // we can return a promise as .json() is an async task
  return response.json();

  // And attach a .then() to the promise chain
}).then(json => console.log(json))

p.catch(function(err){
  console.log('Error: ', err.message)
  console.log(err);
})

// Regardless of being rejected or fulfilled, finally always runs
p.finally(function(d){
  console.log('Async task done.')
})