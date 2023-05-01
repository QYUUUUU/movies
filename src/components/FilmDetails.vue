
<template>
  <div>
    <h1>{{ film.title }} ({{ film.year }})</h1>
    <p>{{ film.genre }}</p>
    <p>{{ film.director.firstName }} {{ film.director.lastName }}</p>
    <img :src="film.posterUrl" :alt="film.title">
    <br><br>
    <input type="file" @change="uploadImage" accept="image/*">
    <br>
    <button @click="editFilm">Edit</button>
    <button @click="deleteFilm">Supprimer</button>
    
    <br><br><br><br>
    <router-link to="/" >back</router-link>
  </div>
  
</template>
<script>
import filmsService from '@/services/films.js'

export default {
  data() {
    return {
      film: {}
    }
  },
  created() {
    const id = parseInt(this.$route.params.id)
    this.film = filmsService.getFilmById(id)
  },
  methods: {
    editFilm() {
      this.$router.push({ name: 'FilmForm', params: { id: this.film.id, action: 'edit' }})
    },
    deleteFilm() {
      if (confirm("Êtes-vous sûr de vouloir supprimer ce film ?")) {
        filmsService.deleteFilm(this.film.id)
        this.$router.push({ path: '/' })
      }
    },
    uploadImage(event) {
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.onload = (event) => {
        const imageUrl = event.target.result
        filmsService.updateFilmPoster(this.film.id, imageUrl)
        this.film.posterUrl = imageUrl
      }
      reader.readAsDataURL(file)
    }
  }
}
</script>
<style>
.film-details {
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
}

h1 {
font-size: 36px;
font-weight: bold;
text-align: center;
}

p {
font-size: 18px;
text-align: center;
}

img {
width: 300px;
height: auto;
margin: 20px 0;
}

button {
padding: 10px 20px;
font-size: 18px;
background-color: #008CBA;
color: white;
border: none;
border-radius: 5px;
margin: 10px;
cursor: pointer;
}

button:hover {
background-color: #005D6E;
}
</style>