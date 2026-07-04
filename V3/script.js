const toggleSwitch = document.querySelector(".toggle-switch")

const bodyBackground = document.querySelector("body")

toggleSwitch.addEventListener("click", () => {
    toggleSwitch.classList.toggle("clicked");


if (toggleSwitch.classList.contains("clicked")) {
    console.log("ON");
    bodyBackground.classList.add("event")

}
else{
    console.log("OFF");
    bodyBackground.classList.remove("event")
}

})

