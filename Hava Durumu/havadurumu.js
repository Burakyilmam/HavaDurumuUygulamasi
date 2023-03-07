var sehir= document.querySelector('#sehir');
var sicaklik = document.querySelector('#sicaklik');
var aciklama = document.querySelector('#aciklama');
var ikon = document.querySelector('#ikon');
var nem = document.querySelector('#nem');
var basinc = document.querySelector('#basinc');

    //let api = 'https://api.openweathermap.org/data/2.5/weather?q=eskişehir&appid=0928835605ea3e6b03f3a11f83b9d751&units=metric'; Şehir Adına Göre
    let api = 'http://api.openweathermap.org/data/2.5/group?id=323786,745042,750268,315202,311044&&appid=0928835605ea3e6b03f3a11f83b9d751&units=metric'; // Şehir ID Göre
    fetch(api).then(Response => Response.json()).then(data => 
    {

    var Ankara = data['list'][0]['name'];
    var Istanbul  = data['list'][1]['name'];
    var Bursa  = data['list'][2]['name'];
    var Eskisehir  = data['list'][3]['name'];
    var Izmir = data['list'][4]['name'];

    var Ankarasicaklik = data['list'][0]['main']['temp'];
    var Istanbulsicaklik = data['list'][1]['main']['temp'];
    var Bursasicaklik = data['list'][2]['main']['temp'];
    var Eskisehirsicaklik = data['list'][3]['main']['temp'];
    var Izmirsicaklik = data['list'][4]['main']['temp'];

    var Ankaraikon = data['list'][0]['weather'][0]['icon'];
    var Istanbulikon = data['list'][1]['weather'][0]['icon'];
    var Bursaikon = data['list'][2]['weather'][0]['icon'];
    var Eskisehirikon = data['list'][3]['weather'][0]['icon'];
    var Izmirikon = data['list'][4]['weather'][0]['icon'];

    var nemValue = data['list'][0]['main']['humidity'];
    var basincValue = data['list'][0]['main']['pressure'];
    var aciklamaValue = data['list'][0]['weather'][0]['description'];
    sicaklik.innerHTML = Math.round(Ankarasicaklik) + "°C";

    sehir.innerHTML = Ankara;
    nem.innerHTML = "Nem : %" + nemValue;
    basinc.innerHTML = "Basınç : " +  basincValue;
    aciklama.innerHTML = aciklamaValue;
    document.getElementById("kayan").innerHTML =Ankara +" "+ Math.round(Ankarasicaklik)+" °C - "+Istanbul +" "+ Math.round(Istanbulsicaklik)+" °C - "+Izmir +" "+ Math.round(Izmirsicaklik)+" °C - "+Bursa +" "+ Math.round(Bursasicaklik)+" °C - "+Eskisehir +" "+ Math.round(Eskisehirsicaklik)+" °C ";
    document.getElementById("baslik").innerHTML = Ankara + " Hava Durumu";
    //ikon.innerHTML = ikonValue;

 
    if(aciklamaValue == "broken clouds"){
        aciklama.innerHTML = "Parçalı Bulutlu";
    }
    else if(aciklamaValue == "clear sky"){
        aciklama.innerHTML = "Güneşli";
    }
    else if(aciklamaValue == "few clouds"){
        aciklama.innerHTML = "Bulutlu";
    }
    else if(aciklamaValue == "scattered clouds"){
        aciklama.innerHTML = "Dağınık Bulutlu";
    }
    else if(aciklamaValue == "shower rain"){
        aciklama.innerHTML = "Sağanak Yağışlı";
    }
    else if(aciklamaValue == "rain"){
        aciklama.innerHTML = "Yağışlı";
    }
    else if(aciklamaValue == "snow"){
        aciklama.innerHTML = "Karlı";
    }
    else if(aciklamaValue == "snow"){
        aciklama.innerHTML = "Karlı";
    }
    else if(aciklamaValue == "mist"){
        aciklama.innerHTML = "Sisli";
    }
    else if(aciklamaValue == "overcast clouds"){
        aciklama.innerHTML = "Kapalı Bulutlu";
    }
    else if(aciklamaValue == "light snow"){
        aciklama.innerHTML = "Hafif Karlı";
    }

    if(Ankaraikon == "01d"){
        document.getElementById("ikonsrc").src = "http://openweathermap.org/img/wn/01d@2x.png"; 
    }
    else if(Ankaraikon == "01n"){
        document.getElementById("ikonsrc").src = "http://openweathermap.org/img/wn/01n@2x.png"; 
    }
    else if(Ankaraikon == "02d"){
        document.getElementById("ikonsrc").src = "http://openweathermap.org/img/wn/02d@2x.png"; 
    }
    else if(Ankaraikon == "03d"){
        document.getElementById("ikonsrc").src = "http://openweathermap.org/img/wn/03d@2x.png"; 
    }
    else if(Ankaraikon == "04d"){
        document.getElementById("ikonsrc").src = "http://openweathermap.org/img/wn/04d@2x.png"; 
    }
    else if(Ankaraikon == "09d"){
        document.getElementById("ikonsrc").src = "http://openweathermap.org/img/wn/09d@2x.png"; 
    }
    else if(Ankaraikon == "10d"){
        document.getElementById("ikonsrc").src = "http://openweathermap.org/img/wn/10d@2x.png"; 
    }
    else if(Ankaraikon == "11d"){
        document.getElementById("ikonsrc").src = "http://openweathermap.org/img/wn/11d@2x.png"; 
    }
    else if(Ankaraikon == "13d"){
        document.getElementById("ikonsrc").src = "http://openweathermap.org/img/wn/13d@2x.png"; 
    }
    else if(Ankaraikon == "13n"){
        document.getElementById("ikonsrc").src = "http://openweathermap.org/img/wn/13n@2x.png"; 
    }
    else if(Ankaraikon == "50d"){
        document.getElementById("ikonsrc").src = "http://openweathermap.org/img/wn/50d@2x.png"; 
    }


    document.title = Ankara + " Hava Durumu";

    }
    )
    //fetch(api).then(Response => Response.json()).then(data => console.log(data));
