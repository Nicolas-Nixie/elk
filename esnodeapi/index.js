const express = require('express')
const { Client } = require('@elastic/elasticsearch')


process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const client = new Client({ 
    node: 'https://localhost:9200',
    auth: {
        username: 'elastic',
        password: 'wpWXW4gjdHBpMXbLnDEu'
    } 
})

const app = express()

app.get('/', (req, res) => {
    res.send('API node js ELK')
  });

app.get('/database/:post', async function (req, res) {
    async function Search () {
      const post = req.param('post')
      const body = await client.search({
        index: 'csv_atp_tennis',
        body: {
          size: 1000,
          query: {
            more_like_this : {
              fields : ["Player_2", "Player_1", "Court", "Winner", "Tournament", "Round", "Series"],
              like : post,
              min_term_freq : 1,  
              max_query_terms : 12
            }
          }
        }
      })
    
      return body.hits.hits
    }
    var SearchResult = await Search()
    res.header("Access-Control-Allow-Origin", "*");
    res.send(SearchResult)
})

app.listen(8080, () => console.log('Server ready'))