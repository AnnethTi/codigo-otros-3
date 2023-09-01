// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

let listaProductos = document.querySelector("#lista-de-productos") /* cambie el tipo de query selector */
const $i = document.querySelector('.input-productos');

/* creamos una funcion que desplega los productos en el DOM */
function displayProductos(productos){
  for (let i = 0; i < productos.length; i++) {
    /* cambie el nombre de las variables y el tipo a const */
    let d = document.createElement("div")
    d.classList.add("producto")
  
    const title = document.createElement("p")
    title.classList.add("titulo")
    title.textContent = productos[i].nombre
    
    const imagen = document.createElement("img");
    imagen.setAttribute('src', productos[i].img);
  
    d.appendChild(title)
    d.appendChild(imagen)
  
    listaProductos.appendChild(d)
  }
}


displayProductos(productos)
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (listaProductos.firstChild) {
    listaProductos.removeChild(listaProductos.firstChild);
  }

  const texto = $i.value.toLowerCase(); /* agregue una funcion para que el valor lo convierta a minusculas */
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );
  console.log(productosFiltrados)

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    listaProductos.appendChild(d)
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  

