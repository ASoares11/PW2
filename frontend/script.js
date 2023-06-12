let isAdmin = () => !!localStorage.getItem("token")

const main = async () => {
	const admin = document.getElementById("admin")
	const user = document.getElementById("user")

  if (!isAdmin()) {
    admin.style.display = "none"
  } else {
    user.style.display = "none"
  }


  const name = document.getElementById("name")
  const age = document.getElementById("age")
  const angola = document.getElementById("angola")

  const acadamico1 = document.getElementById("academico1")
  const acadamico2 = document.getElementById("academico2")
  const acadamico3 = document.getElementById("academico3")

  const profissional1 = document.getElementById("prof1")
  const profissional2 = document.getElementById("prof2")
  const profissional3 = document.getElementById("prof3")


  const ename = document.getElementById("ename")
  const eage = document.getElementById("eage")
  const eangola = document.getElementById("eangola")

  const eacadamico1 = document.getElementById("eacademico1")
  const eacadamico2 = document.getElementById("eacademico2")
  const eacadamico3 = document.getElementById("eacademico3")

  const eprofissional1 = document.getElementById("eprof1")
  const eprofissional2 = document.getElementById("eprof2")
  const eprofissional3 = document.getElementById("eprof3")


  const data = await fetch("http://localhost:3333/profile")
  const json = await data.json()

  console.log(json);

  name.value = json.campo1
  age.value = json.campo2
  angola.value = json.campo3

  acadamico1.value = json.campo4
  acadamico2.value = json.campo5
  acadamico3.value = json.campo6

  profissional1.value = json.campo7
  profissional2.value = json.campo8
  profissional3.value = json.campo9

  ename.value = json.campo1
  eage.value = json.campo2
  eangola.value = json.campo3

  eacadamico1.value = json.campo4
  eacadamico2.value = json.campo5
  eacadamico3.value = json.campo6

  eprofissional1.value = json.campo7
  eprofissional2.value = json.campo8
  eprofissional3.value = json.campo9

  const save = document.getElementById("save")

  save.addEventListener("click", async () => {
    const data = {
      campo1: ename.value,
      campo2: eage.value,
      campo3: eangola.value,

      campo4: eacadamico1.value,
      campo5: eacadamico2.value,
      campo6: eacadamico3.value,

      campo7: eprofissional1.value,
      campo8: eprofissional2.value,
      campo9: eprofissional3.value
    }

    const token = localStorage.getItem("token")

    const response = await fetch("http://localhost:3333/profile", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      method: "PATCH",
      body: JSON.stringify(data)
    })
  })



}

document.addEventListener("DOMContentLoaded", main)
