// Get the current temperature and wind speed from the page
const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);

// Compute the wind chill
const windChill = computeWindChill(temp, wind);

// Update the page with the wind chill value
document.getElementById("wind-chill").textContent = `${windChill} °F`;

// Function to compute wind chill
function computeWindChill(temp, wind) {
    const windChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16));
    return windChill.toFixed(1);
}
