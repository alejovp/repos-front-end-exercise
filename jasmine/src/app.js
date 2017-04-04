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
  const results = reposList.map((repo) =>
    `<tr class="repos">
      <td>${repo.name}</td>
      <td><i class="fa fa-code-fork" aria-hidden="true"></i> <span>${repo.forks_count}</span> <i class="fa fa-star" aria-hidden="true"></i> <span>${repo.stargazers_count}</span></td>
    </tr>` + '\n'
    ).join('')

  return results
}

function showError () {
  errorBox.classList.remove('hidden')
  resultBox.classList.add('hidden')
}
