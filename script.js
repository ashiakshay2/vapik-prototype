document.getElementById("vapikForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const userData = {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    sex: document.getElementById("sex").value,
    location: document.getElementById("location").value,
    email: document.getElementById("email").value
  };

  // Example answers collection
  const answers = {
    q1: document.querySelector('input[name="q1"]:checked').value
    // Add q2..q60 similarly
  };

  let scores = { vata: 0, pitta: 0, kapha: 0 };
  for (let q in answers) {
    scores[answers[q].toLowerCase()]++;
  }

  const total = scores.vata + scores.pitta + scores.kapha;
  const result = {
    vata: Math.round((scores.vata / total) * 100),
    pitta: Math.round((scores.pitta / total) * 100),
    kapha: Math.round((scores.kapha / total) * 100)
  };

  document.getElementById("result").innerHTML =
    `<h3>Results</h3>
     Vata: ${result.vata}%<br>
     Pitta: ${result.pitta}%<br>
     Kapha: ${result.kapha}%<br>
     Dominant: ${Object.keys(result).reduce((a,b)=> result[a]>result[b]?a:b)}`;
});
