var t; var b; var a; var numero; var m; var r;

function numeroAleatorio(maximo,minimo)
{
	numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo );
	return numero
}

function calcular()
{
	var opcionMaquina = numeroAleatorio(0,2);

	if(opcionMaquina == 0)
	{
		m.innerHTML = "<p>La máquina elegió a Piedra</p>";
	}
	else if(opcionMaquina == 1)
	{
		m.innerHTML = "<p>La máquina eligió Papel</p>";
	}
	else if(opcionMaquina == 2)
	{
		m.innerHTML = "<p>La máquina eligió Tijera</p>";
	}

	var dato = t.value
	//a.innerHTML = dato;

	if(dato == "tijera")
	{
		a.innerHTML = "<p>Elegiste Tijera</p>";
		if(opcionMaquina == 0)
		{
			r.innerHTML = "<p>Perdiste :(</p>";
		}
		else if(opcionMaquina == 1){
			r.innerHTML = "<p>Ganaste :)</p>";
		}
		else if(opcionMaquina == 2)
		{
			r.innerHTML = "<p>Empataste!!</p>"
		}
	}
	else if(dato == "piedra")
	{
		a.innerHTML = "<p>Elegiste Piedra</p>";
		if(opcionMaquina == 0)
		{
			r.innerHTML = "<p>Empataste!!</p>";
		}
		else if(opcionMaquina == 1){
			r.innerHTML = "<p>Perdiste :(</p>";
		}
		else if(opcionMaquina == 2)
		{
			r.innerHTML = "<p>Ganaste :)</p>"
		}
	}
	else if(dato == "papel")
	{
		a.innerHTML = "<p>Elegiste Papel</p>"
		if(opcionMaquina == 0)
		{
			r.innerHTML = "<p>Ganaste :)</p>";
		}
		else if(opcionMaquina == 1){
			r.innerHTML = "<p>Empataste!!</p>";
		}
		else if(opcionMaquina == 2)
		{
			r.innerHTML = "<p>Perdiste :(</p>"
		}
	}


}

function inicio()
{
	a = document.getElementById("agregar")
	t = document.getElementById("text");
	b = document.getElementById("boton");
	m = document.getElementById("maquina");
	r = document.getElementById("resultado");

	b.addEventListener("click", calcular);
}