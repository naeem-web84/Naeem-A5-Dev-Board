
const mainBody = document.getElementById("bg-change-body");

const bgBtn = document.getElementById("change-bg");

const colors = ["#FFDDC1", "#ADD8E6", "#90EE90", "#FFFF99", "#FFB6C1", "#D8BFD8", "#D3D3D3"];

let index = 0;

bgBtn.addEventListener("click", function(){
    mainBody.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
})