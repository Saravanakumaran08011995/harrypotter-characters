

fetch("https://hp-api.onrender.com/api/characters")
.then((response)=>response.json())
.then((data)=>{
    console.log(data)
    data.forEach((element) => {
        const characterDetails = {
            ...element,
            image : element.image,
            actor : element.actor,
            name : element.name,
            house : element.house,
            species : element.species,
            wand : element.wand.core,
        }
        character(characterDetails)
    });
})
.catch((error)=>console.log(error))
function character({image,actor,name,house,species,wand}){
    document.body.innerHTML += `
    <div class="container">
      <img src="${image}" alt="${name}" class="image" />
      <div class ="info">
      <h2>${actor}</h2>
      <h3>${name}</h3>
      <p><span>House : </span>${house}</p>
      <p><span>Species : </span>${species}</p>
      <p><span>Wand : </span>${wand}</p>
    </div>
    `
}