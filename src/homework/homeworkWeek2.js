let findPrime = function (...numbers) {
    let isPrime;
    for (let i = 0; i < numbers.length; i++) {
        isPrime = true;
        for (let j = 2; j < numbers[i] - 1; j++) {
            if (numbers[i] % j === 0 ) {
                isPrime = false;
           console.log(numbers[i] +" Asal sayı değildir.")
           break;
            }
            
        }
        if (isPrime === true) {
            console.log(numbers[i] + " Asaldır!");
        }
    
    }
}



findPrime(2,5,8,10,21,13);


let friendNumbers = function (num1, num2){
    let totalNum1
    let totalNum2
   for (let index = num2; index > 0; index--) {
          if (num1 % index == 0) {
            totalNum1 = totalNum1 + index;
          } 
      
   }

   for (let index = num2; index > 0; index--) {
        if (num2 % index == 0) {
          totalNum2 = totalNum2 + index;
        } 

    }

    console.log(totalNum1);
    console.log(totalNum2);
}

friendNumbers(284 ,128);

// 2- Arkadaş Sayılar
// İki sayı birbirinin kendisi hariç bölenleri toplamına eşitse bu sayılara arkadaş sayılar denir.
// 220 : 1 + 2 + 4 + 5 + 10 + 11 + 20 + 22 + 44 + 55 + 110 = 284
// 284 : 1 + 2 + 4 + 71 + 142 = 220 


const arkadasSayilarMi = (number1,number2) => {
    let toplam1 = 0
    let toplam2 = 0
    for (let i = 1; i < number1 ; i++) {
        if(number1 % i === 0){
            toplam1 += i
        }
    }
    for (let i = 1; i < number2 ; i++) {
        if(number2 % i === 0){
            toplam2 += i
        }
    }    
    if(toplam1 === number2 && toplam2 === number1){
        console.log(`${number1} ve ${number2} arkdaş sayılar`)
    }else{
        console.log(`${number1} ve ${number2} arkdaş sayılar değil`)
    }
}

arkadasSayilarMi(220,284)