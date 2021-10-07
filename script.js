//* Giphy API cat gifs based on a one word "mood" typed into a form, using only get request


//const url = 'api.giphy.com/v1/gifs/search' // this is the basic endpoint for searching, instead of random, may need more specific info
const url = 'https://api.giphy.com/v1/gifs/random';
const key = 'bSOtb0Zx6WXd32I0zEIUc0uv41tKAYmG';
let url;
/*
$.get({ 
url: "https://api.giphy.com/v1/gifs/search?= cat+form.data&api_key=bSOtb0Zx6WXd32I0zEIUc0uv41tKAYmG=pg ",// can we tie form.data to the results?

success: function(result) {
    console.log(result)
},
error: function(error) {
    console.log(error);
}
});
*/


fetch(url)
.then(function(result) {
    console.log(result)
    return result.json();
}).then(function(json) {
    console.log(json);
});


//do I need a for loop to search out cat in the standard 25 results returned for the one word(mood)query put through the form?

// will need event listener for click on button to send mood search word to the api end point to get results

//


