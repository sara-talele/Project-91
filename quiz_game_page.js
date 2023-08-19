p1 = localStorage.getItem("player1_name");
p2 = localStorage.getItem("player2_name");
ps1 = 0;
ps2 = 0;
console.log(p1);
console.log(p2);

document.getElementById("player1_name").innerHTML = p1 + " : ";
document.getElementById("player2_name").innerHTML = p2 + " : ";

document.getElementById("player1_score").innerHTML = ps1;
document.getElementById("player2_score").innerHTML = ps2;

document.getElementById("player_question").innerHTML = "question turn - " + p1;
document.getElementById("player_answer").innerHTML = "answer turn - " + p2;

function send() {
    number1 = document.getElementById("n1").value;
    number2 = document.getElementById("n2").value;

    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;

    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
}