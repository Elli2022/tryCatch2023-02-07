const val = 3;
// val=5;

try {
    val = 5;
}

catch (error) {
    console.log(error);
}

console.log("logga detta");

//_____________________________Async function exempel med Punk API__________________

async function getBeerInfo() {

    const url = `https://api.punkapi.com/v2/beers/random`;

    try {
        const response = await fetch(url);
        console.log(response);
        if(response.ok){
            const [beerObj] = await response.json();
            console.log(beerObj);
            // return beerObj;
        }
        else{
            throw 'Anropet misslyckades!';
        }
      
    }
    catch (error) {
        console.log(error);
    }


}

getBeerInfo();