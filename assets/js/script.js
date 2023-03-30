const calcular = () =>{
    const cantidad = document.querySelector('#cantidad').value;
    const precio = document.querySelector('#precio').innerHTML;
    const color = document.querySelector('#color').value;

    document.querySelector('#resultado_total').innerHTML = cantidad * precio;
    document.querySelector('#resultado_cantidad').innerHTML = cantidad;
    document.querySelector('#resultado_color').style.backgroundColor = color;
};

document.querySelector('#btn').addEventListener('click', calcular);