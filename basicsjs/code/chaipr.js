const store = document.querySelectorAll('.button');
const body = document.querySelector('body');

store.forEach( function(button) {
    console.log(button);
    button.addEventListener('click', function (e){
        console.log(e);
        console.log(e.target);

        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        } 
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = yellow;
        }
        // else{
        //     body.style.backgroundColor = 'white';
        // }
    });

});
// const buttons = document.querySelectorAll('.button');
// const body = document.body;

// buttons.forEach((button) => {
//   button.addEventListener('click', (e) => {
//     const color = e.target.id;
//     body.style.backgroundColor = color;
//   });
// });
