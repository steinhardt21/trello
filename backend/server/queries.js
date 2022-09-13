const Pool = require('pg').Pool

// Creation of a pool of connections
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'trello',
  port: 5432
})

const getBoards = (request, response) => {
  response.set('Access-Control-Allow-Origin', '*');
  pool.query('SELECT * FROM board', (error, results) => {
    if(error) {
      throw error;
    }
    response.status(200).json(results.rows);
  })
}

const createBoard = (request, response) => {
  response.set('Access-Control-Allow-Origin', '*');
  const { nameBoard } = request.body;
  pool.query('INSERT INTO board (name) VALUES ($1) RETURNING *', [nameBoard], (error, reuslts) => {
    if(error) {
      throw error;
    }

    response.status(200).send(`Board added with ID: ${results.rows[0].id}`)
  })
}

module.exports = {
  getBoards,
  createBoard
}