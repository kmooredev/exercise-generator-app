document.querySelector('button').addEventListener('click', getExercise)

function getExercise() {
  let user = document.querySelector('input').value.toLowerCase()
  if (user === 'biceps') {
    user = 1;
  } else if (user === 'shoulders') {
    user = 2;
  } else if (user === 'serratus anterior') {
    user = 3;
  } else if (user === 'chest') {
    user = 4;
  } else if (user === 'triceps') {
    user = 5;
  } else if (user === 'abs') {
    user = 6;
  } else if (user === 'calves') {
    user = 7;
  } else if (user === 'glutes') {
    user = 8;
  } else if (user === 'traps') {
    user = 9;
  } else if (user === 'quads') {
    user = 10;
  }
  fetch(`https://wger.de/api/v2/exercise/?language=2&muscles=${user}`)
  .then(res => res.json()) //parse response as JSON
  .then(data => {
    let index = Math.floor(Math.random() * data.results.length)
    console.log(data.results[index])
    document.querySelector('h2').innerHTML = data.results[index].name
    document.querySelector('h3').innerHTML = data.results[index].description
  })
}
