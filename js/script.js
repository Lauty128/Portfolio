let containerProjects = document.querySelector(".containerProjects")
let containerDescriptionProject = document.querySelector(".containerDescriptionProject")

getDataJSON = async()=>{
    let response = await fetch("js/projects.json");
    return await response.json()
}

/* -------------------- PINTAR PROYECTOS ----------------------- */

printDataProjects = async()=>{
    let dataProjects= await getDataJSON()
    dataProjects.forEach(project => {
        var div = document.createElement("div")
        var div2 = document.createElement("div")
        var image = document.createElement("img")
        var h3 = document.createElement("h3")

        div.classList.add("project")
        div.setAttribute("id", project.id)
        div2.classList.add("containerImgProject")
        image.setAttribute("src", project.img)
        h3.textContent = project.name

        div2.appendChild(image);
        div.appendChild(div2)
        div.appendChild(h3)
        containerProjects.appendChild(div)
    });
}

printDataProjects()

/* -------------------- INTERACCION CON LOS PROYECTOS ----------------------- */

openDescriptionProject = data=>{
    document.querySelector(".imageDescriptionProject img").setAttribute("src", data[0].img)
    document.querySelector(".textDescriptionProject h2").textContent = data[0].name.toUpperCase()
    document.querySelector(".textDescriptionProject p").textContent = data[0].description
    document.querySelector(".textDescriptionProject a").setAttribute("href", data[0].url)
    document.querySelector(".containerDescriptionProject").classList.remove("hideContainerModal")
    setTimeout(()=>{ document.querySelector(".descriptionProject").classList.remove("hideModal") },50) 
}

 document.querySelector(".containerProjects").addEventListener("click",async e=>{
    if(e.target.classList.contains("project")){
        let dataProjects = await getDataJSON()
        dataProjects = await dataProjects.filter(el=> el.id == e.target.getAttribute("id"))
        await openDescriptionProject(dataProjects)
    }
 })

 /* -------------------- CERRAR MODAL DE PROYECTOS ----------------------- */

containerDescriptionProject.addEventListener("click", e=>{
    console.log(e.target)
    if(e.target.classList.contains("containerDescriptionProject")){
        e.target.firstElementChild.classList.add("hideModal")
        setTimeout(()=>{ e.target.classList.add("hideContainerModal") },250)
    }
 })
