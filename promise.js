//Ex - 1

const http = require('http');

function fetchWebPage(url){
    return new Promise((resolve, reject) => {
        http.get((url, response => {
            let responseData;
            response.on('data', data => responseData = responseData+data);
            response.on('end', () => resolve(responseData));
            response.on('error', reject);
        }));
    });
}

fetchWebPage('https://www.ahamedsafnaj.com')
.then(data => console.log(data.length))
.catch(error => console.log(error))
.finally(() => console.log("finished"))


//Ex - 2

renderWebPage();
function renderWebPage(){
    let response = '';
    response = fetchWebPage('https://www.ahamedsafnaj.com');
    console.log("Ex 2 " + response.length); //Undefined -> Bcz its not wait till the response completed
}


//EX - 3

renderWebPageAsync();
async function renderWebPageAsync(){
    let response = '';
    response = await fetchWebPage('https://www.ahamedsafnaj.com');
    console.log("Ex 3 " + response.length);
}