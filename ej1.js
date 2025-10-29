function doblarNumeros(arr){
    for(i=0;i<arr.length;i++) arr[i] = arr[i] * 2;
    return arr;
}
//Ejecucion del codigo
let arreglo = [1,2,3,4,5];
alert(`el arreglo [${arreglo}] con la funcion doblarNumeros ahora es [${doblarNumeros(arreglo)}]`);
