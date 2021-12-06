const cityInputBox = document.getElementById('cityInputBox');
const getDataBtn = document.getElementById('getDataBtn');
const outputDiv = document.getElementById('output');



//function getInputData will save the city name into a variable OR the URL
//Then use fetch to get api data and save this data into a variable
//Will have to parse/or stringify JSON data
//get the data I want and display that data 

function getInputData() {
    //prevent form from being submitted
    document.getElementById('InputForm').addEventListener('submit', e => {
        e.preventDefault();
    });

    let cityName = cityInputBox.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=e9a2baef6b769663a2fb475c2fec9ce2`)
        .then((response) => response.json())
        .then((data) => {
            const jsonData = data; 
            let weatherDescription = jsonData.weather[0].description;
            console.log(jsonData);
            let output = `<h2 class="animation">Current Weather in ${cityName}</h2>`;
            output += `
            <div class="animation">
                <div>
                    <h3>${weatherDescription}</h3>
                </div>
                <div>
                    <p>${jsonData.main.temp} &#8457</p>
                </div>
                <div>                    
                    <p>Feels like: ${jsonData.main.feels_like} &#8457</p>
                </div>
                <div>
                    <p>Humidity: ${jsonData.main.humidity}% </p>
                </div>
                <div>
                    <p>Wind: ${jsonData.wind.speed} mph </p>
                </div>
            </div>
                `;

            outputDiv.innerHTML = output;
  
            //Set up if statements to change the app depending on weather description.
            
            if(weatherDescription == 'mist' || weatherDescription.includes('rain')) {
                document.body.style.backgroundImage = 'url(images/rainy.jpg)';
                document.body.style.color = 'white';   
            } else if(weatherDescription == 'sunny' || weatherDescription == 'clear sky') {
                document.body.style.backgroundImage = 'url(images/sunnybg.jpg)';
            } else if(weatherDescription.includes('cloud')) {
                document.body.style.backgroundImage = 'url(images/cloudybg.jpg)';
            }
    
        })
        .catch((err) => console.log(err))

    }

getDataBtn.addEventListener('click', getInputData);

