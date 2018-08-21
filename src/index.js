import express from 'express';
const app = express()

app.get('/', (req, res) => res.send('Hello Jedi Masters Consumer!'))

app.listen(3001, () => console.log('Jedi Masters Consumer app listening on port 3001!'))