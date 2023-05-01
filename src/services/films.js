const films = [
    {
        id: 1,
        title: 'Star Wars',
        year: 1977,
        language: 'English',
        director: {
          firstName: 'George',
          lastName: 'Lucas',
          nationality: 'American',
          birthDate: '1944-05-14'
        },
        genre: 'Science-Fiction',
        posterUrl: 'https://www.example.com/star-wars.jpg'
      },
      {
        id: 2,
        title: 'Silence of the Lambs',
        year: 2000,
        language: 'English',
        director: {
          firstName: 'Alexandre',
          lastName: 'Choplin',
          nationality: 'Français',
          birthDate: '2002'
        },
        genre: 'Horreur',
        posterUrl: 'https://www.example.com/silence.jpg'
      },
      {
        id: 3,
        title: 'Shrek 5',
        year: 1789,
        language: 'English',
        director: {
          firstName: 'Franckie',
          lastName: 'Vincent',
          nationality: 'American',
          birthDate: '1912'
        },
        genre: 'Animation',
        posterUrl: 'https://www.example.com/silence.jpg'
      },
  ]

  export default {
    getFilms() {
      return films
    },
    getFilmById(id) {
      const film = films.find(film => film.id === id)
      console.log(film)
      return film
    },
    addFilm(film) {
      film.id = films.length + 1
      films.push(film)
    },
    updateFilm(film) {
      const index = films.findIndex(f => f.id === film.id)
      films.splice(index, 1, film)
    },
    deleteFilm(id) {
      const index = films.findIndex(f => f.id === id)
      films.splice(index, 1)
    },
    searchFilms(query) {
      const lowerQuery = query.toLowerCase()
      return films.filter(film =>
        film.title.toLowerCase().includes(lowerQuery) ||
        film.year.toString().includes(lowerQuery) ||
        film.director.firstName.toLowerCase().includes(lowerQuery) ||
        film.director.lastName.toLowerCase().includes(lowerQuery) ||
        film.genre.toLowerCase().includes(lowerQuery)
      )
    },
    updateFilmPoster(id, file) {
      const index = films.findIndex(f => f.id === id)
      films[index].posterUrl = `public/images/${file.name}`
    }
  }