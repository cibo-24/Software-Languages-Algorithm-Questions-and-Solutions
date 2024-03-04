// Bir karakter dizisi alan ve en kısadan uzuna doğru sıralanmış bir dizi döndüren işlev oluşturun.

// sortByLength -> Google, Apple, Microsoft = Apple, Google, Microsoft

function sortByLength(arr) {
	return arr.sort((a,b) => a.length - b.length);
}

sortByLength(["Google", "Apple", "Microsoft", "Xiaomi", "Sony"]);