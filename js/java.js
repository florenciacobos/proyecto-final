
const Entradas = [  //array de objetos
    {
        id: 1,
        artista: "Taylor Swift",
        precio: 35000,
        fecha: "OCTUBRE 13 2024",
    },
    {
        id: 2,
        artista: "Arctic Monkeys",
        precio: 25000,
        fecha: "SEPTIEMBRE 7 2024",
    },
    {
        id: 3,
        artista: "5SOS",
        precio: 10000,
        fecha: "JULIO 30 2025",
    },
]

class Carrito {
    constructor() {
        this.entradas = [];
    }

    agregarEntrada(id) {
        let entrada = Entradas.find(ent => ent.id === id);
        console.log(entrada);

        if (entrada) {
            this.entradas.push(entrada);
            console.log("Se añadió al carrito la entrada con #" + id)
        } else {
            console.log("No se encontró la entrada con #" + id + "!");
        }
    }

    precioEntradaPorCantidad(cantEntradas){
        let totalPrecio = 0
        
    }

    entradasEnCarrito() {
        let listaCarrito = "";

        this.entradas.forEach(ent => {
            listaCarrito += "■" + ent.artista + " - $" + ent.precio + " - " + ent.fecha + "\n";
        })

        return listaCarrito;
    }

    calcularTotalPagar() {
        let total = 0;

        this.productos.forEach(ent => {
           total += ent.precio;
        });

        return total;
    }
}

let nombreUsuario = prompt("Ingresá tu nombre")
let seguirComprando     //1 SI / 2 NO
let concierto
let opcionFiltro    //1 SI / 2 NO
let filtroPrecio

const carrito = new Carrito()

do {
    opcionFiltro = parseInt(prompt("¿Desea usar un filtro para el precio?\n 1) SI\n 2) NO"))
    if (opcionFiltro === 1){
        filtroPrecio = parseInt(prompt("Entradas con precio menor a $"))
        const entradasConFiltro = Entradas.filter((ent) => ent.precio < filtroPrecio)
        alert("Entradas con precio menor a $ " + filtroPrecio + "\n\n" + listaEntradasConFiltro(filtroPrecio))

    }
    concierto = parseInt(prompt("Hola, " + nombreUsuario.toUpperCase() + "\n¿A qué concierto deseas asistir? (seleccione solo una opción) \n 1) Taylor Swift \n 2) Arctic Monkeys \n 3) 5SOS"))
    
    switch (concierto) {
        case 1:
            tiempoDemora()
            precioEntrada(Entradas[concierto-1].precio)
            carrito.agregarEntrada(concierto)
            break;
        case 2:  
            tiempoDemora()
            precioEntrada(Entradas[concierto-1].precio)
            carrito.agregarEntrada(concierto)
            break;
        case 3:  
            tiempoDemora()
            precioEntrada(Entradas[concierto-1].precio)
            carrito.agregarEntrada(concierto)
            break;
        default: 
            alert("La opción ingresada es incorrecta. Intentelo nuevamente")
            break;
    }

    seguirComprando = prompt("¿Quiere seguir comprando? \n 1) SI \n 2) NO")
    if (seguirComprando == 2) {
        alert("Muchas gracias por su compra. Disfrute del concierto")
    }
    else if (seguirComprando != 1 && seguirComprando != 2){
        do {
            alert("La opción ingresada es incorrecta. Intentelo nuevamente")
            seguirComprando = prompt("¿Quiere seguir comprando? \n 1) SI \n 2) NO")
        } while (seguirComprando != 1 && seguirComprando != 2);
    }
} while (seguirComprando == 1);

let entradasCarrito = "Detalle:\n" + carrito.entradasEnCarrito();
alert(entradasCarrito)


//FUNCIONES

function minutosAleatoriosEspera() {
    let minutoAleatorio = Math.random()
    minutoAleatorio = Math.round(minutoAleatorio * 19 + 1)  //numeros aleatorios del 1 al 20
    return minutoAleatorio
}

function cantidadPersonasEnFila() {
    let cantidadPersonasAleatorio = Math.random()
    cantidadPersonasAleatorio = Math.round(cantidadPersonasAleatorio * 49 + 1)
    return cantidadPersonasAleatorio
}

function tiempoDemora() {
    let demora = this.minutosAleatoriosEspera() * this.cantidadPersonasEnFila()
    alert("Estas en la fila \n El tiempo de demora aproximado es de " + demora + " minutos")
}

function precioEntrada(precio) {
    alert("Es tu turno de comprar")
    let cantidad = parseInt(prompt("¿Cuantas entradas querés comprar?"))
    let precioTotal = cantidad * precio
    alert("Monto a pagar: $" + precioTotal)
}

function listaEntradasConFiltro(filtroPrecio){
    let lista = ""
    Entradas.forEach(ent => {
        if(ent.precio < filtroPrecio){
            lista += "■ " + ent.artista + " - $" + ent.precio + " - " + ent.fecha + "\n";
        }
    })
    if (lista == ""){
        lista = "\nNo hay entradas con precio menor a $" + filtroPrecio
    }
    return lista;
}
