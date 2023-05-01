<template>
    <div>
      <h1>Modification de film</h1>
      <form @submit.prevent="updateFilm">
        <div>
          <label for="title">Titre:</label>
          <input type="text" id="title" v-model="film.title">
        </div>
        <div>
          <label for="year">Année:</label>
          <input type="number" id="year" v-model.number="film.year">
        </div>
        <div>
          <label for="language">Langue:</label>
          <input type="text" id="language" v-model="film.language">
        </div>
        <div>
          <label for="firstName">Prénom du réalisateur:</label>
          <input type="text" id="firstName" v-model="film.director.firstName">
        </div>
        <div>
          <label for="lastName">Nom du réalisateur:</label>
          <input type="text" id="lastName" v-model="film.director.lastName">
        </div>
        <div>
          <label for="nationality">Nationalité du réalisateur:</label>
          <input type="text" id="nationality" v-model="film.director.nationality">
        </div>
        <div>
          <label for="birthDate">Date de naissance du réalisateur:</label>
          <input type="date" id="birthDate" v-model="film.director.birthDate">
        </div>
        <div>
            <label for="posterUrl">Poster URL:</label>
            <input type="url" id="posterUrl" v-model="film.posterUrl">
        </div>
        <div>
          <label for="genre">Genre:</label>
          <input type="text" id="genre" v-model="film.genre">
        </div>
        <button type="submit">Modifier</button>
      </form>
    </div>
  </template>
  
  <script>
  import filmsService from '@/services/films.js'
  
  export default {
    name: 'FilmForm',
    data() {
      return {
        film: {
          id: null,
          title: '',
          year: null,
          language: '',
          director: {
            firstName: '',
            lastName: '',
            nationality: '',
            birthDate: ''
          },
          genre: '',
          posterUrl: ''
        }
      }
    },
    mounted() {
      const id = this.$route.params.id
      this.film = filmsService.getFilmById(id)
    },
    methods: {
      updateFilm() {
        filmsService.updateFilm(this.film)
        this.$router.push({ path: '/' })
      }
    }
  }
  </script>

<style>
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 30px;
    }

    input {
        padding: 8px;
        margin-bottom: 10px;
        width: 300px;
        border: 2px solid #ccc;
        border-radius: 4px;
        font-size: 16px;
    }

    label {
        margin-right: 10px;
        font-size: 18px;
    }

    button[type="submit"] {
        padding: 8px 16px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        margin-top: 20px;
    }

    button[type="submit"]:hover {
        background-color: #3e8e41;
    }

    h1 {
        font-size: 24px;
        margin-bottom: 20px;
        text-align: center;
    }
</style>