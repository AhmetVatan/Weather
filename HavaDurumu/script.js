const url ='https://api.openweathermap.org/data/2.5/';
const key = 'c48f89fa33438d099bfa9d0237aad98d';

let city = document.querySelector(".city");
let temp = document.querySelector(".temp");
let minmax = document.querySelector(".minmax");
let desc = document.querySelector(".desc");

const setQuery = (e) =>{
    if(e.keyCode =='13'){
        // 13 = enter
    // let city = document.querySelector(".city");
    // let temp = document.querySelector(".temp");
    // let minmax = document.querySelector(".minmax");
    // let desc = document.querySelector(".desc");

    let contentDegerleri = [city,temp,minmax,desc];

    contentDegerleri.forEach((item) =>{
        item.style.visibility ="visible";
    })

    
        getResult(searchBar.value)
        searchBar.value="";
    }
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
   
    
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)

    

    
    
}

const displayResult= (result) =>{
    // let city = document.querySelector(".city");
    let uyari =document.querySelector(".uyari");
    if(!result.name==searchBar.value){
        city.innerText = `${result.name}, ${result.sys.country}`
   

        // let temp = document.querySelector(".temp");
        temp.innerText = `${Math.round(result.main.temp)}°C`
    
        // let desc = document.querySelector(".desc");
        desc.innerText = result.weather[0].description.toUpperCase();
    
        // let minmax = document.querySelector(".minmax");
        minmax.innerText = `En Düşük Sıcaklık: ${Math.round(result.main.temp_min)}°C - En Yüksek Sıcaklık: ${Math.round(result.main.temp_max)}°C`;
    }
    else{
        alert("Girdiğiniz şehir bulunamadı. Lütfen tekrar deneyiniz.");
    }
   
   
    
}

const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keypress",setQuery);