function odliczanie()
{
	var dzisiaj = new Date();

	var dzien = dzisiaj.getDate();
	var miesiac = dzisiaj.getMonth()+1;
	var rok = dzisiaj.getFullYear();

	var godzina = dzisiaj.getHours();
	if (godzina<10) godzina = "0" + godzina;
	var minuta = dzisiaj.getMinutes();
	if (minuta<10) minuta = "0" + minuta;
	var sekunda = dzisiaj.getSeconds();
	if (sekunda<10) sekunda = "0" + sekunda;
	
	document.getElementById("clock").innerHTML = godzina + ":" + minuta + ":" + sekunda;
	document.getElementById("date").innerHTML = dzien + "/" + miesiac + "/" + rok;
<!-- znajdz element o nazwie zegar. musi być po divie z nazwą zegar. innerHTML - podmienia zawartość diva na to, co jest po znaku = -->

	setTimeout("odliczanie()", 1000);<!-- funkcja setTimeout wywołuje funkcje odliczanie co 1000 ms -->
}