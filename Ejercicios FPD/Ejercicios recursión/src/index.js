const { cons, first, rest, isEmpty, isList } = require('functional-light');


//Encontrar la longitud de una lista
/* longitud: list->number
Hallar la longitud de una lista
function longitud(list)
longitud([1,2,3,4])->4
longitud([])->0
longitud([0])->1
*/
function longitud(list) {
    if(isEmpty(list)) {
        return 0;
    } else {
        return 1 + longitud(rest(list));
    }
}

//Encuentre el mayor valor de una lista de números
/*max:number,number->number
Encuentra el mayor entre dos números 
function max(n1,n2)
max(2,3)->3
max(-2,-1)->-1
maxi(1,1)->1
*/
function max(n1,n2){
    if(n1>n2) {
        return n1;
    } else {
        return n2;
    }
}

/* maxList:list->number
Hallar el número de mayor valor de una lista de números
maxList([1,2,3])->3
maxList([-1,-2,-3])->-1
maxList([1,1])->1*/
function maxList(list) {
    if(longitud(list)==1) {
        return first(list);
    } else {
        return max(first(list),maxList(rest(list)));
    }
}

/*minList:list->number
Hallar el número de menor valor de una lista de números
function minList(list)
minList([1,2,3]->1)
minList([-7,-3,0]->-7)
minList([1,1,2,2])->1
*/
function minList(list) {
    if(longitud(list)==1) {
        return first(list);
    } else {
        return Math.min(first(list),minList(rest(list)));
    }
}

//Encuentre el promedio de los valores de la lista
/*sumatoria:list->number 
Sumar todos los elementos de una lista
function sumatoria(list)
sumatoria([1,2,3])->6
sumatoria([0,1])->1
sumatoria([1,-1])->0
*/
function sumatoria(list) {
    if(longitud(list)==1) {
        return first(list);
    }else {
        return first(list) + sumatoria(rest(list));
    }
}

/*promedio:list->number
Hallar el promedio de una lista de números
function promedio(list)
promedio([1,2,3])->2
promedio([1,2,3,4,5])->3
*/
function promedio(list) {
     return sumatoria(list) / longitud(list); 
}

//Invierta el orden de una lista

/*last:list->number
Halla el último elemento de una lista
last([1,2,3])->3
last([,5,8,1,3,0])->0
*/
function last(list) {
    if(longitud(list)==1) {
        return first(list);
    } else {
        return last(rest(list));
    }
}

/*pop:list->list
Quita el último elemento de una lista
pop([1,2,3])->[1,2]
pop([4,0,5,9,7])->[4,0,5,9,7]
*/
function pop(list) {
    if(longitud(list)==1) {
        return [];
    } else {
        return cons(first(list),pop(rest(list)));
    }
}

/*invertir:list->list
Invierte los elementos de una lista
invertir([1,2,3])->[3,2,1]
invertir([3,2,1])->[1,2,3]
*/
function invertir(list) {
    if(longitud(list)==0){
        return [];
    } else {
        return cons(last(list),invertir(pop(list)));
    }
}
;
//4. Ordene de manera ascendente una lista

/*extraer:list,number->list
Elimina el elemento x de una lista sin necesariamente mantener el orden
*/
function extraer(list,x) {
    if(last(list)==x) {
        return pop(list);
    } else {
        return cons(last(list),extraer(pop(list),x));
    }
}

/*ascender:list->list
Ordenar ascendemente una lista de números
ascender[4,3,1,2] -> [1,2,3,4]
ascender[2,1,0,3] -> [0,1,2,3]
*/
function ascender(list) {
   if(isEmpty(list)) {
        return [];
   } else {
       return cons(minList(list),ascender(extraer(list,minList(list))));
   }
}

//5.  Genere la lista de los primeros n términos de la serie de Fibonacci
/*fiboN: number->number
Dada una posición, indica el número que ocupa esa posición en la serie de Fibonacci 
fiboN(0)->0
fiboN(1)->1
fiboN(2)->1
fiboN(3)->2

*/
function fiboN(n) {
    if(n==1) {
        return 1;
    } else if(n==0) {
        return 0;
    }
    else {
        return fiboN(n-1) + fiboN(n-2);
    }
}

/*fiboReves: number->list 
Generar una lista con la cantidad de términos de la serie Fibonacci ingresados
*/
function fiboReves(n) {
    if(n==0){
        return [];
    } else {
        return cons(fiboN(n),fiboReves(n-1));
    }
}


/*fibolist:list->list
Ordena la lista de los números de la serie Fibonacci con la cantidad de términos que fueron especificados
fibolist(2)->[0,1]
fibolist(3)->[0,1,1]
fibolist(4)->[0,1,1,2]
fibolist(5)->[0,1,1,2,3]
*/
function fibolist(n) {
    return invertir(fiboReves(n));
}
console.log(fibolist(5))
//6. Dada una lista, eliminar todos los elementos que no sean números
/*recorre:list->list
Retorna true si todos los elementos de una lista son números
*/
function recorre(list) {
    if(typeof first(list)!='number') {
        return false;
    } else if(first(list)===last(list) && longitud(list)==1) {
        return true;
    }else {
        return recorre(rest(list));
    }
}

/*eliminaNoNumeros:list->list
Elimina todos los elementos de una lista que no son números
*/
function eliminaNoNumeros(list) {
    if(recorre(list) || longitud(list)==0) {
        return list;
    } else{
        if(typeof last(list)!='number') {
            return eliminaNoNumeros(pop(list));
        } else{
            return cons(last(list),eliminaNoNumeros(pop(list)));
        }
    }
}
function ordenaEliminacion(list) {
    return invertir(eliminaNoNumeros(list));
}
const numletras = ["a",1,"b",2,"c",3]

//7. Implemente una función que inserta un elemento x en la posición n de la lista, si n está entre 0 y el (longitud lista). No hace nada en caso contrario.

/*inicial:list,number->list
Coloca el número ingresado en la primera posición de la lisa*/
function inicial(list,x) {
    return cons(x,list);
}
/*mover:list,number->list
Coloca el primer elemento de la lista en la posición indicada por el segundo parámetro
*/
function mover(list,n) {
    if(n==0) {
        return list;
    } else {
        return cons(first(rest(list)),mover(cons(first(list),rest(rest(list))),n-1));
    }
}

/*insertar:list,number,number->list
Inserta un elemento x en la posición n de la lista, sólo si la posición no excede la longitud de la lista
*/
function insertar(list,x,n) {
    if(n>=0 && n<=longitud(list)) {
        return mover(inicial(list,x),n);
    }
}
console.log(insertar([11,8,3],7,1));
/*8. Dada una lista ordenada, implementar una función que retorna el índice n de dónde se encuentra
un número x dado, si existe, o -(n + 1 ), donde n es la posición en la cual se debería insertar x para
mantener la lista ordenada.*/
const orden = [1,2,3,4,5];

/*index:list,number->number
Hallar el índice de un dato en una lista
*/
function index(list,x) {
    if(first(list)==x) {
        return 0;
    } else {
        return 1 + index(rest(list),x);
    }
}

/*existsIn:list,number->
Retorna true si un número se encuentra en una lista, y false si no.
*/
function existsIn(list,x) {
    if(isEmpty(list)) {
        return false;
    } else if (first(list)==x) {
        return true;
    }else {
        return existsIn(rest(list),x);
    }
}
/*buscarLugar:list,number,number->number
Indica el índice o posición que debería tener un número si fuera a entrar en una lista ordenada
*/
function buscarLugar(list,x,i) {
    if(isEmpty(list)) {
        return i;
    } else if(x > first(list)){
        return buscarLugar(rest(list),x,i+1);
    } else {
        return i;
    }
}

/*indiceParaOrden:list,number->number
Si un número hacer parte de una lista ordenada, devuelve el el índice. Si no hace parte, devuelve el índice
que debería tener para no desordenar la lista.
*/
function indiceParaOrden(list,x) {
    if(existsIn(list,x)) {
        return index(list,x);    
    } else {
        return buscarLugar(list,x,0)
    }
}        

//9. Implemente una función que inserta datos en una lista que siempre está ordenada.
/*insertarDatoEnListaOrdenada:list,number->list
Coloca un número en la posición correcta dentro de una lista para que se mantenga el orden
*/
function insertarDatoEnListaOrdenada(list,x) {
    return insertar(list,x,buscarLugar(list,x,0));
}

//10. Implemente una función que busca un elemento en una lista desordenada.
/*buscarEnDesorden:list,number->number
Busca un elemento en una lista y devuelve su índice
*/
function buscarEnDesorden(list,x) {
    if(existsIn(list,x)) {
        return index(list,x);
    }
}
// 11. Implemente una función que elimina el elemento n de la lista
/*popN:list,number->list
Devuelve la lista ingresa sin el enésimo término
*/
function popN(list,n) {
    if(n<=longitud(list)-1){
        if(n==0) {
            return shift(list);
        } else {
            return cons(first(list),popN(rest(list),n-1))
        }
    }
    return list;
}
// Concatene dos listas
/*append:list,list->list
Concatena dos listas, en el orden en que cad auna tiene sus elementos
*/

function append(list1,list2) {
    if(isEmpty(list1)){
        return list2;
    } else {
        return cons(first(list1),append(rest(list1),list2));
    }
}

//13. Implemente una función que busca todos los números mayores que un cierto valor x. La función debe retornar una lista con los elementos encontrados
/*mayoresQue:list,number->list
Retornar una lista con los números mayores que x. Los elementos deben ser retornados en el mismo orden que tienen en la lista
*/
function mayoresQue(list,x) {
    if(isEmpty(list)){
        return [];
    } else if(x>=first(list)){
        return mayoresQue(rest(list),x);
    } else {
        return cons(first(list),mayoresQue(rest(list),x));
    }
}

//14. Implemente una función que busca todos los elementos de una lista que cumplen una cierta condición, por ejemplo, los números que sean pares. La función debe retornar una lista con los elementos encontrados
/*buscar:list,function->list
Arma una lista con todos los elementos de una lista que cumplen una condición que se indica en la función ingresada. La función debe retornarun booleano
*/
//SOLUCIONAR
function buscar(list,fx) {
    if(isEmpty(list)) {
        return [];
    } else if(fx(first(list))) {
        return cons(first(list),buscar(rest(list),fx));
    } else {
        return buscar(rest(list),fx);
    }
}
function pares(x) {
    return x % 2 ==0;
}

/*15. Implemente una función que aplica una función dada a todos los elementos de una lista(map). Por ejemplo, la función debe ser capaz de elevar todos los elementos de la lista al cuadrado. Ejemplo:
map([1,2,3,4], (x) => x*x)
*/
/*mapeo:list,function->list
Aplica una función a todos los elementos de una lista
*/
function mapeo(list,fx) {
    if(isEmpty(list)) {
        return [];
    } else {
        return cons(fx(first(list)),mapeo(rest(list),fx));
    }
}
function cuadrados(x) {
    return x*x;
}



module.exports = {longitud,maxList,minList,sumatoria,promedio,last,pop,invertir,ascender,fiboN,fibolist};