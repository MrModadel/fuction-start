function minUser(a, b) {
   if (!b) {
      if (!a.isArray) {
         let key = Object.keys(a);
         let keyA = key[0]
         key = key[key.length - 1];
         b = a[key];
         a = a[keyA];
         let arrOne = [a, b];
         let totalOne = arrOne.reduce((a, b) => a > b ? a : b)
         console.log(totalOne);
      } else {
         b = a[a.length - 1];
         a = a[0];
         let arrTwo = [a, b];
         let totalTwo = arrTwo.reduce((a, b) => a > b ? a : b)
         console.log(totalTwo);
      }
   } else {
      if (!a.isArray && !b.isArray && typeof a !== "number" && typeof b !== "number") {
         let array = [];
         let keysA = Object.keys(a);
         let keysB = Object.keys(b);
         for (let i = 0; i <= keysA.length - 1; i++) {
            array.push(a[keysA[i]]);
            array.push(b[keysB[i]]);
         }
         let totalTre = array.reduce((a, b) => a > b ? a : b)
         console.log(totalTre);

      } else if (a.isArray && b.isArray) {
         let array = [];
         array.concat(a);
         array.concat(b);
         let totalFou = array.reduce((a, b) => a > b ? a : b);
         console.log(totalFou);
      } else {
         let array = [a, b];
         let totalFae = array.reduce((a, b) => a > b ? a : b);
         console.log(totalFae);
      }
   }
}
minUser(1, 2)
// min(1, 2)
// min([1, 2])
// min({a: 1, b: 2})
// min({a: 1, b: 2}, {a: 11, b: 12})    
let arrF = [0, 1];
let numU = +prompt('введите цифру');
for (let i = 2; i <= numU; i++) {
   arrF[i] = arrF[i - 2] + arrF[i - 1];
}
console.log(arrF);
let arrFt = [0, 1];
for (let i = 2; i <= numU; i++) {
   if (arrFt[arrFt.length - 1] <= numU) {
      arrFt[i] = arrFt[i - 2] + arrFt[i - 1];
   }
}
console.log(arrFt);
