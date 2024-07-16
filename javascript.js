async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '2e7f9b2a7e8344e9b50105450241507'; 
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('weatherResult').innerText = error.message;
    }
}

function displayWeather(data) {
    const weatherResult = `
        <h2>Weather in ${data.location.name}, ${data.location.country}</h2>
        <p>Temperature: ${data.current.temp_c}°C</p>
        <p>Condition: ${data.current.condition.text}</p>
    `;
    document.getElementById('weatherResult').innerHTML = weatherResult;
}
