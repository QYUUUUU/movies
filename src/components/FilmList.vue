<template>
    <div>
      <h1>List of Films</h1>
      <form>
        <input type="text" v-model="searchText" placeholder="Search">
        <button @click.prevent="searchFilms">Search</button>
      </form>
      <ul>
        <li v-for="film in filteredFilms" :key="film.id">
          <h2>{{ film.title }} ({{ film.year }})</h2>
          <p>{{ film.genre }}</p>
          <button @click="showFilmDetails(film.id)">Details</button>
        </li>
      </ul>
      <button @click="createFilm">Create New Film</button>
    </div>
  </template>
  
  <script>
  import filmsService from '@/services/films.js'
  
  export default {
    data() {
      return {
        films: [],
        searchText: ''
      }
    },
    created() {
      this.films = filmsService.getFilms()
    },
    methods: {
      showFilmDetails(id) {
        // Naviguer vers la page de détails du film
        this.$router.push(`/movie/${id}`)
      },
      createFilm() {
        // Naviguer vers la page de création de film
        this.$router.push({ path: '/movie/create', name: 'FilmCreate' })
      },
      searchFilms() {
        // Filtrer les films en fonction de la recherche de l'utilisateur
        const query = this.searchText.toLowerCase()
        this.filteredFilms = this.films.filter(film => {
          return (
            film.title.toLowerCase().includes(query) ||
            film.year.toString().includes(query) ||
            `${film.director.firstName} ${film.director.lastName}`
              .toLowerCase()
              .includes(query)
          )
        })
      }
    },
    computed: {
      filteredFilms() {
        // Afficher tous les films si aucun filtre n'est appliqué
        if (!this.searchText) {
          return this.films
        }
  
        // Sinon, filtrer les films en fonction de la recherche de l'utilisateur
        const query = this.searchText.toLowerCase()
        return this.films.filter(film => {
          return (
            film.title.toLowerCase().includes(query) ||
            film.year.toString().includes(query) ||
            `${film.director.firstName} ${film.director.lastName}`
              .toLowerCase()
              .includes(query)
          )
        })
      }
    }
  }
  </script>

<style>
    ul {
    list-style: none;
    padding: 0;
    }

    li {
    margin-bottom: 1em;
    padding: 1em;
    border: 1px solid #ccc;
    }

    h1 {
    font-size: 2em;
    margin-bottom: 1em;
    }

    input[type="text"] {
    padding: 0.5em;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-right: 0.5em;
    }

    button {
    padding: 0.5em;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    }

    button:hover {
    background-color: #0069d9;
    }
</style>