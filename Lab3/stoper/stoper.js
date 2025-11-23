let start_time = 0;
let interval = null;

function startStoper(){
    if (interval) return;
    start_time = Date.now() - elapsed_time;
    interval = setInterval(update,10);
}

let elapsed_time = 0

function update(){
    elapsed_time = Date.now() - start_time;

    let total_seconds = Math.floor(elapsed_time/1000);
    let minutes = Math.floor(total_seconds/60);
    let seconds = total_seconds%60;
    
    if (minutes < 1){
        document.getElementById("display").textContent = `${seconds}s`
    }
    else{
        document.getElementById("display").textContent = `${minutes}m ${seconds}s`
    }

}

function stopStoper(){
    clearInterval(interval);
    interval = null;
}

function resetStoper() {
  stopStoper();
  elapsed_time = 0;
  document.getElementById("display").textContent = "0s";
}