function getPrime(num) {
    if (num <= 1000 && num != 0 && num != 1) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                console.log(`Число ${num} - не простое`);
                break;
            } if (num % i != 0) {
                console.log(`Число ${num} - простое`);
                break;
            }
        }


    } else {
        console.log("Данные не верны")
    }

}
getPrime(5)