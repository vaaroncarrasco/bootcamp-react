// ? Optional?.chaining

// The difference btwn the dot '.' chaining when getting properties from objects, is that we can
// ASK if the property  exists before accesing to it. If property does not exist, returns undefined.
// If property does exist, it will continue with the chaining

let usuario = { nombre: 'Uriel' };
usuario.cursos[0].title // Error
usuario.cursos?.[0]?.title // Undefined

// * We can also use it for methods
usuario.inscribir?.() // No error if fn does not exist
// if fn exists, it just runs

// ? This is useful when we expect an element to return null, not an error