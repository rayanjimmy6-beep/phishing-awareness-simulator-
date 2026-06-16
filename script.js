let clicks = localStorage.getItem("phishingClicks") || 0;

document.getElementById("clickCounter").textContent = clicks;

function showAwareness() {

    document
        .getElementById("awareness")
        .classList
        .remove("hidden");

    clicks++;

    localStorage.setItem(
        "phishingClicks",
        clicks
    );

    document.getElementById(
        "clickCounter"
    ).textContent = clicks;
}

function calculateScore() {

    let score = 0;

    const q1 =
        document.querySelector(
            'input[name="q1"]:checked'
        );

    const q2 =
        document.querySelector(
            'input[name="q2"]:checked'
        );

    const q3 =
        document.querySelector(
            'input[name="q3"]:checked'
        );

    if (q1) score += Number(q1.value);
    if (q2) score += Number(q2.value);
    if (q3) score += Number(q3.value);

    document.getElementById("score").innerHTML =
        `Score: ${score}/3`;

    if (score === 3) {
        document.getElementById("score").innerHTML +=
            "<br>Excellent! You can identify phishing attempts.";
    } else {
        document.getElementById("score").innerHTML +=
            "<br>Review phishing awareness training again.";
    }
}
