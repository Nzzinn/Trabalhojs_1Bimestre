function activeWord(element){
    const arrText = element.innerHTML.split('');
    element.innerHTML = '';
    arrText.forEach((letter, i) => {
        setTimeout(() => {
            element.innerHTML += letter;
        }, 75 * i);
    });
}

const title = document.querySelector('.typing');

activeWord(title);