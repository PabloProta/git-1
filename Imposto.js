





console.log('calculando Imposto');

const mes = 12, capital =  500;
const  juros = 0.08;
let totalJuros = 0;

function calculaJuros()
{
 let montante = capital, i = 1;
 console.log(`capital investido ${capital}`);
    while(i <= mes)
    {
        totalJuros =(Math.pow((juros + 1),i));
        montante = (capital * totalJuros);
        console.log(`mes ${i} montante: ${montante.toFixed(2)}`);
        i++;
    }
    

}

calculaJuros();