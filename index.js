import app from './app/config/server.js'
const port = 8080


app.listen(port, () => {
  console.log(`Servidor online => ${port}`);
})