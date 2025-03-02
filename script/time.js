
function BangladeshTime(){
    const allTime = new Date();
    const bdNewDate = allTime.toDateString();
    document.getElementById("continue-time").innerText = `
    ${bdNewDate}
    `;
}

BangladeshTime();