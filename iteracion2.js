const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
	{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
	{name: 'Juan Miranda', T1: false, T2: true, T3: true},
	{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
	{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

//1.56 en el vídeo

for(let alumno of alumns){
	var numTrimApro = 0;
	let valores = Object.values(alumno);
	for(let i=1; i<valores.length; i++){
		
			if(valores[i]){
				numTrimApro++;
			}
		
	}
	if(numTrimApro>=2){
		alumno.isApproved=true;
	}else{
		alumno.isApproved=false;
	}
}
console.log(alumns);


