const productos = [
    {
        nombre: 'Kawasaki H2R',
        descripcion: 'Moto deportiva de alto rendimiento con motor sobrealimentado.',
        precio: 1445890.00,
        imagen: 'h2r.jpg'
    },
    {
        nombre: 'Honda CBR1000RR',
        descripcion: 'Moto deportiva con motor de 1000cc, diseñada para velocidad y control.',
        precio: 400000.00,
        imagen: 'cbr1000rr.jpg'
    },
    {
        nombre: 'Yamaha R6',
        descripcion: 'Deportiva ligera y ágil, perfecta para circuitos y velocidad.',
        precio: 230000.00,
        imagen: 'r6.jpg'
    },
    {
        nombre: 'Yamaha MT-07',
        descripcion: 'Moto naked con excelente manejo y potencia para todo tipo de terreno.',
        precio: 260000,
        imagen: 'mt07.webp'
    }
];

const catalogo = document.getElementById('catalogo');

function crearTarjetaProducto(producto) {
    const card = document.createElement('div');
    card.className = 'producto-card';

    const imagen = document.createElement('img');
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;

    const titulo = document.createElement('h2');
    titulo.textContent = producto.nombre;

    const descripcion = document.createElement('p');
    descripcion.textContent = producto.descripcion;

    const precio = document.createElement('span');
    precio.className = 'precio';
    precio.textContent = `$${producto.precio.toFixed(2)}`;

    const boton = document.createElement('button');
    boton.className = 'btn-comprar';
    boton.textContent = 'Comprar';

    card.appendChild(imagen);
    card.appendChild(titulo);
    card.appendChild(descripcion);
    card.appendChild(precio);
    card.appendChild(boton);

    return card;
}

function renderizarCatalogo() {
    productos.forEach(producto => {
        const tarjeta = crearTarjetaProducto(producto);
        catalogo.appendChild(tarjeta);
    });
}

window.onload = renderizarCatalogo;
