//* Giphy API cat gifs based on a one word "mood" typed into a form, using only get request


//const url = 'api.giphy.com/v1/gifs/search' // this is the basic endpoint for searching, instead of random, may need more specific info
const url = 'https://api.giphy.com/v1/gifs/random';
const key = 'bSOtb0Zx6WXd32I0zEIUc0uv41tKAYmG';

const button = document.querySelector("cat me");
//button.addEventListener("click",(getImage));

/*
let image = document.getElementById('image')
let img = document.createElement('img');
    img.src = 
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

//*FETCH

fetch(url+'?api_key='+ key + '&limit=20')
.then(function(result) {
    console.log(result)
    return result.json();
}).then(function(json) {
    console.log(json);
}).catch(function(err){
    console.log(err);
})


function fetchResults(e) {
    fetch(url).then(function(result) {
        return result.json();
    }).then(function(json) {
        displayResults(json);  
    });
}

/*function displayResults(json) {
    console.log(json.url);
    let imgUrl = json.url;
    image.src = imgUrl;
};

*/

//do I need a for loop to search out cat in the standard 25 results returned for the one word(mood)query put through the form?

// will need event listener for click on button to send mood search word to the api end point to get results

//


