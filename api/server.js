const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const database = {
  artwork: [
    {
      id: "1",
      title: "Sunday in the Park",
      artist: "Georges Seurat",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Georges_Seurat_-_A_Sunday_on_La_Grande_Jatte_--_1884_-_Google_Art_Project.jpg/1920px-Georges_Seurat_-_A_Sunday_on_La_Grande_Jatte_--_1884_-_Google_Art_Project.jpg",
      description: "A Sunday Afternoon on the Island of La Grande Jatte (French: Un dimanche après-midi à l'Île de la Grande Jatte) painted in 1884, is one of Georges Seurat's most famous works. It is a leading example of pointillist technique, executed on a large canvas. Seurat's composition includes a number of Parisians at a park on the banks of the River Seine.",
      printOptions: [
        {
          text: "Mini - 10\" x 12\"",
          price: 299.99
        },
        {
          text: "Small - 15\" x 18\"",
          price: 399.99
        },
        {
          text: "Medium - 20\" x 24\"",
          price: 499.99
        },
        {
          text: "Large - 30\" x 36\"",
          price: 599.99
        },
      ]
    },
    {
      id: "2",
      title: "Water Lilies",
      artist: "Claude Monet",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Monet_Water_Lilies_1916.jpg",
      description: "Water Lilies (or Nymphéas, French: [nɛ̃.fe.a]) is a series of approximately 250 oil paintings by French Impressionist Claude Monet (1840–1926). The paintings depict his flower garden at his home in Giverny, and were the main focus of his artistic production during the last thirty years of his life. Many of the works were painted while Monet suffered from cataracts.",
      printOptions: [
        {
          text: "Mini - 10\" x 12\"",
          price: 299.99
        },
        {
          text: "Small - 15\" x 18\"",
          price: 399.99
        },
        {
          text: "Medium - 20\" x 24\"",
          price: 499.99
        },
        {
          text: "Large - 30\" x 36\"",
          price: 599.99
        },
      ]
    },
  ]
}

app.get("/", (req, res) => {
  res.end("blah blah");
});

app.get("/artwork", (req, res) => {
  console.log(req.query);
  if (req.query.filter) {
    const filter = req.query.filter.toLowerCase();
    console.log("Filter param:", filter);
    // If passed filter text, return artwork matches based on title or author.
    const filteredArtwork = database.artwork.filter(piece => {
      console.log(piece);
      return (piece.title.toLowerCase().indexOf(filter) != -1 ||
              piece.artist.toLowerCase().indexOf(filter) != -1);
    });
    res.json(filteredArtwork);
  }
  res.send(database.artwork);
})

app.listen(3000, () => {
  console.log("app running on port 3000");
});

/* API

/ --> return index.html
/artwork --> GET, return json for requested artwork (all, or filtered by text)
/order-successful --> POST, run scripts to
  1) send order to printer
  2) track the purchase
  3) confirm with customer

*/
