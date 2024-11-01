const dummyTransactions = [
    {id: 1, name: 'Bolo de Brigadeiro', amount: -20},
    {id: 2, name: 'Salário', amount: 300},
    {id: 3, name: 'Torta de Brigadeiro', amount: -10},
    {id: 4, name: 'Violão', amount: 150}
]

//console.log(dummyTransactions)

const addTransactionsIntoDOM = transaction => {
    const operator = transaction.amount < 0 ? '-' : '+';
    const CSSClass = transaction.amount < 0 ? "minus" : "plus";
    const li = document.createElement("li");

    li.classList.add(CSSClass);
    li.innerHTML = `${transaction.name} <span> ${operator} R$ ${transaction.amount}</span>`;
    console.log(li);
    //console.log(operator);

     {
    // <li class="minus">
    //       Salário <span>-$400</span><button class="delete-btn">x</button>
    //     </li>
     }
};

console.log(dummyTransactions[0]);