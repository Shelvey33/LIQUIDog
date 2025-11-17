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
  'assets/gallery/100_a.png',
  'assets/gallery/101_a.png',
  'assets/gallery/102_a.png',
  'assets/gallery/103_a.png',
  'assets/gallery/104_a.png',
  'assets/gallery/105_a.png',
  'assets/gallery/106_a.png',
  'assets/gallery/107_a.png',
  'assets/gallery/108_a.png',
  'assets/gallery/109_a.png',
  'assets/gallery/10_a.png',
  'assets/gallery/10_b.png',
  'assets/gallery/10_c.png',
  'assets/gallery/110_a.png',
  'assets/gallery/111_a.png',
  'assets/gallery/112_a.png',
  'assets/gallery/113_a.png',
  'assets/gallery/114_a.png',
  'assets/gallery/115_a.png',
  'assets/gallery/116_a.png',
  'assets/gallery/117_a.png',
  'assets/gallery/118_a.png',
  'assets/gallery/119_a.png',
  'assets/gallery/11_a.png',
  'assets/gallery/11_b.png',
  'assets/gallery/11_c.png',
  'assets/gallery/120_a.png',
  'assets/gallery/121_a.png',
  'assets/gallery/122_a.png',
  'assets/gallery/123_a.png',
  'assets/gallery/124_a.png',
  'assets/gallery/125_a.png',
  'assets/gallery/126_a.png',
  'assets/gallery/127_a.png',
  'assets/gallery/128_a.png',
  'assets/gallery/129_a.png',
  'assets/gallery/12_a_a.png',
  'assets/gallery/12_b.png',
  'assets/gallery/12_c.png',
  'assets/gallery/130_a.png',
  'assets/gallery/131_a.png',
  'assets/gallery/132_a.png',
  'assets/gallery/133_a.png',
  'assets/gallery/134_a.png',
  'assets/gallery/136_a.png',
  'assets/gallery/137_a.png',
  'assets/gallery/138_a.png',
  'assets/gallery/139_a.png',
  'assets/gallery/13_a.png',
  'assets/gallery/13_b.png',
  'assets/gallery/13_c.png',
  'assets/gallery/140_a.png',
  'assets/gallery/141_a.png',
  'assets/gallery/142_a.png',
  'assets/gallery/143_a.png',
  'assets/gallery/144_a.png',
  'assets/gallery/145_a.png',
  'assets/gallery/146_a.png',
  'assets/gallery/147_a.png',
  'assets/gallery/148_a.png',
  'assets/gallery/149_a.png',
  'assets/gallery/14_a.png',
  'assets/gallery/14_b.png',
  'assets/gallery/14_c.png',
  'assets/gallery/150_a.png',
  'assets/gallery/151_a.png',
  'assets/gallery/152_a.png',
  'assets/gallery/153_a.png',
  'assets/gallery/154_a.png',
  'assets/gallery/155_a.png',
  'assets/gallery/156_a.png',
  'assets/gallery/157_a.png',
  'assets/gallery/158_a.png',
  'assets/gallery/159_a.png',
  'assets/gallery/15_a.png',
  'assets/gallery/15_b.png',
  'assets/gallery/15_c.png',
  'assets/gallery/160_a.png',
  'assets/gallery/161_a.png',
  'assets/gallery/162_a.png',
  'assets/gallery/163_a.png',
  'assets/gallery/164_a.png',
  'assets/gallery/165_a.png',
  'assets/gallery/166_a.png',
  'assets/gallery/167_a.png',
  'assets/gallery/168_a.png',
  'assets/gallery/169_a.png',
  'assets/gallery/16_a.png',
  'assets/gallery/16_c.png',
  'assets/gallery/170_a.png',
  'assets/gallery/171_a.png',
  'assets/gallery/172_a.png',
  'assets/gallery/173_a.png',
  'assets/gallery/174_a.png',
  'assets/gallery/175_a.png',
  'assets/gallery/176_a.png',
  'assets/gallery/177_a.png',
  'assets/gallery/178_a.png',
  'assets/gallery/179_a.png',
  'assets/gallery/17_c.png',
  'assets/gallery/180_a.png',
  'assets/gallery/181_a.png',
  'assets/gallery/182_a.png',
  'assets/gallery/183_a.png',
  'assets/gallery/184_a.png',
  'assets/gallery/185_a.png',
  'assets/gallery/186_a.png',
  'assets/gallery/187_a.png',
  'assets/gallery/188_a.png',
  'assets/gallery/189_a.png',
  'assets/gallery/18_a.png',
  'assets/gallery/18_b.png',
  'assets/gallery/18_c.png',
  'assets/gallery/190_a.png',
  'assets/gallery/191_a.png',
  'assets/gallery/192_a.png',
  'assets/gallery/193_a.png',
  'assets/gallery/194_a.png',
  'assets/gallery/195_a.png',
  'assets/gallery/196_a.png',
  'assets/gallery/197_a.png',
  'assets/gallery/198_a.png',
  'assets/gallery/199_a.png',
  'assets/gallery/19_a_a.png',
  'assets/gallery/19_c.png',
  'assets/gallery/1_a_a.png',
  'assets/gallery/1_b.png',
  'assets/gallery/1_c.png',
  'assets/gallery/200_a.png',
  'assets/gallery/201_a.png',
  'assets/gallery/202_a.png',
  'assets/gallery/203_a.png',
  'assets/gallery/204_a.png',
  'assets/gallery/205_a.png',
  'assets/gallery/206_a.png',
  'assets/gallery/207_a.png',
  'assets/gallery/208_a.png',
  'assets/gallery/209_a.png',
  'assets/gallery/20_a.png',
  'assets/gallery/20_c.png',
  'assets/gallery/210_a.png',
  'assets/gallery/211_a.png',
  'assets/gallery/212_a.png',
  'assets/gallery/213_a.png',
  'assets/gallery/214_a.png',
  'assets/gallery/215_a.png',
  'assets/gallery/216_a.png',
  'assets/gallery/217_a.png',
  'assets/gallery/218_a.png',
  'assets/gallery/219_a.png',
  'assets/gallery/21_a.png',
  'assets/gallery/21_b.png',
  'assets/gallery/21_c.png',
  'assets/gallery/220_a.png',
  'assets/gallery/221_a.png',
  'assets/gallery/222_a.png',
  'assets/gallery/223_a.png',
  'assets/gallery/224_a.png',
  'assets/gallery/225_a.png',
  'assets/gallery/226_a.png',
  'assets/gallery/227_a.png',
  'assets/gallery/228_a.png',
  'assets/gallery/229_a.png',
  'assets/gallery/22_a.png',
  'assets/gallery/22_b.png',
  'assets/gallery/22_c.png',
  'assets/gallery/230_a.png',
  'assets/gallery/231_a.png',
  'assets/gallery/232_a.png',
  'assets/gallery/233_a.png',
  'assets/gallery/234_a.png',
  'assets/gallery/235_a.png',
  'assets/gallery/236_a.png',
  'assets/gallery/237_a.png',
  'assets/gallery/238_a.png',
  'assets/gallery/239_a.png',
  'assets/gallery/23_a.png',
  'assets/gallery/23_c.png',
  'assets/gallery/240_a.png',
  'assets/gallery/241_a.png',
  'assets/gallery/242_a.png',
  'assets/gallery/243_a.png',
  'assets/gallery/244_a.png',
  'assets/gallery/245_a.png',
  'assets/gallery/246_a.png',
  'assets/gallery/247_a.png',
  'assets/gallery/248_a.png',
  'assets/gallery/249_a.png',
  'assets/gallery/24_a.png',
  'assets/gallery/24_c.png',
  'assets/gallery/250_a.png',
  'assets/gallery/251_a.png',
  'assets/gallery/252_a.png',
  'assets/gallery/253_a.png',
  'assets/gallery/254_a.png',
  'assets/gallery/256_a.png',
  'assets/gallery/257_a.png',
  'assets/gallery/258_a.png',
  'assets/gallery/259_a.png',
  'assets/gallery/25_a_a.png',
  'assets/gallery/25_b.png',
  'assets/gallery/25_c.png',
  'assets/gallery/260_a.png',
  'assets/gallery/261_a.png',
  'assets/gallery/262_a.png',
  'assets/gallery/263_a.png',
  'assets/gallery/264_a.png',
  'assets/gallery/265_a.png',
  'assets/gallery/266_a.png',
  'assets/gallery/268_a.png',
  'assets/gallery/269_a.png',
  'assets/gallery/26_a.png',
  'assets/gallery/26_c.png',
  'assets/gallery/270_a.png',
  'assets/gallery/272_a.png',
  'assets/gallery/273_a.png',
  'assets/gallery/274_a.png',
  'assets/gallery/275_a.png',
  'assets/gallery/276_a.png',
  'assets/gallery/277_a.png',
  'assets/gallery/278_a.png',
  'assets/gallery/279_a.png',
  'assets/gallery/27_a.png',
  'assets/gallery/27_b.png',
  'assets/gallery/27_c.png',
  'assets/gallery/281_a.png',
  'assets/gallery/282_a.png',
  'assets/gallery/283_a.png',
  'assets/gallery/284_a.png',
  'assets/gallery/285_a.png',
  'assets/gallery/286_a.png',
  'assets/gallery/287_a.png',
  'assets/gallery/288_a.png',
  'assets/gallery/28_a_a.png',
  'assets/gallery/28_c.png',
  'assets/gallery/290_a.png',
  'assets/gallery/291_a.png',
  'assets/gallery/292_a.png',
  'assets/gallery/293_a.png',
  'assets/gallery/294_a.png',
  'assets/gallery/295_a.png',
  'assets/gallery/296_a.png',
  'assets/gallery/297_a.png',
  'assets/gallery/298_a.png',
  'assets/gallery/29_b.png',
  'assets/gallery/29_c.png',
  'assets/gallery/2_a_a.png',
  'assets/gallery/2_b.png',
  'assets/gallery/2_c.png',
  'assets/gallery/300_a.png',
  'assets/gallery/301_a.png',
  'assets/gallery/302_a.png',
  'assets/gallery/303_a.png',
  'assets/gallery/305_a.png',
  'assets/gallery/306_a.png',
  'assets/gallery/307_a.png',
  'assets/gallery/309_a.png',
  'assets/gallery/30_a.png',
  'assets/gallery/30_c.png',
  'assets/gallery/310_a.png',
  'assets/gallery/311_a.png',
  'assets/gallery/312_a.png',
  'assets/gallery/313_a.png',
  'assets/gallery/315_a.png',
  'assets/gallery/316_a.png',
  'assets/gallery/317_a.png',
  'assets/gallery/318_a.png',
  'assets/gallery/319_a.png',
  'assets/gallery/31_a_a.png',
  'assets/gallery/31_b.png',
  'assets/gallery/31_c.png',
  'assets/gallery/321_a.png',
  'assets/gallery/322_a.png',
  'assets/gallery/324_a.png',
  'assets/gallery/326_a.png',
  'assets/gallery/327_a.png',
  'assets/gallery/32_a.png',
  'assets/gallery/32_c.png',
  'assets/gallery/33_a.png',
  'assets/gallery/33_b.png',
  'assets/gallery/33_c.png',
  'assets/gallery/34_a.png',
  'assets/gallery/34_c.png',
  'assets/gallery/35_a.png',
  'assets/gallery/35_b.png',
  'assets/gallery/35_c.png',
  'assets/gallery/36_a.png',
  'assets/gallery/36_c.png',
  'assets/gallery/37_a.png',
  'assets/gallery/37_b.png',
  'assets/gallery/37_c.png',
  'assets/gallery/38_a.png',
  'assets/gallery/38_c.png',
  'assets/gallery/39_a.png',
  'assets/gallery/39_c.png',
  'assets/gallery/3_a_a.png',
  'assets/gallery/3_b.png',
  'assets/gallery/3_c.png',
  'assets/gallery/40_a.png',
  'assets/gallery/40_c.png',
  'assets/gallery/41_a.png',
  'assets/gallery/41_c.png',
  'assets/gallery/42_a.png',
  'assets/gallery/42_c.png',
  'assets/gallery/43_a.png',
  'assets/gallery/43_c.png',
  'assets/gallery/44_a.png',
  'assets/gallery/44_c.png',
  'assets/gallery/45_a.png',
  'assets/gallery/45_c.png',
  'assets/gallery/46_a.png',
  'assets/gallery/46_c.png',
  'assets/gallery/47_a.png',
  'assets/gallery/47_c.png',
  'assets/gallery/48_a.png',
  'assets/gallery/48_c.png',
  'assets/gallery/49_a.png',
  'assets/gallery/49_c.png',
  'assets/gallery/4_b.png',
  'assets/gallery/4_c.png',
  'assets/gallery/50_a.png',
  'assets/gallery/50_c.png',
  'assets/gallery/51_a.png',
  'assets/gallery/51_c.png',
  'assets/gallery/52_a.png',
  'assets/gallery/52_c.png',
  'assets/gallery/53_a.png',
  'assets/gallery/53_c.png',
  'assets/gallery/54_a.png',
  'assets/gallery/54_c.png',
  'assets/gallery/55_a.png',
  'assets/gallery/55_c.png',
  'assets/gallery/56_a.png',
  'assets/gallery/56_c.png',
  'assets/gallery/57_a.png',
  'assets/gallery/57_c.png',
  'assets/gallery/58_a.png',
  'assets/gallery/58_c.png',
  'assets/gallery/59_a.png',
  'assets/gallery/59_c.png',
  'assets/gallery/5_a_a.png',
  'assets/gallery/5_b.png',
  'assets/gallery/5_c.png',
  'assets/gallery/60_a.png',
  'assets/gallery/60_c.png',
  'assets/gallery/61_a.png',
  'assets/gallery/61_c.png',
  'assets/gallery/62_a.png',
  'assets/gallery/62_c.png',
  'assets/gallery/63_a.png',
  'assets/gallery/63_c.png',
  'assets/gallery/64_a.png',
  'assets/gallery/64_c.png',
  'assets/gallery/65_a.png',
  'assets/gallery/65_c.png',
  'assets/gallery/66_a.png',
  'assets/gallery/66_c.png',
  'assets/gallery/67_a.png',
  'assets/gallery/67_c.png',
  'assets/gallery/68_a.png',
  'assets/gallery/68_c.png',
  'assets/gallery/69_a.png',
  'assets/gallery/69_c.png',
  'assets/gallery/6_a.png',
  'assets/gallery/6_b.png',
  'assets/gallery/6_c.png',
  'assets/gallery/70_a.png',
  'assets/gallery/70_c.png',
  'assets/gallery/71_a.png',
  'assets/gallery/71_c.png',
  'assets/gallery/72_a.png',
  'assets/gallery/72_c.png',
  'assets/gallery/73_a.png',
  'assets/gallery/73_c.png',
  'assets/gallery/74_a.png',
  'assets/gallery/74_c.png',
  'assets/gallery/75_c.png',
  'assets/gallery/76_a.png',
  'assets/gallery/76_c.png',
  'assets/gallery/77_a.png',
  'assets/gallery/77_c.png',
  'assets/gallery/78_a.png',
  'assets/gallery/78_c.png',
  'assets/gallery/79_a.png',
  'assets/gallery/79_c.png',
  'assets/gallery/7_a.png',
  'assets/gallery/7_b.png',
  'assets/gallery/7_c_c.png',
  'assets/gallery/80_a.png',
  'assets/gallery/80_c.png',
  'assets/gallery/81_a.png',
  'assets/gallery/81_c.png',
  'assets/gallery/82_a.png',
  'assets/gallery/82_c.png',
  'assets/gallery/83_a.png',
  'assets/gallery/83_c.png',
  'assets/gallery/84_a.png',
  'assets/gallery/84_c.png',
  'assets/gallery/85_a.png',
  'assets/gallery/85_c.png',
  'assets/gallery/86_a.png',
  'assets/gallery/86_c.png',
  'assets/gallery/87_a.png',
  'assets/gallery/87_c.png',
  'assets/gallery/88_a.png',
  'assets/gallery/88_c.png',
  'assets/gallery/89_a.png',
  'assets/gallery/89_c.png',
  'assets/gallery/8_a_a.png',
  'assets/gallery/8_b.png',
  'assets/gallery/8_c.png',
  'assets/gallery/90_a.png',
  'assets/gallery/90_c.png',
  'assets/gallery/91_a.png',
  'assets/gallery/92_a.png',
  'assets/gallery/93_a.png',
  'assets/gallery/94_a.png',
  'assets/gallery/95_a.png',
  'assets/gallery/96_a.png',
  'assets/gallery/97_a.png',
  'assets/gallery/98_a.png',
  'assets/gallery/99_a.png',
  'assets/gallery/9_b.png',
  'assets/gallery/9_c.png',
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