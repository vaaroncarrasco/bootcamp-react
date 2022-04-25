// ? Promises
/*

JavaScript is an asynchronous programming language that runs on a single thread. This means
that a slow and time consuming process that is not processed asynchronously can block the
execution of the rest of our code.

To solve this, JavaScript introduces the event loop, or event cycle. The event loop is made
up of two main components, a message queue and a loop that iterates through this message queue.
Asynchronous programming in JavaScript works by pushing certain operations to this activity queue,
so that they don't block code execution while they finish, the job of the event loop is to ask the
activity queue operations if they have finished, and when they do. , resumes execution of that operation.

In order to work with the event loop, JavaScript introduces the concept of promises, which allow
us to define code to be executed when a task is finished.

A promise is a type of object returned by an asynchronous operation, using this object we can obtain
the final value of the asynchronous operation, or the possible errors found in its execution. This is
why we commonly say that a promise is an object that produces a value in the future.

* The promise can be at 4 different states:
    1. Pending: Async task hasnt finished yet.
    2. Fulfilled: Promise has been resolved succesfully.
    3. Rejected: Promise was not resolved.
    4. Settled: When promise has been finished succesfully or with an error.

* There are 3 methos to handle this states:
    1. .then(): Run callback when promise was fulfilled
    1. .catch(): Run callback when promise was rejected
    1. .finally(): Run callback regardless of it being rejected|fulfilled.


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


// ? Chaining promises: Avoid nesting fns inside of other fns.
// Keep promise chain at one level.

// ! DO NOT CHAIN THEM INSIDE EACH OTHER
p.then(d => {
  d.json().then(r => {
    console.log(r)
  })
});

// * CHAIN THEM FROM THE OUSTIDE/SURFACE
p.then(d => {
  d.json()
}).then(r => {
  console.log(r)
})

p.then( a => d.json() )
 .then( b => console.log(r) )
 .catch( err => console.log(err) )
 .finally( c => console.log('done: ', c) );

/*

* Note:

It is worth mentioning that when we chain promises, the next asynchronous operation is executed,
until the previous one has finished. That's why we only chain promises when one async task depends
on or needs another to finish.

If, on the other hand, you want to launch multiple asynchronous operations that don't depend on each
other, it's better to use Promise.all()

*/