const toggleSwitch = document.querySelector(".toggle-switch")

toggleSwitch.addEventListener("click", () => {
    toggleSwitch.classList.toggle("clicked");


if (toggleSwitch.classList.contains("clicked")) {
    console.log("ON");

}
else{
    console.log("OFF");
}

})

