function writeCards(names, event){
    const messages = [];
    for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
      
    }
    return messages; 
}

function countDown(n){
    for (let i = n; i >= 0; i--){
            console.log(i)
            debugger;
    }
}

countDown(10);