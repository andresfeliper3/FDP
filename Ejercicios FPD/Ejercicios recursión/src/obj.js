const {length,maxList,minList,sumAll,average,last,pop,invert,up,down,push,nthFibo,fiboList,preserveNumbers, insert,existsIn,removeX,removeAllX,greaterThan,lowerThan,orderIndex,orderInsert,mapeo,search,removeN,append} = require('../src/index2');
const { cons, first, rest, isEmpty, isList } = require('functional-light');
const rect = {
    puntos:[{x:0,y:0},{x:1,y:0},{x:1,y:1},{x:0,y:1}],
    color:"red",
    nombre:"rectángulo"
}
console.log(rect)
/*perimetro: Object ->Number
Halla el perímetro de un rectángulo
*/
function perimeter(obj) {
    return findPerimeter(push(first(obj.puntos),obj.puntos));
}
console.log(perimeter(rect))

/*findPerimeter:Array -> Number 
Recibe un array con los puntos P1,P2,P3,P4,P1 y devuelve el perimetro
*/
 function findPerimeter(list) {
    if(length(list)<=1) {
        return 0;
    } else {
        return distance(first(list),first(rest(list))) + findPerimeter(rest(list));
    }
 }
// console.log(findPerimeter([{x:0,y:0},{x:1,y:0},{x:1,y:1}]))
 /*distance:Object,Object -> Number
 Halla la distancia entre dos puntos (objetos) usando el teorema de Pitágoras
 */
 function distance(p1,p2) {
    return pitagoras(p1.x-p2.x, p1.y-p2.y);
 }

 /*pitagoras:Number,Number-> Number
 Halla la hipotenusa dados los dos catetos
 */
 function pitagoras(a,b) {
    return Math.sqrt(square(a) + square(b));
 }

 /*square:Number->Number
 Eleva al cuadrado un número x
 */
 function square(x) {
     return x*x;
 }

 