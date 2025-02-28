
// Button one 
const buttonOne = document.getElementById("btn-1")
document.getElementById("btn-1").addEventListener("click", function (event) {
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
    You have completed task Fix Mobile Button Issue at  ${bdTimeHistory}
    `

    div.classList.add("mt-3", "bg-white", "rounded-xl", "p-4");
    historyContainer.appendChild(div);

    buttonOne.disabled = true;
})

// Button Two
const buttonTwo = document.getElementById("btn-2")
document.getElementById("btn-2").addEventListener("click", function (event) {
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
    You have completed task Fix Mobile Button Issue at  ${bdTimeHistory}
    `
    div.classList.add("mt-3", "bg-white", "rounded-xl", "p-4");
    historyContainer.appendChild(div);

    buttonTwo.disabled = true;
})


// Button Three
const buttonThree = document.getElementById("btn-3")
document.getElementById("btn-3").addEventListener("click", function (event) {
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
    You have completed task Fix Mobile Button Issue at  ${bdTimeHistory}
    `
    div.classList.add("mt-3", "bg-white", "rounded-xl", "p-4");
    historyContainer.appendChild(div);

    buttonThree.disabled = true;
})


//Button Four

const buttonFour = document.getElementById("btn-4")
document.getElementById("btn-4").addEventListener("click", function (event) {
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
    You have completed task Fix Mobile Button Issue at  ${bdTimeHistory}
    `
    div.classList.add("mt-3", "bg-white", "rounded-xl", "p-4");
    historyContainer.appendChild(div);

    buttonFour.disabled = true;
})


// Button Five 
const buttonFive = document.getElementById("btn-5")
document.getElementById("btn-5").addEventListener("click", function (event) {
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
    You have completed task Fix Mobile Button Issue at  ${bdTimeHistory}
    `
    div.classList.add("mt-3", "bg-white", "rounded-xl", "p-4");
    historyContainer.appendChild(div);

    buttonFive.disabled = true;
})

// Button six
const buttonSix = document.getElementById("btn-6")
document.getElementById("btn-6").addEventListener("click", function (event) {
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
    You have completed task Fix Mobile Button Issue at  ${bdTimeHistory}
    `
    div.classList.add("mt-3", "bg-white", "rounded-xl", "p-4");
    historyContainer.appendChild(div);

    buttonSix.disabled = true;
})


// Clear History

const clearButton = document.getElementById("btn-clear");

clearButton.addEventListener("click", function(){
     document.getElementById("history-keeper").innerText = "";
})