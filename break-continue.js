// var i = 0;
// while (i < 10){
//     console.log(i);
//     i++;
// }

//break example with while loop

// var i = 0;
// while(i<10){
//     if(i==4){
//         break;
//     }
//     i++;
//     console.log(i);
// }

//break example with for loop
// for(var i =0; i<10; i++){
//     console.log(i);
//     if(i==5){
//         break;
//     }
// }

// continue example with while loop
console.log('continue example with while loop');
var i=0;
while(i<10){
    i++ - 1;
    if(i==5){
        continue;
    }
    console.log(i);
}

// //continue example with for loop
// for(var i = 0; i<10; i++){
//     if(i == 4){
//         continue;
//     }
//     console.log(i);
// }

// var num = [54, 35, 76, 89, 120, 86, 12, 9, 23, 101];
// var i;
// // for(i = 0; i < num.length; i++){
// //     console.log(num[i]);
// //     if(num[i] > 100){
// //         break;
// //     }
// // }

// for(i = 0; i<num.length; i++){
//     if(num[i] > 80){
//         continue;
//     }
//     console.log(num[i]);
// }