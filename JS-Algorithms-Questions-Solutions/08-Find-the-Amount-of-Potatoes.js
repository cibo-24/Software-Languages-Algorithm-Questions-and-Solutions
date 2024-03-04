// Bir dizede bulunan patates miktarını döndüren func

// ("potato") -> 1
// ("potatopotato") -> 2
// ("potatoapple") -> 1

function potatoes(str) {

    let result = str.match(/potato/g);


    return result ? result.length : 0;
}

console.log(potatoes("potato"));
console.log(potatoes("potatopotato"));
console.log(potatoes("potatoapple")); 