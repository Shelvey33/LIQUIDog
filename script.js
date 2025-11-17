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
    'assets/gallery/16.jpg',
    'assets/gallery/30.jpg',
    'assets/gallery/32.jpg',
    'assets/gallery/58.jpg',
    'assets/gallery/72.jpg',
    'assets/gallery/79.jpg',
    'assets/gallery/87.jpg',
    'assets/gallery/dc9bedce-bb3a-4cfa-83ce-065debce6ab1.png',
    // Add additional image file paths here. The script will
    // automatically paginate based on the number of images.
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
    copyMsg.hidden = true;
  }
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