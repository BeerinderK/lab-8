const scores = [];

let score = 0;
do{
    score = parseInt(prompt(
        "Enter a test score, or enter -1 to end scores", -1));

    if (scrore >= 0 && score <= 100) {
        scores [scores.length] = score;
    }
    else if (score != -1){
        alert("score must be between 1 and 100");
    }
}
while(score != -1);
