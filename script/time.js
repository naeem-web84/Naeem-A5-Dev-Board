
function BangladeshTime(){
    const allTime = new Date();
    const bdNewDate = allTime.toDateString();
    const bdNewTime = allTime.toLocaleTimeString();
    document.getElementById("continue-time").innerText = `
    ${bdNewDate} 
    ${bdNewTime}
    `;
}

BangladeshTime();