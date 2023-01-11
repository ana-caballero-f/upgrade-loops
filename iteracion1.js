//TERMINADO
//Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". 
//Usa la función .includes de javascript.

const products = [
        'Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 
        'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
        let numCamisetas = 0;
        for(let producto of products){
            console.log(producto);
            if(producto.includes("Camiseta")){
                numCamisetas++
            }
        }
        console.log(`Hay ${numCamisetas} artículos`);

        