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
    let num = prompt("Ingrese '1' para buscar por NOMBRE \nIngrese '2' para buscar por ID")
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

//guarda en la variable length la cantidad de digitos de un entero
function validate (num){
    var length = ~~(Math.log(num) / Math.LN10 + 1); 
    return length;
}

function generar_random_id(arr){
    let random = parseInt(Math.random() * (99999 - 10000) + 10000); //genera un numero random entra 10000 y 99999 para el id del producto
    if(arr.some(buscar => buscar.id === random)){
        while(arr.some(buscar => buscar.id === random) || isNaN(random) == true || validate(random) != 5){
            alert ("El ID ya existe, tenes que generar uno manualmente \nTiene que ser de 5 cifras");
            random = prompt("Ingrese un ID usted manualmente \nPara volver al menu ingrese 'VOLVER'");
            a = random;
            random = parseInt(random);
            if(a == "VOLVER") return;
        }
    return random;
    }
    else{
        return random;
    }
}

function generar_producto(){
    let nombre_producto = prompt("Ingrese el nombre del producto:");
    while(nombre_producto == ""){
        alert("Debes ingresar algun dato \nPara volver al menu ingrese 'VOLVER'");
        nombre_producto = prompt("Ingrese el nombre del producto:");
        if(nombre_producto == "VOLVER") return;
    }
    let precio_producto = parseFloat(prompt("Ingrese el valor del producto:"));
    while(isNaN(precio_producto) == true || precio_producto == ""){
        alert("Debes ingresar solo numeros \nPara volver al menu ingrese 'VOLVER'");
        precio_producto = prompt("Ingrese el valor del producto:");
        a = precio_producto;
        precio_producto = parseFloat(precio_producto);
        if(a == "VOLVER") return;
    }
    let stock_producto = parseInt(prompt("Ingrese la cantidad de stock:"));
    while(isNaN(stock_producto) == true || stock_producto == ""){
        alert("Debes ingresar solo numeros \nPara volver al menu ingrese 'VOLVER'");
        stock_producto = prompt("Ingrese el valor del producto:");
        a = stock_producto;
        stock_producto = parseInt(stock_producto);
        if(a == "VOLVER") return;
    }
    let random_id = generar_random_id(lista_productos);
    if(random_id == undefined) return;
    let new_producto = new Producto(random_id, nombre_producto, precio_producto, stock_producto);
    let newLocal = ['Los datos ingresados para el nuevo producto es: \n', 'ID: ', random_id, '\n', 'Nombre del producto: ', nombre_producto, '\n', 'Precio del producto: ', precio_producto, '\n', 'Stock del producto: ', stock_producto];
    if (confirm(newLocal.join(''))){
        lista_productos.push(new_producto);
        new_producto.show_producto();
    }
    else{
        return;
    }
}


function menu_opciones(valor){
    while(valor != 0){
        valor = prompt("Para generar un producto ingrese '1'  \nPara buscar un producto ingrese '2'  \nPara salir del menu ingrese '0'");
        if(valor == 1){
            generar_producto();
        }
        else if(valor == 2){
            if(lista_productos == ""){
                alert("Todavia no existe ningun producto");
                continue;
            }
            else{
                buscar_producto(lista_productos);
            }
        }
        else if(valor == 0) break;
        else{
            continue;
        }
    }
}

let ingresar_valor = prompt("Para ver el menu ingrese '1'");
    if (ingresar_valor == 1){
        menu_opciones(ingresar_valor);
    }


