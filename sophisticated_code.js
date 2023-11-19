/* sophisticated_code.js */

// This code is a simulation of a virtual art gallery

// Galleries hold a collection of artworks
class Gallery {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.artworks = [];
  }

  addArtwork(artwork) {
    this.artworks.push(artwork);
  }

  removeArtwork(artwork) {
    const index = this.artworks.indexOf(artwork);
    if (index > -1) {
      this.artworks.splice(index, 1);
    }
  }
}

// Artworks have a title, artist, and medium
class Artwork {
  constructor(title, artist, medium) {
    this.title = title;
    this.artist = artist;
    this.medium = medium;
  }

  displayInfo() {
    console.log(`Title: ${this.title}`);
    console.log(`Artist: ${this.artist}`);
    console.log(`Medium: ${this.medium}`);
  }
}

// Create a gallery instance
const virtualGallery = new Gallery("Virtual Art Gallery", "Internet");

// Create some artworks
const artwork1 = new Artwork("The Starry Night", "Vincent van Gogh", "Oil on canvas");
const artwork2 = new Artwork("Mona Lisa", "Leonardo da Vinci", "Oil on poplar panel");
const artwork3 = new Artwork("The Persistence of Memory", "Salvador Dali", "Oil on canvas");

// Add artworks to the gallery
virtualGallery.addArtwork(artwork1);
virtualGallery.addArtwork(artwork2);
virtualGallery.addArtwork(artwork3);

// Display information about all the artworks in the gallery
console.log(`Gallery: ${virtualGallery.name}`);
console.log(`Location: ${virtualGallery.location}`);
console.log("Artworks:")
virtualGallery.artworks.forEach((artwork) => {
  artwork.displayInfo();
  console.log("-----------------------");
});

// Remove an artwork from the gallery
virtualGallery.removeArtwork(artwork2);

// Display updated information about the artworks in the gallery
console.log(`\nAfter removal of an artwork:`);
console.log("Artworks:")
virtualGallery.artworks.forEach((artwork) => {
  artwork.displayInfo();
  console.log("-----------------------");
});

// Create more artworks and add them to the gallery
const artwork4 = new Artwork("The Scream", "Edvard Munch", "Oil, tempera, and pastel on cardboard");
const artwork5 = new Artwork("The Birth of Venus", "Sandro Botticelli", "Tempera on canvas");
virtualGallery.addArtwork(artwork4);
virtualGallery.addArtwork(artwork5);

// Display final information about all the artworks in the gallery
console.log(`\nAfter addition of more artworks:`);
console.log("Artworks:")
virtualGallery.artworks.forEach((artwork) => {
  artwork.displayInfo();
  console.log("-----------------------");
});

// ... More code goes here, adding various features to the virtual art gallery ...

// Execution of the whole program:
// node sophisticated_code.js