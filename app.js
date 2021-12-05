const cityInputBox = document.getElementById('cityInputBox');
const getDataBtn = document.getElementById('getDataBtn');



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
            let output = `<h2>Current Weather in ${cityName}</h2>`;
            output += `
                <div>
                    <h3>Temperature</h3>
                    <p>${jsonData.main.temp} F</p>

                </div>
                `;

            document.getElementById('output').innerHTML = output;
        })
        .catch((err) => console.log(err))

    }

getDataBtn.addEventListener('click', getInputData);

