function CPM() {
    var sex = document.querySelector('input[name="sex"]:checked').value;
    var age = document.getElementById("age").value;
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var activity = document.querySelector('input[name="activity"]:checked').value;

    if(sex == "M"){
        var ppm = 66.5 + (13.75 * weight) + (5.003 * height) - (6.75 * age);
        var cpm_result = ppm * activity;
        var result_text = "Your energy demands is equal - " + cpm_result.toFixed(2) + " kcal.";
        document.getElementById("kcal_results").innerHTML = result_text;
    }else{
        var ppm = 655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age);
        var cpm_result = ppm * activity;
        var result_text = "Your energy demands is equal - " + cpm_result.toFixed(2) + " kcal.";
        document.getElementById("kcal_results").innerHTML = result_text;
    }
}



