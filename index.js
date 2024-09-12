const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello, world! This link redirect URL is working.');
});

// Programming
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

app.get('/ln', (req, res) => {
  res.redirect('https://www.linkedin.com/in/giacomo-r-17642529a/');
});

app.get('/spot', (req, res) => {
  res.redirect('https://open.spotify.com/user/lfh2p1v840ncm672k7l0pdch1');
});

app.get('/yt', (req, res) => {
  res.redirect('https://www.youtube.com/@gicorada');
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


// TakeBy
app.get('/tkby', (req, res) => {
  res.redirect('https://takeby.it');
});

app.get('/tkbydev', (req, res) => {
  res.redirect('https://dev.takeby.it');
});


// Books, Heart and Brain
app.get('/bhb', (req, res) => {
  res.redirect('https://booksheartbrain.it');
});

app.get('/bhb/lore', (req, res) => {
  res.redirect('https://lore.livellosegreto.it/user/booksheartbrain');
});

app.get('/bhb/mstdn', (req, res) => {
  res.redirect('https://livellosegreto.it/@booksheartbrain');
});

app.get('/bhb/podcast', (req, res) => {
  res.redirect('https://funkwhale.it/channels/paperbrains');
});
app.get('/bhb/paperbrains', (req, res) => {
  res.redirect('https://funkwhale.it/channels/paperbrains');
});


// Misc / Utilities
app.get('/sipari', (req, res) => {
  res.redirect('https://sipariaperti.it');
});

app.get('/site', (req, res) => {
  res.redirect('https://gicorada.com');
});
app.get('/gicorada', (req, res) => {
  res.redirect('https://gicorada.com');
});




const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
