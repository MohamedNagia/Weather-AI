
let searchInput=document.querySelector("#search")
let searchBtn=document.querySelector(".find")

weather=[]

async function getapi(type='cairo') {

  try {
    
        let myreq = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=0dbeedfaeb5d4641926232151252406&q=${type}&days=3`)
    let mydata = await myreq.json()
    console.log(mydata);
    
    weather = mydata.forecast.forecastday
    city=mydata.location.name



display()
  } catch (error) {
    document.querySelector(".row").innerHTML=`<div class=" text-center"> 
  <h1 class="alert alert-danger">${error}</h1>
</div>`
  }

 


}

getapi()


function display(){


temp=''

for(var i=0;i<weather.length;i++){

let date=new Date(weather[i].date)
console.log(date);

let day=date.toLocaleString("en-us",{weekday:"long"})
let month=date.toLocaleString("en-us",{month:"long"})
let dayofmonth=date.getDate()


console.log(dayofmonth);



temp+=`

   <div class="col-md-4 ">
<div class="item text-center w-100  bg-danger">
<div class=" d-flex   justify-content-between p-2">

<h3 class="text-white  h5">${day}</h3>
<h3 class="text-white  h5">${dayofmonth} ${month}</h3>

</div>
<p class="">${city}</p>
<h2>${weather[i].day.maxtemp_c}oC</h2>
<img src="http:${weather[i].day.condition.icon}" class="w-25" alt="">
<span>${weather[i].day.condition.text}</span>
<div class="icon text-start m-3 d-flex justify-content-around">
<p><img src="image/weather/snow (1).png" alt=""> 30%</p>
<p><img src="image/weather/snow (2).png" alt=""> 30%</p>
<p><img src="image/weather/snow (3).png" alt=""> 30%</p>

</div>
</div> 
</div> 

`


}
document.querySelector("#display").innerHTML=temp


}


searchBtn.addEventListener("click",function(){
  
  getapi(searchInput.value)

})
searchInput.addEventListener("blur",function(){
  
  getapi(searchInput.value)

})




