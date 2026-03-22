function calculateResult() {
    const form = document.getElementById('quiz-form');
    const resultArea = document.getElementById('result-area');
    const formData = new FormData(form);
    let score = 0;
    let answeredQuestions = 0;

    for (let value of formData.values()) {
        score += parseInt(value);
        answeredQuestions++;
    }

    if (answeredQuestions < 5) {
        alert("Πρέπει να απαντήσεις σε όλα για να κριθείς!");
        return;
    }

    if (score >= 40) {
        resultArea.innerHTML = `
            <div class="success">
                <h2>ΣΥΓΧΑΡΗΤΗΡΙΑ!</h2>
                <p>Πέρασες το τεστ. Έχεις το mindset των <strong>ΕΠΙΚΙΝΔΥΝΩΝ</strong>. Καλωσόρισες στην οικογένεια.</p>
            </div>
        `;
    } else {
        resultArea.innerHTML = `
            <div class="failure">
                <h2>ΑΠΟΡΡΙΨΗ</h2>
                <p>Δυστυχώς δεν μπορείς να γίνεις μέλος των <strong>ΕΠΙΚΙΝΔΥΝΩΝ</strong>. Ψάχνουμε άτομα για μια ζωή, όχι για ένα run.</p>
            </div>
        `;
    }
}