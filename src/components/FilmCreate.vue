<template>
<div>
    <h1>Create a Film</h1>
    <form @submit.prevent="createFilm">
    <label for="title">Title:</label>
    <input type="text" id="title" v-model="film.title" required>
    <br>
    <label for="year">Year:</label>
    <input type="number" id="year" v-model.number="film.year" min="1895" max="2099" required>
    <br>
    <label for="language">Language:</label>
    <input type="text" id="language" v-model="film.language" required>
    <br>
    <label for="genre">Genre:</label>
    <input type="text" id="genre" v-model="film.genre" required>
    <br>
    <label for="firstName">Director's First Name:</label>
    <input type="text" id="firstName" v-model="film.director.firstName" required>
    <br>
    <label for="lastName">Director's Last Name:</label>
    <input type="text" id="lastName" v-model="film.director.lastName" required>
    <br>
    <label for="nationality">Director's Nationality:</label>
    <input type="text" id="nationality" v-model="film.director.nationality" required>
    <br>
    <label for="birthDate">Director's Birth Date:</label>
    <input type="date" id="birthDate" v-model="film.director.birthDate" required>
    <br>
    <label for="posterUrl">Poster URL:</label>
    <input type="url" id="posterUrl" v-model="film.posterUrl" required>
    <br><br>
    <button type="submit">Create</button>
    <router-link to="/" >Cancel</router-link>
    </form>
</div>
</template>

<script>
    import filmsService from '@/services/films.js'

    export default {
    data() {
        return {
        film: {
            title: '',
            year: null,
            language: '',
            genre: '',
            director: {
            firstName: '',
            lastName: '',
            nationality: '',
            birthDate: ''
            },
            posterUrl: ''
        }
        }
    },
    methods: {
        createFilm() {
        filmsService.addFilm(this.film)
        this.$router.push('/')
        }
    }
    }
</script>