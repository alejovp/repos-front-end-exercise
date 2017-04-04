const searchBox = document.getElementsByClassName('searchBox')
let errorBox = document.getElementById('errorCont')
let resultBox = document.getElementsByClassName('results')[0]
const upButton = document.getElementById('upButton')
const searchForm = searchBox[0]
let textField = searchBox[1]

searchForm.addEventListener('submit', (e) => {
  e.preventDefault()
  let username = textField.value
  let urlUserData = `https://api.github.com/users/${username}`
  let urlRepos = urlUserData + `/repos`

  // Get user info asynchronously from github api
  fetch(urlUserData)
    .then((response) => response.json())
    .then(showUserData)
    .catch(showError)

  // Get user repos asynchronously from github api
  fetch(urlRepos)
    .then((response) => response.json())
    .then(showRepos)
    .catch(showError)
})

window.onscroll = () => {
  if (document.body.scrollTop >= 130) {
    upButton.classList.remove('hidden')
  } else {
    upButton.classList.add('hidden')
  }
}

// Helper functions

function showUserData (listResults) {
  const userDataBoxes = document.getElementsByClassName('userData')
  let userPhoto = listResults.avatar_url
  let userName = listResults.name
  let userEmail = listResults.email
  let userBio = listResults.bio
  errorBox.classList.add('hidden')
  resultBox.classList.remove('hidden')
  userDataBoxes[0].src = userPhoto
  userDataBoxes[1].innerHTML = userName || 'Empty'
  userDataBoxes[2].innerHTML = userEmail || 'Empty'
  userDataBoxes[3].innerHTML = userBio || 'Empty'
}

function showRepos (reposList) {
  const reposLength = reposList.length
  const results = reposList.map((repo) =>
    `<tr class="repos">
      <td>${repo.name}</td>
      <td><i class="fa fa-code-fork" aria-hidden="true"></i> <span>${repo.forks_count}</span> <i class="fa fa-star" aria-hidden="true"></i> <span>${repo.stargazers_count}</span></td>
    </tr>` + '\n'
    ).join('')
  textField.value = ''
  errorBox.classList.add('hidden')
  resultBox.classList.remove('hidden')
  document.getElementById('reposQtty').innerHTML = reposLength
  document.getElementById('resultsList').innerHTML = results
}

function showError () {
  errorBox.classList.remove('hidden')
  resultBox.classList.add('hidden')
}
