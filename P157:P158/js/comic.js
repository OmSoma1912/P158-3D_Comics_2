AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "comic1",
        title: "She Hulk",
        url: "./assets/thumbnails/comic1.jpeg",
      },
      {
        id: "comic2",
        title: "Super V.S. Spiderman",
        url: "./assets/thumbnails/comic2.webp",
      },

      {
        id: "comic3",
        title: "Green Arrow",
        url: "./assets/thumbnails/comic3.jpeg",
      },
      {
        id: "comic4",
        title: "The Amazing Spiderman",
        url: "./assets/thumbnails/comic4.jpeg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
    const borderEl = this.createBorder(position, item.id)

      // Thumbnail Element
     const thumbnail = this.createThumbnail(item)
     borderEl.appendChild(thumbnail)
      
      // Title Text Element
      const titleEl = this.createTitleEl(position, item)
      borderEl.appendChild(titleEl)

      this.placesContainer.appendChild(borderEl);
    }
  },
  
  createThumbnail: function(item){
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("visible", true)
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 20,
      height: 28
    })
    entityEl.setAttribute("material", {
      src: item.url,
    })
    return entityEl
  },

  
createBorder: function(position, id){
  const entityEl = document.createElement("a-entity")
  entityEl.setAttribute("id", id)
  entityEl.setAttribute("visible", true)
  entityEl.setAttribute("geometry", {
    primitive: "plane",
    width: 22,
    height: 40
  })
  entityEl.setAttribute("position", position)
  entityEl.setAttribute("material", {
    color: "#0077cc",

  })
  return entityEl
},



createTitleEl: function(position, item){
  const entityEl = document.createElement("a-entity")
  entityEl.setAttribute("text", {
    font: "exo2bold",
    align: 'center',
    width: 100,
    color: '#e65100',
    value: item.title,
  })

  const elPositon = position
  elPositon.y = -30

  entityEl.setAttribute("position", position)
  entityEl.setAttribute("visible", true)
  return entityEl
}

});


