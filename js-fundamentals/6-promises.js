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