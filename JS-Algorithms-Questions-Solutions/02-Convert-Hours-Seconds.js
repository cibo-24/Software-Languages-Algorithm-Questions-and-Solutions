// Saatleri saniyelere dönüştüren func
// 1 saatte 60 dakika, 1 dakika da 60 saniye var ise,

function howManySeconds (hours) {
    const second = hours * 60;
    const minute = second * 60;
    return minute;
}

howManySeconds(2);

// Saati dakikaya, dakikayı saniyeye çevirdik..