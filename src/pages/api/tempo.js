async function tempo(req, res) {

  const dynamicDate = new Date();

  const users = await fetch('https://api.github.com/users/zaidohdev');
  const usersJson = await users.json();
  const gitData = {
    'bio': usersJson.bio,
    'name': usersJson.name,
    'repositorios': usersJson.public_repos

  }


  res.json({
    date: dynamicDate.toGMTString(),
    dados: gitData,
  })
}

export default tempo;
