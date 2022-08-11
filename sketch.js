document.getElementById("search-element").oninput = (e)=>{
    e.preventDefault();
}

function google(){
    window.open("https://www.google.com/search?q="+document.getElementById("search-element").value,"_self");
}