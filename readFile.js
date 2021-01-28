function read(textfile)
{
	var file = new XMLHttpRequest();
	file.open("GET", textfile, true);
	file.onreadystatechange = function()
	{
		if (file.readyState === 4){
			if (file.status === 200) {
				document.getElementById("txt").innerHTML = file.responseText;
			}
		}
	}
	file.send(null)
}