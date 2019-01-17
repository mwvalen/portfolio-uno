import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: {
      first: 'Dakshya',
      last: 'Sharma'
    },
    linkedin: 'https://www.linkedin.com/in/dakshya-sharma-839b16a9/',
    skills: [
      {
        name: 'Leadership',
        rating: 7
      },
      {
        name: 'Teamwork',
        rating: 8
      },
      {
        name: 'UX Design',
        rating: 5
      },
      {
        name: 'Networking',
        rating: 6
      },
      {
        name: 'Sales',
        rating: 7
      },
      {
        name: 'Motivating Others',
        rating: 9
      },
      {
        name: 'Being a Nerd',
        rating: 10
      },
      {
        name: 'Making Laddoo',
        rating: 3
      }
    ],
    bio: 'Dakshya is a ray of sunshine and budding entrepreneur / UX designer / yogi'
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    orderedSkills: state => state.skills.sort((a, b) => {
      return (a.rating < b.rating ? 1 : -1)
    })
  }
})
