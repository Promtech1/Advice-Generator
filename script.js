let adviceId = document.querySelector('.advice-id')
let advice = document.querySelector('.advice')
let dice = document.querySelector('.dice-main')
let errorMessage;
let errorElement;


async function getAdvice(){
    
    try {
        let timestamp = Date.now(); // Get current timestamp
        let url = `https://api.adviceslip.com/advice?timestamp=${timestamp}`; // Append timestamp as a query parameter
        let response = await fetch(url);
        let data = await response.json();

        let dataAdvice = data.slip.advice;
        let dataId = data.slip.id;

        adviceId.innerHTML = `Advice #${dataId}`;
        advice.innerHTML = `<p>${dataAdvice}</p>`;

        if(errorElement !== undefined){
            errorElement.innerHTML = "";
        }else{
            return
        }
        
        
    }catch(error) {
        errorMessage = "<h1>Something went wrong!</h1>";
        errorElement = document.getElementsByClassName('error')[0];
        errorElement.innerHTML = errorMessage;
        console.log('Check Your Internet Connection')
    }
}

getAdvice();


// Below Is the second alternative
// let adviceId = document.querySelector('.advice-id')
// let advice = document.querySelector('.advice')
// let dice = document.querySelector('.dice-main')

// async function getAdvice(){
    
//     try {
//         let response = await fetch('https://api.adviceslip.com/advice', {
//         cache: 'no-store', // Set cache control to "no-store" to disable caching
//         });
//         let data = await response.json();

//         let dataAdvice = data.slip.advice;
//         let dataId = data.slip.id;
//         adviceId.innerHTML = `Advice ${dataId}`;
//         advice.innerHTML = `<p>${dataAdvice}</p>`;
//         console.log(dataId);
//         console.log(dataAdvice);
//     } catch (error) {
//         console.log('PLEASE CHECK YOUR INTERNET CONNECTION');
//     }
    
// }

// getAdvice();