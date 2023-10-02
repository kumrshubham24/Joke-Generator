const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");
const apikey = "UK+l9mSev3SJA8UUghiXdQ==xVf9qtL88wJvw7zZ";
const options = {
    method: "GET",
    headers: {
        "X-Api-key": apikey,
    },

};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getjoke() {
    try {
        jokeEl.innertText = "updating....";
    btnEl.disabled = true;
    btnEl.innerText = "loading..."
    

    const response = await fetch(apiURL, options);
    const data = await response.json();
    btnEl.disabled = false;
    btnEl.innerText= "Tell me a Joke"
    jokeEl.innerText = data[0].joke;

        
    } catch (error) {
        jokeEl.innerText="error:Try again"
        console.log(error);
        
    }
    
   
}


btnEl.addEventListener("click", getjoke);