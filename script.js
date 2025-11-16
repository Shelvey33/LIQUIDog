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

  // Source images to cycle through. Replace or extend this array with your
  // own file names located in the assets folder. For now we reuse the
  // same four images as placeholders.
  const imageSources = [
    'assets/token1.png',
    'assets/token2.png',
    'assets/token3.png',
    'assets/hero.jpg',
  ];

  // Build a larger array of images by repeating the placeholders.
  const galleryImages = [];
  const totalImages = 81; // 9 pages × 9 images
  for (let i = 0; i < totalImages; i++) {
    const src = imageSources[i % imageSources.length];
    galleryImages.push(src);
  }

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
  if (copyBtn && contractAddrEl) {
    copyBtn.addEventListener('click', () => {
      const address = contractAddrEl.textContent.trim();
      if (navigator.clipboard && address) {
        navigator.clipboard
          .writeText(address)
          .then(() => {
            if (copyMsg) {
              copyMsg.hidden = false;
              setTimeout(() => {
                copyMsg.hidden = true;
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