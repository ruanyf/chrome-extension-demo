document.addEventListener('DOMContentLoaded', function(event) {
  var resultsButton = document.getElementById('getResults');
  resultsButton.onclick = getResults;
});

function getResults() {
  chrome.tabs.query(
    { active: true, currentWindow: true },
    function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: 'checkForWord' },
        function (response) {
          showResults(response.results);
        }
      );
    }
  );
}

function showResults(results) {
  var resultsElement = document.getElementById('results');
  resultsElement.innerText = results ?
    'This page uses jQuery' :
    'This page does NOT use jQuery';
}
