function lastModified(){
    var date = document.getElementById("last_modified_c")
    if (Date.parse(document.lastModified) != 0)
    var newdate = "Last modified: "+ document.lastModified;
    date.innerHTML = newdate;
}
window.onload = lastModified;