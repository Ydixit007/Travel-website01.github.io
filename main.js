const galleryImages = [
  {
    imageUrl:
      "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/6246724/pexels-photo-6246724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/5254688/pexels-photo-5254688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/19109585/pexels-photo-19109585/free-photo-of-victoria-memorial-museum-in-kolkata-seen-from-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/5472258/pexels-photo-5472258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/132479/pexels-photo-132479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/99551/hot-air-balloon-valley-sky-99551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const gallerySection = document.getElementById("gallery-section");

// function to create HTML gallery card.
function createGallery() {
  galleryImages.map((image) => {
    let galleryCard = document.createElement("div");
    galleryCard.classList.add("box");

    let galleryImage = document.createElement("img");
    galleryImage.src = image.imageUrl;
    galleryCard.appendChild(galleryImage);
    gallerySection.appendChild(galleryCard);
  });
}

createGallery();

// Back to Top
document.addEventListener("DOMContentLoaded", function () {
  var backToTopBtn = document.getElementById("back-to-top-btn");

  window.addEventListener("scroll", function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  });
});
