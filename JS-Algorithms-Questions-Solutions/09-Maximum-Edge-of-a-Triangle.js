// Kenar uzunluklarının tümü tam sayı olan bir üçgenin üçüncü kenarının maksimum aralığını bulan bir fonksiyon oluşturun.

// nextEdge (8,10) -> 17
// nextEdge (5,7) -> 11

function nextEdge(side1, side2) {
    let result = side1 + side2;
    let decrement = result -1;
    return decrement;
}

nextEdge(4,4);