function join(arr){
    if (arr.length === 0) {
        return " ";
    }

    let join = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        join += " " + arr[i];
    }
    
    return join;
}
let arr = ["perro", "gato", "cerdo", "cabra"]
console.log(join(arr))