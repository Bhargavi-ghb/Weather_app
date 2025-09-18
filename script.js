function getWeather(){
    let city=document.getElementById("city")
    showWeather(city.value)
}

async function showWeather(city){
    const url = `https://open-weather13.p.rapidapi.com/city?city=${city}&lang=EN`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'dd7b1de3dcmsheeac1552928e4ccp1abf3cjsn2ad17d143cea',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
    if(!response){
        throw new Error("weather not supported");
    }
	const result = await response.json();
	getdata(result)
} catch (error) {
	console.error(error);
}
}

function getdata(result){
    let item=document.getElementById("main")
    item.innerHTML=`<p><strong>city:<strong>${result.name}</p>
    <p><strong>temperatur:<strong>${result.main.temp}</p>`
}

