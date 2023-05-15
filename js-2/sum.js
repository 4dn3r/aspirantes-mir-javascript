function sum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
    }
    return result;
}
console.log(sum([1, 2, 3])) // 1+2+3= 6
console.log(sum([10, 8, 12,5])) // 10+8+12+5= 35
console.log(sum([])) //Imprimé el númoero 0, ya que no hay ningun valor dentro del arreglo.