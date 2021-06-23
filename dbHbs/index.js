const app = require('./src/app')
const PORT = process.env.PORT || 3003
app.get('', (req, res) => res.send('env'))

app.listen(PORT)