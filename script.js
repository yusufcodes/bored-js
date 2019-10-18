// Getting the required elements from the DOM
const textDisplay = document.querySelector('#idea-txt');
const typeDisplay = document.querySelector('#type-txt');

const findBtn = document.querySelector('#find-btn');

/* Anonymous Function assigned to the 'find-btn' element to get ideas
from the 'boredapi', convert the response from JSON to a JS Object,
then change the text display to reflect the response retrieved. */
findBtn.addEventListener('click', async function() {
    // Place the link within the fetch method
    const response = await fetch('https://www.boredapi.com/api/activity/');
    const myJson = await response.json();

    // JSON -> JSON String
    let stringJSON = JSON.stringify(myJson);

    // JSON String -> JavaScript Object
    let JSONObject = JSON.parse(stringJSON);

    textDisplay.textContent = JSONObject.activity;
    typeDisplay.textContent = JSONObject.type;
});

