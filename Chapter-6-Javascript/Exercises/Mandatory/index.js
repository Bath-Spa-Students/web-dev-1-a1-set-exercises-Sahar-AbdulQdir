// Function to execute when the window is fully loaded
window.onload = () => {
    // Here I select all Input element
    const inputs = document.querySelectorAll("input");

    //Adding change event listener to each input element
    inputs.forEach(input => {
        input.addEventListener("change", calculate)
    });

    //Selecting the button element
    const button = document.querySelector(".btn");
    button.addEventListener("click", calculate);
}

//Function to calculate the total price
function calculate () {
    //Getting the input value for petrol price
    const Petrol_price = document.querySelector(".Petrol_price").value;
    //Getting the input value for number of litres
    const num_of_Litres = document.querySelector(".num_of_Litres").value;


    //Checking if either input value is empty, if so, exit the function
    if (!Petrol_price || !num_of_Litres) return;

    //Calculating the total price and displaying it
    document.querySelector(".total").innerText = Petrol_price * num_of_Litres;
     
}
