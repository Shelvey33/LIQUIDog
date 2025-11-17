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
  'assets/gallery/1.jpg',
  'assets/gallery/1.png',
  'assets/gallery/10.jpeg',
  'assets/gallery/10.jpg',
  'assets/gallery/100.jpg',
  'assets/gallery/101.jpg',
  'assets/gallery/102.jpg',
  'assets/gallery/103.jpg',
  'assets/gallery/104.jpg',
  'assets/gallery/105.jpg',
  'assets/gallery/106.jpg',
  'assets/gallery/107.jpg',
  'assets/gallery/108.jpg',
  'assets/gallery/109.jpg',
  'assets/gallery/11.jpeg',
  'assets/gallery/11.jpg',
  'assets/gallery/110.jpg',
  'assets/gallery/111.jpg',
  'assets/gallery/112.jpg',
  'assets/gallery/113.jpg',
  'assets/gallery/114.jpg',
  'assets/gallery/115.jpg',
  'assets/gallery/116.jpg',
  'assets/gallery/117.jpg',
  'assets/gallery/118.jpg',
  'assets/gallery/119.jpg',
  'assets/gallery/12.jpeg',
  'assets/gallery/12.jpg',
  'assets/gallery/120.jpg',
  'assets/gallery/121.jpg',
  'assets/gallery/122.jpg',
  'assets/gallery/123.jpg',
  'assets/gallery/124.jpg',
  'assets/gallery/125.jpg',
  'assets/gallery/126.jpg',
  'assets/gallery/127.jpg',
  'assets/gallery/128.jpg',
  'assets/gallery/129.jpg',
  'assets/gallery/13.jpeg',
  'assets/gallery/13.jpg',
  'assets/gallery/130.jpg',
  'assets/gallery/131.jpg',
  'assets/gallery/132.jpg',
  'assets/gallery/133.jpg',
  'assets/gallery/134.jpg',
  'assets/gallery/136.jpg',
  'assets/gallery/137.jpg',
  'assets/gallery/138.jpg',
  'assets/gallery/139.jpg',
  'assets/gallery/14.jpeg',
  'assets/gallery/14.jpg',
  'assets/gallery/140.jpg',
  'assets/gallery/141.jpg',
  'assets/gallery/142.jpg',
  'assets/gallery/143.jpg',
  'assets/gallery/144.jpg',
  'assets/gallery/145.jpg',
  'assets/gallery/146.jpg',
  'assets/gallery/147.jpg',
  'assets/gallery/148.jpg',
  'assets/gallery/149.jpg',
  'assets/gallery/15.jpeg',
  'assets/gallery/15.jpg',
  'assets/gallery/15.png',
  'assets/gallery/150.jpg',
  'assets/gallery/151.jpg',
  'assets/gallery/152.jpg',
  'assets/gallery/153.jpg',
  'assets/gallery/154.jpg',
  'assets/gallery/155.jpg',
  'assets/gallery/156.jpg',
  'assets/gallery/157.jpg',
  'assets/gallery/158.jpg',
  'assets/gallery/159.jpg',
  'assets/gallery/16.jpeg',
  'assets/gallery/16.jpg',
  'assets/gallery/160.jpg',
  'assets/gallery/161.jpg',
  'assets/gallery/162.jpg',
  'assets/gallery/163.jpg',
  'assets/gallery/164.jpg',
  'assets/gallery/165.jpg',
  'assets/gallery/166.jpg',
  'assets/gallery/167.jpg',
  'assets/gallery/168.jpg',
  'assets/gallery/169.jpg',
  'assets/gallery/17.jpeg',
  'assets/gallery/17.jpg',
  'assets/gallery/170.jpg',
  'assets/gallery/171.jpg',
  'assets/gallery/172.jpg',
  'assets/gallery/173.jpg',
  'assets/gallery/174.jpg',
  'assets/gallery/175.jpg',
  'assets/gallery/176.jpg',
  'assets/gallery/177.jpg',
  'assets/gallery/178.jpg',
  'assets/gallery/179.jpg',
  'assets/gallery/18.jpeg',
  'assets/gallery/18.jpg',
  'assets/gallery/18.png',
  'assets/gallery/180.jpg',
  'assets/gallery/181.jpg',
  'assets/gallery/182.jpg',
  'assets/gallery/183.jpg',
  'assets/gallery/184.jpg',
  'assets/gallery/185.jpg',
  'assets/gallery/186.jpg',
  'assets/gallery/187.jpg',
  'assets/gallery/188.jpg',
  'assets/gallery/189.jpg',
  'assets/gallery/19.jpeg',
  'assets/gallery/19.jpg',
  'assets/gallery/190.jpg',
  'assets/gallery/191.jpg',
  'assets/gallery/192.jpg',
  'assets/gallery/193.jpg',
  'assets/gallery/194.jpg',
  'assets/gallery/195.jpg',
  'assets/gallery/196.jpg',
  'assets/gallery/197.jpg',
  'assets/gallery/198.jpg',
  'assets/gallery/199.jpg',
  'assets/gallery/2.jpg',
  'assets/gallery/2.png',
  'assets/gallery/20.jpeg',
  'assets/gallery/20.jpg',
  'assets/gallery/200.jpg',
  'assets/gallery/201.jpg',
  'assets/gallery/202.jpg',
  'assets/gallery/203.jpg',
  'assets/gallery/204.jpg',
  'assets/gallery/205.jpg',
  'assets/gallery/206.jpg',
  'assets/gallery/207.jpg',
  'assets/gallery/208.jpg',
  'assets/gallery/209.jpg',
  'assets/gallery/21.jpeg',
  'assets/gallery/21.jpg',
  'assets/gallery/210.jpg',
  'assets/gallery/211.jpg',
  'assets/gallery/212.jpg',
  'assets/gallery/213.jpg',
  'assets/gallery/214.jpg',
  'assets/gallery/215.jpg',
  'assets/gallery/216.jpg',
  'assets/gallery/217.jpg',
  'assets/gallery/218.jpg',
  'assets/gallery/219.jpg',
  'assets/gallery/22.jpeg',
  'assets/gallery/22.jpg',
  'assets/gallery/220.jpg',
  'assets/gallery/221.jpg',
  'assets/gallery/222.jpg',
  'assets/gallery/223.jpg',
  'assets/gallery/224.jpg',
  'assets/gallery/225.jpg',
  'assets/gallery/226.jpg',
  'assets/gallery/227.jpg',
  'assets/gallery/228.jpg',
  'assets/gallery/229.jpg',
  'assets/gallery/23.jpeg',
  'assets/gallery/23.jpg',
  'assets/gallery/230.jpg',
  'assets/gallery/231.jpg',
  'assets/gallery/232.jpg',
  'assets/gallery/233.jpg',
  'assets/gallery/234.jpg',
  'assets/gallery/235.jpg',
  'assets/gallery/236.jpg',
  'assets/gallery/237.jpg',
  'assets/gallery/238.jpg',
  'assets/gallery/239.jpg',
  'assets/gallery/24.jpeg',
  'assets/gallery/24.jpg',
  'assets/gallery/240.jpg',
  'assets/gallery/241.jpg',
  'assets/gallery/242.jpg',
  'assets/gallery/243.jpg',
  'assets/gallery/244.jpg',
  'assets/gallery/245.jpg',
  'assets/gallery/246.jpg',
  'assets/gallery/247.jpg',
  'assets/gallery/248.jpg',
  'assets/gallery/249.jpg',
  'assets/gallery/25.jpeg',
  'assets/gallery/25.jpg',
  'assets/gallery/250.jpg',
  'assets/gallery/251.jpg',
  'assets/gallery/252.jpg',
  'assets/gallery/253.jpg',
  'assets/gallery/254.jpg',
  'assets/gallery/256.jpg',
  'assets/gallery/257.jpg',
  'assets/gallery/258.jpg',
  'assets/gallery/259.jpg',
  'assets/gallery/26.jpeg',
  'assets/gallery/26.jpg',
  'assets/gallery/260.jpg',
  'assets/gallery/261.jpg',
  'assets/gallery/262.jpg',
  'assets/gallery/263.jpg',
  'assets/gallery/264.jpg',
  'assets/gallery/265.jpg',
  'assets/gallery/266.jpg',
  'assets/gallery/268.jpg',
  'assets/gallery/27.jpeg',
  'assets/gallery/27.jpg',
  'assets/gallery/270.jpg',
  'assets/gallery/272.jpg',
  'assets/gallery/273.jpg',
  'assets/gallery/274.jpg',
  'assets/gallery/275.jpg',
  'assets/gallery/276.jpg',
  'assets/gallery/277.jpg',
  'assets/gallery/278.jpg',
  'assets/gallery/279.jpg',
  'assets/gallery/28.jpeg',
  'assets/gallery/28.jpg',
  'assets/gallery/28.png',
  'assets/gallery/281.jpg',
  'assets/gallery/282.jpg',
  'assets/gallery/283.jpg',
  'assets/gallery/284.jpg',
  'assets/gallery/285.jpg',
  'assets/gallery/286.jpg',
  'assets/gallery/287.jpg',
  'assets/gallery/288.jpg',
  'assets/gallery/29.jpeg',
  'assets/gallery/29.jpg',
  'assets/gallery/290.jpg',
  'assets/gallery/291.jpg',
  'assets/gallery/292.jpg',
  'assets/gallery/293.jpg',
  'assets/gallery/294.jpg',
  'assets/gallery/295.jpg',
  'assets/gallery/296.jpg',
  'assets/gallery/297.jpg',
  'assets/gallery/298.jpg',
  'assets/gallery/3.jpeg',
  'assets/gallery/3.jpg',
  'assets/gallery/30.jpeg',
  'assets/gallery/30.jpg',
  'assets/gallery/300.jpg',
  'assets/gallery/301.jpg',
  'assets/gallery/302.jpg',
  'assets/gallery/303.jpg',
  'assets/gallery/305.jpg',
  'assets/gallery/306.jpg',
  'assets/gallery/307.jpg',
  'assets/gallery/308.jpg',
  'assets/gallery/309.jpg',
  'assets/gallery/31.jpeg',
  'assets/gallery/31.jpg',
  'assets/gallery/310.jpg',
  'assets/gallery/311.jpg',
  'assets/gallery/312.jpg',
  'assets/gallery/313.jpg',
  'assets/gallery/314.jpg',
  'assets/gallery/315.jpg',
  'assets/gallery/316.jpg',
  'assets/gallery/317.jpg',
  'assets/gallery/318.jpg',
  'assets/gallery/319.jpg',
  'assets/gallery/32.jpeg',
  'assets/gallery/32.jpg',
  'assets/gallery/321.jpg',
  'assets/gallery/322.jpg',
  'assets/gallery/323.jpg',
  'assets/gallery/324.jpg',
  'assets/gallery/326.jpg',
  'assets/gallery/327.jpg',
  'assets/gallery/33.jpeg',
  'assets/gallery/33.jpg',
  'assets/gallery/34.jpeg',
  'assets/gallery/34.jpg',
  'assets/gallery/35.jpeg',
  'assets/gallery/35.jpg',
  'assets/gallery/36.jpeg',
  'assets/gallery/36.jpg',
  'assets/gallery/37.jpeg',
  'assets/gallery/37.jpg',
  'assets/gallery/38.jpeg',
  'assets/gallery/38.jpg',
  'assets/gallery/39.jpeg',
  'assets/gallery/39.jpg',
  'assets/gallery/39.png',
  'assets/gallery/4 (2).jpeg',
  'assets/gallery/4.jpeg',
  'assets/gallery/40.jpeg',
  'assets/gallery/40.jpg',
  'assets/gallery/41.jpeg',
  'assets/gallery/41.jpg',
  'assets/gallery/42.jpeg',
  'assets/gallery/42.jpg',
  'assets/gallery/43.jpeg',
  'assets/gallery/43.jpg',
  'assets/gallery/44.jpeg',
  'assets/gallery/44.jpg',
  'assets/gallery/45.jpeg',
  'assets/gallery/45.jpg',
  'assets/gallery/46.jpeg',
  'assets/gallery/46.jpg',
  'assets/gallery/47.jpeg',
  'assets/gallery/47.jpg',
  'assets/gallery/48.jpeg',
  'assets/gallery/48.jpg',
  'assets/gallery/49.jpeg',
  'assets/gallery/49.jpg',
  'assets/gallery/5.jpeg',
  'assets/gallery/5.jpg',
  'assets/gallery/50.jpeg',
  'assets/gallery/50.jpg',
  'assets/gallery/51.jpeg',
  'assets/gallery/51.jpg',
  'assets/gallery/52.jpeg',
  'assets/gallery/52.jpg',
  'assets/gallery/53.jpeg',
  'assets/gallery/53.jpg',
  'assets/gallery/54.jpeg',
  'assets/gallery/54.jpg',
  'assets/gallery/55.jpeg',
  'assets/gallery/55.jpg',
  'assets/gallery/56.jpeg',
  'assets/gallery/56.jpg',
  'assets/gallery/57.jpeg',
  'assets/gallery/57.jpg',
  'assets/gallery/58.jpeg',
  'assets/gallery/58.jpg',
  'assets/gallery/59.jpeg',
  'assets/gallery/59.jpg',
  'assets/gallery/6 (2).jpeg',
  'assets/gallery/6 (3).jpeg',
  'assets/gallery/6.jpeg',
  'assets/gallery/6.jpg',
  'assets/gallery/60.jpeg',
  'assets/gallery/60.jpg',
  'assets/gallery/61.jpeg',
  'assets/gallery/61.jpg',
  'assets/gallery/62.jpeg',
  'assets/gallery/62.jpg',
  'assets/gallery/63.jpeg',
  'assets/gallery/63.jpg',
  'assets/gallery/64.jpeg',
  'assets/gallery/64.jpg',
  'assets/gallery/65.jpeg',
  'assets/gallery/65.jpg',
  'assets/gallery/66.jpeg',
  'assets/gallery/66.jpg',
  'assets/gallery/67.jpeg',
  'assets/gallery/67.jpg',
  'assets/gallery/68.jpeg',
  'assets/gallery/68.jpg',
  'assets/gallery/69.jpeg',
  'assets/gallery/69.jpg',
  'assets/gallery/7.jpeg',
  'assets/gallery/7.jpg',
  'assets/gallery/70.jpeg',
  'assets/gallery/70.jpg',
  'assets/gallery/71.jpeg',
  'assets/gallery/71.jpg',
  'assets/gallery/72.jpeg',
  'assets/gallery/72.jpg',
  'assets/gallery/73.jpeg',
  'assets/gallery/73.jpg',
  'assets/gallery/74.jpeg',
  'assets/gallery/74.jpg',
  'assets/gallery/75.jpeg',
  'assets/gallery/75.jpg',
  'assets/gallery/76.jpeg',
  'assets/gallery/76.jpg',
  'assets/gallery/77.jpeg',
  'assets/gallery/77.jpg',
  'assets/gallery/78.jpeg',
  'assets/gallery/78.jpg',
  'assets/gallery/79.jpeg',
  'assets/gallery/79.jpg',
  'assets/gallery/8.jpeg',
  'assets/gallery/8.jpg',
  'assets/gallery/80.jpeg',
  'assets/gallery/80.jpg',
  'assets/gallery/81.jpeg',
  'assets/gallery/81.jpg',
  'assets/gallery/82.jpg',
  'assets/gallery/82.png',
  'assets/gallery/83.jpg',
  'assets/gallery/83.png',
  'assets/gallery/84.jpeg',
  'assets/gallery/84.jpg',
  'assets/gallery/85.jpg',
  'assets/gallery/85.png',
  'assets/gallery/86.jpeg',
  'assets/gallery/86.jpg',
  'assets/gallery/87.jpeg',
  'assets/gallery/87.jpg',
  'assets/gallery/88.jpg',
  'assets/gallery/88.png',
  'assets/gallery/89.jpg',
  'assets/gallery/89.png',
  'assets/gallery/9.jpeg',
  'assets/gallery/90.jpg',
  'assets/gallery/90.png',
  'assets/gallery/91.jpg',
  'assets/gallery/92.jpg',
  'assets/gallery/93.jpg',
  'assets/gallery/94.jpg',
  'assets/gallery/95.jpg',
  'assets/gallery/96.jpg',
  'assets/gallery/97.jpg',
  'assets/gallery/98.jpg',
  'assets/gallery/99.jpg',
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