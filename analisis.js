const salariosAr = argentina.map((pers)=>{
    return pers.salary
})

const salariosArSorted = salariosAr.sort((a,b)=>{
    return a-b
})

function esPar(numerito){
    return (numerito %2===0)
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }

function medianaSalarios(lista){
    const mitad = parseInt(lista.length/2)

    if(esPar(lista.length)){
        const personitaMitad1 = lista[mitad-1]
        const personitaMitad2 = lista[mitad]

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2])
        return mediana



    }else{
        const personitaMitad = lista[mitad]
        return personitaMitad
    }
}

const medianaGeneralAr= medianaSalarios(salariosArSorted)

const spliceStart = (salariosArSorted.length * 90)/100
const spliceCount = salariosArSorted.length - spliceStart

const salariosArTop10 = salariosArSorted.splice(spliceStart,spliceCount)


console.log( medianaSalarios(salariosArSorted))

const medianaTop10Ar= medianaSalarios(salariosArTop10)