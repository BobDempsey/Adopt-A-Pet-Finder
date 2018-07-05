import fetchJsonP from "fetch-jsonp";
new Vue({
  el: "#app",
  data: () => ({
    valid: true,
    mask: "#####",
    zip: "",
    select: null,
    animals: ["cat", "dog", "bird", "barnyard"],
    dialog: false
  }),
  methods: {
    fetchAnimals(e) {
      const alert = document.querySelector("#alert");
      // quick validation
      if (this.$refs.form.validate(e)) {
        e.preventDefault();
        // fetching animals
        fetchJsonP(
          `http://api.petfinder.com/pet.find?format=json&key=&animal=${
            this.select
          }&location=${this.zip}&callback=callback`,
          {
            jsonpCallbackFunction: "callback"
          }
        )
          .then(res => res.json())
          .then(data => showAnimals(data.petfinder.pets.pet))
          .then(data => alert.style.display="none")
          .catch(err => alert.style.display="flex")
          .catch(err => console.log(err));
      }
    },
    callback(data) {
      console.log(data);
    },
    clear() {
      this.$refs.form.reset();
      document.querySelector("#results").innerHTML="";
    }
  }
});

function showAnimals(pets) {
  const results = document.querySelector("#results");
  results.innerHTML = "";
  pets.forEach(pet => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
    <img src="${pet.media.photos.photo[3].$t}" />
    <div class="cardContent">
    <h3>${pet.name.$t ? `${pet.name.$t}` : ``} (${pet.age.$t ? `${pet.age.$t}` : ``} ${pet.sex.$t ? `${pet.sex.$t}` : ``} 
    ${pet.animal.$t ? `${pet.animal.$t}` : ``})</h3>
    <p>${pet.breeds.breed.$t ? `<i>${pet.breeds.breed.$t}</i><br>` : ``}

    ${pet.contact.address1.$t ? `${pet.contact.address1.$t}<br>` : ``}
    ${pet.contact.address2.$t ? `${pet.contact.address2.$t}<br>` : ``}
    ${pet.contact.city.$t ? `${pet.contact.city.$t},` : ``}
    ${pet.contact.state.$t ? `${pet.contact.state.$t}` : ``}
    ${pet.contact.zip.$t ? `${pet.contact.zip.$t}` : ``}
    </p>
    <ul>
    ${pet.contact.phone.$t ? `<li>Phone: <a href="tel:${pet.contact.phone.$t}">${pet.contact.phone.$t}</a></li>` : ``}
    ${pet.contact.email.$t ? `<li>Email: <a href="mailto:${pet.contact.email.$t}">${pet.contact.email.$t}</a></li>` : ``}
    ${pet.contact.email.$t ? `<li>Shelter ID: ${pet.shelterId.$t}</li>` : ``}
    </ul>
    </div>
    `;
    results.appendChild(div);
    console.log(pet);
  });
}
