const products = [
        'Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 
        'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
        let numCamisetas = 0;
        for(let producto of products){
            if(producto.includes("Camiseta")){
                numCamisetas++
            }
        }
        console.log(`Hay ${numCamisetas} artículos`);

        