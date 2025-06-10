    const images = ['images/guitarElan.jpg', 'images/highschoolElan.jpg', 'images/integrityElan.png', 'images/scaryElan.jpg'];

    function showRandomImage() {
      const randomIndex = Math.floor(Math.random() * images.length);
      let selectedImage = '';

      for (let i = 0; i < images.length; i++) {
        if (i === randomIndex) {
          selectedImage = images[i];
          break;
        }
      }

      document.getElementById('randomImage').src = selectedImage;
    }
