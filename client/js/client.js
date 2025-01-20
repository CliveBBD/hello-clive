const { getData } = require("../../services/");

const onButtonClick = () => {

    let name = "";

    const button = document.querySelector(".btn");
    button.addEventListener("click", async () => {
        name = await getData();
    })
}