const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello, world! This link redirect URL is working.');
});

// Utilities
app.get('/gh', (req, res) => {
  res.redirect('https://github.com/gicorada');
});

app.get('/gl', (req, res) => {
  res.redirect('https://gitlab.com/gicorada/');
});

app.get('/giteait', (req, res) => {
  res.redirect('https://gitea.it/gicorada');
});


// Social Media
app.get('/ig', (req, res) => {
  res.redirect('https://www.instagram.com/gicorada');
});

app.get('/mstdn1', (req, res) => {
  res.redirect('https://mastodon.uno/@gicorada');
});

app.get('/lore', (req, res) => {
  res.redirect('https://lore.livellosegreto.it/user/gicorada');
});


// Chat
app.get('/matrix', (req, res) => {
  res.redirect('https://matrix.to/#/@gicorada:matrix.org');
});

app.get('/tg', (req, res) => {
  res.redirect('https://t.me/gicorada');
});

app.get('/mail', (req, res) => {
  res.redirect('mailto:gradaellig@protonmail.com');
});




const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
