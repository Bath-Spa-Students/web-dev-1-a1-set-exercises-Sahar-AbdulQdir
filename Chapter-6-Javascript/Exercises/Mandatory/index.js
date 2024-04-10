window.onload = () => {
    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
        input.addEventListener("change", calculate)
    });

    const button = document.querySelector(".btn");
    button.addEventListener("click", calculate);
}

function calculate () {
    const Petrol_price = document.querySelector(".Petrol_price").value;
    const num_of_Litres = document.querySelector(".num_of_Litres").value;

    if (!Petrol_price || !num_of_Litres) return;

    document.querySelector(".total").innerText = Petrol_price * num_of_Litres;
     
}