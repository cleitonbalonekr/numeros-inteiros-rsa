import { calculaEuclidianoEstendido } from "./euclidiano";

type Input ={
    beta:number;
    n:number
}

export function inversaModular({beta,n}:Input){
    const [mdc,a,b] =  calculaEuclidianoEstendido(n,beta)  
              
        if(mdc === 1){
            let response = b;
            while(response<0){
                response += n
            }
            return response
        }
   return 0
}
//console.log('Respose a): ', inversaModular({
    //b:4,
  //  n:4
//}) )
//3x + 2 = 0  3x = -2 x = -2/3
//console.log('Respose b): ', inversaModular({
 //   b:3,
 //   n:4
//}) )

// 2x -1 = 7 2x = 8 x =  8/2 => x = 8 * |2| 
//console.log('Respose 1 - c): ', inversaModular({
    //beta:2,
    //n:15
//}) )



//console.log('Exercicio 2. A):');
//console.table(getList(4))

//console.log('Exercicio 2. B):');
//console.table(getList(11))

//console.log('Exercicio 2. C):');
//console.table(getList(15))
//console.log('euclidiano estedido',euclidianoEstendido(2, 15));

const n = 7
const array = []
for (let index = 1; index < n; index++) {
    const element =  inversaModular({
        beta:index,
        n
    })
    array.push({
        i:index,
        b:element
    })
    
}
console.table(array)