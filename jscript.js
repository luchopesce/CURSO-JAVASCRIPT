let lista_productos = [];
class Producto{
    constructor(id, nombre, precio, stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    show_producto(){
        console.log("-------------Producto creado con exito--------------");
        console.log("El nombre del producto es: ", this.nombre);
        console.log("El precio ingresado es: ", "$", this.precio);
        console.log("La cantidad de stock ingresada es: ", this.stock);
        console.log("El id del producto generado es: ", this.id);
    }
}

// busca un producto en la class Producto, puede buscar por nombre o por id
// en caso de buscar por nombre, busca primero si ese nombre existe en el array
// en caso de existir muestra que existe y guarda la informacion que contiene ese objeto 
// luego busca una una propiedad exclusiva de ese objeto y la muestra ejemplo el "id"

function buscar_producto (arr){
    let num = prompt("Ingrese '1' para buscar por NOMBRE, ingrese '2' para buscar por ID")
    if (num == 1){ //buscar por nombre
        let val = prompt("Ingrese el nombre")
        buscar_id = arr.find(buscar => buscar.nombre === val);
        if(arr.some(buscar => buscar.nombre === val)){
            console.log("El nombre ingresado ya existe");
            console.log("El ID es: ", buscar_id.id);
        }
        else{
            console.log("El nombre ingresado no existe");
        }
    }
    else if (num == 2){ //buscar por id
        let val = prompt("Ingrese el id")
        buscar_nombre = arr.find(buscar => buscar.id === parseInt(val)); // busca si existe ese id y guarda el contenido de ese objeto
        if(arr.some(buscar => buscar.id === parseInt(val))){
            console.log("El id ingresado ya existe");
            console.log("El NOMBRE es: ", buscar_nombre.nombre);
        }
        else{
            console.log("El id ingresado no existe");
        }
    }
    else{
        return alert("El dato ingresado es invalido, solo permite '1' o '2'");
    }
}

function generar_random_id(arr){
    let random = parseInt(Math.random() * (99999 - 10000) + 10000); //genera un numero random entra 10000 y 99999 para el id del producto
    if(arr.some(buscar => buscar.id === random)){
        alert ("El ID generado ya existe");
        random = parseInt(prompt("Ingrese un ID manualmente"));
        while(arr.some(buscar => buscar.id === random || isNaN(random) == true)){
            alert ("El dato ingresado es invalido o ya existe");
            random = parseInt(prompt("Ingrese un ID usted manualmente"));
        }
        return random;
    }
    else{
        return random;
    }
}

function generar_producto(){
    let nombre_producto = prompt("Ingrese el nombre del producto:");
    let precio_producto = prompt("Ingrese el valor del producto:");
    let stock_producto = prompt("Ingrese la cantidad de stock:");
    let random_id = generar_random_id(lista_productos);
    let new_producto = new Producto(random_id, nombre_producto, precio_producto, stock_producto);
    lista_productos.push(new_producto);
    new_producto.show_producto();
}


function menu_opciones(valor){
    if (valor == 1){
        let valor_menu = prompt("Para CREAR un producto ingrese '1', para BUSCAR un producto ingrese '2', para salir ingrese '0'");
        while (valor_menu != "0"){
            if (valor_menu == 1){
                generar_producto();
            }
            else if (valor_menu == 2){
                buscar_producto(lista_productos);
            }
        break;
        }
    }
    else{
        return alert("Gracias por usar el generador de productos");
    }
}

alert("Bienvenido al menu de opciones");
let valor = prompt("Para ver el MENU DE OPCIONES ingrese '1' - Para retirarse ingrese 'SALIR'");
while (valor != "SALIR"){
    menu_opciones(valor);
}


