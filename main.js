const linksSocialMedia = {
  github: 'xxweell',
  youtube: 'jakelinygracielly',
  facebook: 'wellington.nogueira.775',
  instagram: 'xxweell',
  twitter: 'NogueiraWeell'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    //response é o nome da variável que recebe a resposta que o fetch pegou da url
    //o fetch traz um objeto que precisa ser convertido pra json, por isso que nas chaves {} do then eu passo reponse.json()
    .then(response => response.json()) //como é só uma linha, posso usar o response.json() sem estar dentro de {}
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    }) //data é um json.
}

getGitHubProfileInfos()
