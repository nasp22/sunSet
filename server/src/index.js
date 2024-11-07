// server/src/index.js`

const app = require('./app');
const PORT = process.env.PORT || 1337;

app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});
