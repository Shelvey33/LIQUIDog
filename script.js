/*
 * Simple gallery pagination script for LIQUIDog.
 *
 * This script populates a 3×3 grid with images and allows users to
 * navigate through pages using previous and next buttons. The
 * galleryImages array is prefilled with placeholders pointing to
 * existing assets. To use your own images, place them in the assets
 * folder and update the imageSources array below or build your own
 * array of file names via build scripts.
 */

document.addEventListener('DOMContentLoaded', () => {
  const galleryContainer = document.querySelector('.gallery-container');
  const pageIndicator = document.getElementById('pageIndicator');
  const prevBtn = document.getElementById('prevPage');
  const nextBtn = document.getElementById('nextPage');

  // Source images for the gallery. Place your own images in assets/gallery
  // and list them here. The gallery will automatically paginate based on
  // the number of images provided.
  const imageSources = [
    'assets/gallery/10.jpg',
    'assets/gallery/16.jpg',
    'assets/gallery/30.jpg',
    'assets/gallery/32.jpg',
    'assets/gallery/58.jpg',
    'assets/gallery/72.jpg',
    'assets/gallery/79.jpg',
    'assets/gallery/87.jpg',
    'assets/gallery/102.jpg',
    'assets/gallery/5.jpeg',
    'assets/gallery/153.jpg',
    'assets/gallery/2.jpg',
    'assets/gallery/20.png',
    'assets/token1.png',
    'assets/token2.png',
    'assets/token3.png'
  ];

  // Build the gallery from the provided sources. Unlike before, we don't
  // repeat images; we display each image once and calculate pages based
  // on the total number of images.
  const galleryImages = imageSources.slice();
  const imagesPerPage = 9;
  const totalPages = Math.ceil(galleryImages.length / imagesPerPage);
  let currentPage = 1;

  function renderGallery() {
    // Clear existing images
    galleryContainer.innerHTML = '';
    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    const pageImages = galleryImages.slice(startIndex, endIndex);
    pageImages.forEach((src) => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = 'Gallery image';
      galleryContainer.appendChild(img);
    });
    // Update indicator and button states
    pageIndicator.textContent = `Page ${currentPage} of ${totalPages}`;
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
  }

  prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderGallery();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderGallery();
    }
  });

  // Initial render
  renderGallery();

  // Copy contract address functionality
  const copyBtn = document.getElementById('copyContractBtn');
  const contractAddrEl = document.getElementById('contractAddress');
  const copyMsg = document.getElementById('copyMessage');
  // Ensure the message is hidden on page load
  if (copyMsg) {
    copyMsg.style.display = 'none';
  }
  if (copyBtn && contractAddrEl) {
    copyBtn.addEventListener('click', () => {
      const address = contractAddrEl.textContent.trim();
      if (navigator.clipboard && address) {
        navigator.clipboard
          .writeText(address)
          .then(() => {
            if (copyMsg) {
              // Show the message briefly
              copyMsg.style.display = 'inline';
              setTimeout(() => {
                copyMsg.style.display = 'none';
              }, 2000);
            }
          })
          .catch((err) => {
            console.error('Failed to copy contract address:', err);
          });
      }
    });
  }
});