console.log('script sourced.');

function getQuotes(){
    axios.get('/quotes').then((response) => {
        console.log("success", response.data);
        let quotesFromServer = response.data
        rendertoDom(quotesFromServer)
// good indication of end of route })
}).catch((error) => {
    console.log(error);
    alert("something went wrong")
})
}



function rendertoDom(quotes){
    let outputList = document.querySelector('#output')
    outputList.innerHTML = ''

    for(let quote of quotes){
        outputList.innerHTML += `
            <p>${quote.text} - ${quote.author} </p>
        `
    }
}



function submitForm(event) {
    event.preventDefault();
    let quote = document.querySelector('#quoteInput').value
    let author = document.querySelector('#authorInput').value 
    
    let quoteToAdd = {
        text: quote,
        author: author
    }
    console.log(quoteToAdd);

    axios.post('/quotes' , quoteToAdd).then((response) => {
        console.log(response);
        document.querySelector('#quoteInput').value = ''
        document.querySelector('#authorInput').value = ''
        getQuotes()
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong')
    })

}

// .Filter

let temperatures = [-2, 5, 90, 57, 31, 32, 65]
let shoes = [
    { color: 'red', size: 8, type: 'running' },
    { color: 'gray', size: 7, type: 'sandle' },
    { color: 'yellow', size: 10, type: 'boot' },
    { color: 'green', size: 9, type: 'running' },
];

function freezingTemps(temp) {
    // only keeps temps below 32 degrees
    return temp < 32
}

let belowFreezingTemps = temperatures.filter(freezingTemps)

console.log(belowFreezingTemps);
console.log(temperatures);
// this doesn't change the value of temperatures array! 

function runningShoes(shoe) {
    return shoe.type === 'running'
}

console.log(shoes);

let runningShoeList = shoes.filter(runningShoes)

console.log(runningShoeList);

