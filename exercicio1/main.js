function runForm(hungry, msg){
    const food = document.getElementById('food').value;
    const range = Number(document.getElementById('size').value);
    const order = document.getElementById('order');

    if(range === 0){
        hungry = 'Não estou com tanta fome 😄.'
    }

    if(range === 1){
        hungry = 'É estou com um pouco de fome 😐.'
    }

    if(range === 2){
        hungry = 'Eu to MORRENDO de fomeeeeeee 🤬.'
    }
   
    if(document.getElementById('coca').checked){
        document.body.style.backgroundColor = 'red';
        msg = document.getElementById('coca').value
    }
    if(document.getElementById('sprite').checked){
        document.body.style.backgroundColor = 'greenyellow';
        msg = document.getElementById('sprite').value;
    }
    if(document.getElementById('fanta').checked){
        document.body.style.backgroundColor = 'orange';
        msg = document.getElementById('fanta').value;
    }
    if(document.getElementById('pepsi').checked){
        document.body.style.backgroundColor = 'blue';
        msg = document.getElementById('pepsi').value;
    }
    if(document.getElementById('guarana').checked){
        document.body.style.backgroundColor = 'darkgreen';
        msg = document.getElementById('guarana').value;
    }

    order.innerHTML = `<p>Detalhes do pedido: Para comer você pediu - ${food}.</p> <p>Como você disse este é o seu nível de fome: ${hungry}</p> <p>Para beber você pediu: ${msg}.</p>`;
}
