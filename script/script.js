// title
const titleOne = document.getElementById("title-1").innerText;
const titleTwo = document.getElementById("title-2").innerText;
const titleThree = document.getElementById("title-3").innerText;
const titleFour = document.getElementById("title-4").innerText;
const titleFive = document.getElementById("title-5").innerText;
const titleSix = document.getElementById("title-6").innerText;

// Button one 
const buttonOne = document.getElementById("btn-1")
buttonOne.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board Updated Successfully");

    const newTime = new Date();
    const bdTimeHistory = newTime.toLocaleTimeString();

    const navCheckOut = getInnerTextByID("nav-add-checkout");
    const updatedChecOut = navCheckOut + 1;
    setInnerText("nav-add-checkout", updatedChecOut);

    const mainTaskAssigned = getInnerTextByID("task-minus");
    const debitedTaskAssigned = mainTaskAssigned - 1;
    setInnerText("task-minus", debitedTaskAssigned);

    const historyContainer = document.getElementById("history-keeper");
    const div = document.createElement("div");

    div.innerHTML = `
    You have completed task ${titleOne} at ${bdTimeHistory}
    `

    div.classList.add("mt-3", "bg-white", "rounded-xl", "p-4");
    historyContainer.appendChild(div);

    buttonOne.disabled = true;

    checkAllButtons();
})

// Button Two
const buttonTwo = document.getElementById("btn-2")
buttonTwo.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board Updated Successfully");

    const newTime = new Date();
    const bdTimeHistory = newTime.toLocaleTimeString();

    const navCheckOut = getInnerTextByID("nav-add-checkout");
    const updatedChecOut = navCheckOut + 1;
    setInnerText("nav-add-checkout", updatedChecOut);

    const mainTaskAssigned = getInnerTextByID("task-minus");
    const debitedTaskAssigned = mainTaskAssigned - 1;
    setInnerText("task-minus", debitedTaskAssigned);

    const historyContainer = document.getElementById("history-keeper");
    const div = document.createElement("div");

    div.innerHTML = `
    You have completed task ${titleTwo} at ${bdTimeHistory}
    `
    div.classList.add("mt-3", "bg-white", "rounded-xl", "p-4");
    historyContainer.appendChild(div);

    buttonTwo.disabled = true;

    checkAllButtons();
})


// Button Three
const buttonThree = document.getElementById("btn-3")
buttonThree.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board Updated Successfully");

    const newTime = new Date();
    const bdTimeHistory = newTime.toLocaleTimeString();

    const navCheckOut = getInnerTextByID("nav-add-checkout");
    const updatedChecOut = navCheckOut + 1;
    setInnerText("nav-add-checkout", updatedChecOut);

    const mainTaskAssigned = getInnerTextByID("task-minus");
    const debitedTaskAssigned = mainTaskAssigned - 1;
    setInnerText("task-minus", debitedTaskAssigned);

    const historyContainer = document.getElementById("history-keeper");
    const div = document.createElement("div");

    div.innerHTML = `
    You have completed task ${titleThree} at ${bdTimeHistory}
    `
    div.classList.add("mt-3", "bg-white", "rounded-xl", "p-4");
    historyContainer.appendChild(div);

    buttonThree.disabled = true;

    checkAllButtons();
})


//Button Four

const buttonFour = document.getElementById("btn-4")
buttonFour.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board Updated Successfully");

    const newTime = new Date();
    const bdTimeHistory = newTime.toLocaleTimeString();

    const navCheckOut = getInnerTextByID("nav-add-checkout");
    const updatedChecOut = navCheckOut + 1;
    setInnerText("nav-add-checkout", updatedChecOut);

    const mainTaskAssigned = getInnerTextByID("task-minus");
    const debitedTaskAssigned = mainTaskAssigned - 1;
    setInnerText("task-minus", debitedTaskAssigned);

    const historyContainer = document.getElementById("history-keeper");
    const div = document.createElement("div");

    div.innerHTML = `
    You have completed task ${titleFour} at ${bdTimeHistory}
    `
    div.classList.add("mt-3", "bg-white", "rounded-xl", "p-4");
    historyContainer.appendChild(div);

    buttonFour.disabled = true;

    checkAllButtons();
})


// Button Five 
const buttonFive = document.getElementById("btn-5")
buttonFive.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board Updated Successfully");

    const newTime = new Date();
    const bdTimeHistory = newTime.toLocaleTimeString();

    const navCheckOut = getInnerTextByID("nav-add-checkout");
    const updatedChecOut = navCheckOut + 1;
    setInnerText("nav-add-checkout", updatedChecOut);

    const mainTaskAssigned = getInnerTextByID("task-minus");
    const debitedTaskAssigned = mainTaskAssigned - 1;
    setInnerText("task-minus", debitedTaskAssigned);

    const historyContainer = document.getElementById("history-keeper");
    const div = document.createElement("div");

    div.innerHTML = `
    You have completed task ${titleFive} at ${bdTimeHistory}
    `
    div.classList.add("mt-3", "bg-white", "rounded-xl", "p-4");
    historyContainer.appendChild(div);

    buttonFive.disabled = true;

    checkAllButtons();
})

// Button six
const buttonSix = document.getElementById("btn-6")
buttonSix.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board Updated Successfully");

    const newTime = new Date();
    const bdTimeHistory = newTime.toLocaleTimeString();

    const navCheckOut = getInnerTextByID("nav-add-checkout");
    const updatedChecOut = navCheckOut + 1;
    setInnerText("nav-add-checkout", updatedChecOut);

    const mainTaskAssigned = getInnerTextByID("task-minus");
    const debitedTaskAssigned = mainTaskAssigned - 1;
    setInnerText("task-minus", debitedTaskAssigned);

    const historyContainer = document.getElementById("history-keeper");
    const div = document.createElement("div");

    div.innerHTML = `
    You have completed task ${titleSix} at ${bdTimeHistory}
    `
    div.classList.add("mt-3", "bg-white", "rounded-xl", "p-4");
    historyContainer.appendChild(div);

    buttonSix.disabled = true;

    checkAllButtons();
})


// Clear History

const clearButton = document.getElementById("btn-clear");

clearButton.addEventListener("click", function(){
     document.getElementById("history-keeper").innerText = "";
})