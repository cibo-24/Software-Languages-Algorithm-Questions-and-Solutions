// Argüman olarak bir sayı alan bir fonksiyon oluşturun. 1'den fonksiyona aktardığınız sayıya kadar olan tüm sayıları toplayın. Örneğin, girdi 4 ise fonksiyonunuz 10 döndürmelidir çünkü 1 + 2 + 3 + 4 = 10'dur.

function addUp(num) {
    let result = 0;
	for (let i = 1; i < num.length; i++) {
        result += i;
    }
    return result;
}
addUp(10)