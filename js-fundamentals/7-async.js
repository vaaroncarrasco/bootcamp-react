// ? Async/Await
/*

Any async fn starts out with the async keyword. It uses the await kw when the line will run an async task
and will be returning a promise

*/

// Using Async/Await
async function readRepo(){
  let data = await fetch("https://api.github.com/vaaroncarrasco");
}

// Is the same as using...
function readRepo(){
  fetch("https://api.github.com/vaaroncarrasco").then(data => {});
}

// It's just syntax sugar that allows us to write async code as if it was sync code.
// without dealing with promise chain

// Ex.
async function getGithubUser(username){
  let data = await fetch(`https://api.github.com/${username}`);
  let jsonData = await data.json();
  console.log(jsonData)
}

// Any async fn returns implicit|explicitly a promise{}. Even if we return a primitive|object,
// it will wrap it inside a promise. This allows you to await for the data.

// Ex.
async function getGithubUser(username){
  let data = await fetch(`https://api.github.com/${username}`);
  let jsonData = await data.json();
  
  return jsonData;
}

// Async errors are handled thru try&catch blocks:

async function getGithubUser(username){
  try{
    let data = await fetch(`https://api.github.com/${username}`);
    let jsonData = await data.json();
    console.log(jsonData);  
  } catch (err) {
    console.log(err);
  }
}

// If an async fn throws an unhandled error by the try&catch block, we can catch the error from
// the outside through the promise the async fn returns.
// Ex.
async function getGithubUser(username){
  let data = await fetch(`https://api.github.com/${username}`);
  let jsonData = await data.json();
  return jsonData;
}
getGithubUser('vaaroncarrasco').catch(err => console.log(err));

