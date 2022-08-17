import { createApp } from "vue/dist/vue.esm-browser";
import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'

const apolloClient = new ApolloClient({
  uri: 'https://polec.am/graphql'
})

export const GET_ALL_CARDS_QUERY = gql`
  query MyQuery {
    allCards {
      edges {
        node {
          name
          id
        }
      }
    }
  }  
`

createApp({
    compilerOptions: {
        delimiters: ["${", "}$"]
      },
  data() {
    return {
        cards: null,
        loaded: false
    }
  },
  async mounted() {
    this.loaded = false;
    this.cards = await apolloClient.query({ query: GET_ALL_CARDS_QUERY });
    this.loaded = true;
  }
}).mount('#app-vue')
