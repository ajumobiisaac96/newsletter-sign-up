


function subscribe() {
    var inputValue = document.getElementById("input-error").value;
    var errorMessage = document.getElementById("error-message");
    var inputError = document.getElementById("input-error");
    var thankYou = document.querySelector(".thank-you");
    var newsletterBackground = document.querySelector("newsletter-background");

    if (!inputValue.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        errorMessage.style.display = 'flex';
        inputError.style.border = '2px solid red';
        inputError.style.backgroundColor = 'rgb(255, 171, 171)';
        inputError.style.color = 'red';
    } else {
        thankYou.style.display = 'block';
        newsletterBackground.style.display = 'none';
    }
}


function dismissMessage(){
    newsletterBackground.style.display = 'flex';
    thankYou.style.display = 'none';
}


