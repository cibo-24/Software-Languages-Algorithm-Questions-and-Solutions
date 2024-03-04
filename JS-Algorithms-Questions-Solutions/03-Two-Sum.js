// Bir dizi nums tam sayısı ve bir target tam sayısı veriliyor. Target ile toplanacak şekilde nums'ın 0 ve 1. indexleri döndürülecek. Leet Code

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++){
        for (let j= i + 1; j < nums.length; j++ ) {
            if(nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}
console.log(twoSum[2,7,11,15],9);

// nums bir dizi olduğu için içerisinde for döngüsü ile gezinerek ilk ve ikinci indexlerini eğer (if) target'a eşit ise döndürdük.