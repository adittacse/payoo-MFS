// login button functionality
document.getElementById("btn-login").addEventListener("click", function(event) {
    event.preventDefault();

    const mobileNumber = 12345678910;
    const pinNumber = 1234;

    const mobileNumberValue = document.getElementById("mobile-number").value;
    const mobileNumberValueConverted = parseInt(mobileNumberValue);

    const pinNumberValue = document.getElementById("pin-number").value;
    const pinNumberValueConverted = parseInt(pinNumberValue);

    if (mobileNumber === mobileNumberValueConverted && pinNumber === pinNumberValueConverted) {
        window.location.href = "./home.html";
    } else {
        alert("Invalid credentials");
    }
});