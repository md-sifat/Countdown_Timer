const endDate = "21 February 2023 11:57 PM";

document.getElementById("endDate").innerHTML = endDate;
const inputs =  document.querySelectorAll("input");
const clock = () =>{
    const end = new Date(endDate);
    const start = new Date();
    const diff = (end - start) /1000;

    const days =Math.floor(diff/3600/24);
    const hour =Math.floor((diff/3600)%24);
    const min =Math.floor((diff/60)%60);
    const sec =Math.floor(diff%60);

    inputs[0].value = days;
    inputs[1].value = hour;
    inputs[2].value = min;
    inputs[3].value = sec;

}


setInterval(
    () => {
        clock();
    },
    1000
)
clock();