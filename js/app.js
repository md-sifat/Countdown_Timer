const endDate = "21 February 2023 10:00 PM";

document.getElementById("endDate").innerHTML = endDate;
const clock = () =>{
    const end = new Date(endDate);
    const start = new Date();
    const diff = (end - start) / 1000;
    console.log(diff);
}

clock();