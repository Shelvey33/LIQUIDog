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
  // Gallery elements
  const galleryContainer = document.querySelector('.gallery-container');
  const pageIndicator = document.getElementById('pageIndicator');
  const prevBtn = document.getElementById('prevPage');
  const nextBtn = document.getElementById('nextPage');
  // Modal elements
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  const closeModalBtn = document.getElementById('closeModal');
  const downloadLink = document.getElementById('downloadLink');

  // Define the list of gallery images. When deploying your site,
  // place images in the assets/gallery folder and list them here. The
  // array is sorted alphabetically so pages display images in order.
const imageSources = [
  'assets/gallery/10.jpg',
  'assets/gallery/101.jpg',
  'assets/gallery/107.jpg',
  'assets/gallery/114.jpg',
  'assets/gallery/116.jpg',
  'assets/gallery/117.jpg',
  'assets/gallery/118.jpg',
  'assets/gallery/12.jpeg',
  'assets/gallery/126.jpg',
  'assets/gallery/131.jpg',
  'assets/gallery/132.jpg',
  'assets/gallery/133.jpg',
  'assets/gallery/136.jpg',
  'assets/gallery/137.jpg',
  'assets/gallery/141.jpg',
  'assets/gallery/15.png',
  'assets/gallery/151.jpg',
  'assets/gallery/152.jpg',
  'assets/gallery/154.jpg',
  'assets/gallery/155.jpg',
  'assets/gallery/159.jpg',
  'assets/gallery/16.jpeg',
  'assets/gallery/16.jpg',
  'assets/gallery/165.jpg',
  'assets/gallery/17.jpeg',
  'assets/gallery/18.png',
  'assets/gallery/181.jpg',
  'assets/gallery/184.jpg',
  'assets/gallery/186.jpg',
  'assets/gallery/19.jpeg',
  'assets/gallery/19.jpg',
  'assets/gallery/199.jpg',
  'assets/gallery/2.jpg',
  'assets/gallery/200.jpg',
  'assets/gallery/203.jpg',
  'assets/gallery/204.jpg',
  'assets/gallery/205.jpg',
  'assets/gallery/206.jpg',
  'assets/gallery/212.jpg',
  'assets/gallery/214.jpg',
  'assets/gallery/217.jpg',
  'assets/gallery/218.jpg',
  'assets/gallery/219.jpg',
  'assets/gallery/223.jpg',
  'assets/gallery/224.jpg',
  'assets/gallery/226.jpg',
  'assets/gallery/230.jpg',
  'assets/gallery/236.jpg',
  'assets/gallery/24.jpeg',
  'assets/gallery/243.jpg',
  'assets/gallery/260.jpg',
  'assets/gallery/265.jpg',
  'assets/gallery/266.jpg',
  'assets/gallery/27.jpeg',
  'assets/gallery/272.jpg',
  'assets/gallery/276.jpg',
  'assets/gallery/28.png',
  'assets/gallery/286.jpg',
  'assets/gallery/292.jpg',
  'assets/gallery/30.jpg',
  'assets/gallery/301.jpg',
  'assets/gallery/32.jpeg',
  'assets/gallery/32.jpg',
  'assets/gallery/35.jpeg',
  'assets/gallery/37.jpg',
  'assets/gallery/38.jpg',
  'assets/gallery/39.png',
  'assets/gallery/4 (2).jpeg',
  'assets/gallery/4.jpeg',
  'assets/gallery/43.jpg',
  'assets/gallery/5.jpg',
  'assets/gallery/50.jpg',
  'assets/gallery/53.jpeg',
  'assets/gallery/53.jpg',
  'assets/gallery/56.jpg',
  'assets/gallery/57.jpeg',
  'assets/gallery/58.jpg',
  'assets/gallery/6.jpeg',
  'assets/gallery/72.jpg',
  'assets/gallery/78.jpeg',
  'assets/gallery/79.jpg',
  'assets/gallery/80.jpeg',
  'assets/gallery/85.png',
  'assets/gallery/87.jpeg',
  'assets/gallery/87.jpg',
  'assets/gallery/90.png',
];
  // Sort images alphabetically to maintain a predictable order
  imageSources.sort();

  const imagesPerPage = 9;
  let currentPage = 1;
  const totalPages = Math.ceil(imageSources.length / imagesPerPage);

  function renderGallery() {
    // Clear existing items
    galleryContainer.innerHTML = '';
    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    const pageImages = imageSources.slice(startIndex, endIndex);
    pageImages.forEach((src) => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = 'Gallery image';
      // Lazy load images for performance
      img.loading = 'lazy';
      // When clicked, open in modal
      img.addEventListener('click', () => {
        modalImg.src = src;
        modalImg.alt = 'Full size gallery image';
        downloadLink.href = src;
        downloadLink.download = src.split('/').pop();
        modal.hidden = false;
      });
      galleryContainer.appendChild(img);
    });
    pageIndicator.textContent = `Page ${currentPage} of ${totalPages}`;
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
  }

  // Navigate to previous page
  prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderGallery();
    }
  });
  // Navigate to next page
  nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderGallery();
    }
  });

  // Close modal when clicking the X button
  closeModalBtn.addEventListener('click', () => {
    modal.hidden = true;
    // Remove src to stop download of large images after closing
    modalImg.src = '';
  });
  // Close modal when clicking outside the image
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.hidden = true;
      modalImg.src = '';
    }
  });

  // Initial gallery render
  renderGallery();

  // Copy contract address functionality
  const copyBtn = document.getElementById('copyContractBtn');
  const contractAddrEl = document.getElementById('contractAddress');
  const copyMsg = document.getElementById('copyMessage');
  if (copyMsg) {
    // Ensure the message is hidden on page load
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
              copyMsg.style.display = 'block';
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