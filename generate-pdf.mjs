import puppeteer from 'puppeteer';
import fs from 'fs/promises';

const SLIDE_COUNT = 27;
const URL = 'http://localhost:5173';
const OUTPUT_FILE = 'Pacific_Crest_Presentation.pdf';

async function generatePDF() {
  console.log('🚀 Starting PDF generation...\n');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Set viewport to 16:9 aspect ratio at HD resolution
  await page.setViewport({ width: 1920, height: 1080 });

  console.log(`📖 Navigating to ${URL}...`);
  await page.goto(URL, { waitUntil: 'networkidle2', timeout: 30000 });

  // Wait for initial load
  await new Promise(resolve => setTimeout(resolve, 3000));

  console.log('📸 Capturing all slides to PDF...');

  // Use emulateMediaType to ensure print styles are applied if needed
  await page.emulateMediaType('screen');

  // Generate PDF with all slides by pressing right arrow
  const screenshots = [];

  for (let i = 0; i < SLIDE_COUNT; i++) {
    console.log(`   Slide ${i + 1}/${SLIDE_COUNT}...`);

    // Wait for animations
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Take screenshot
    const screenshot = await page.screenshot({
      type: 'png',
      fullPage: false
    });

    screenshots.push(screenshot);

    // Navigate to next slide
    if (i < SLIDE_COUNT - 1) {
      await page.keyboard.press('ArrowRight');
      await new Promise(resolve => setTimeout(resolve, 800));
    }
  }

  await browser.close();

  console.log('\n📄 Converting screenshots to PDF...');

  // Create new browser instance for PDF generation
  const pdfBrowser = await puppeteer.launch({ headless: 'new' });
  const pdfPage = await pdfBrowser.newPage();

  // Create HTML with all screenshots
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { margin: 0; padding: 0; }
        .slide { 
          width: 100vw; 
          height: 100vh; 
          page-break-after: always;
          display: flex;
          align-items: center;
          justify-content: center;
          background: black;
        }
        .slide img { 
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        @page { margin: 0; size: 11in 8.5in landscape; }
      </style>
    </head>
    <body>
      ${screenshots.map((_, i) => `
        <div class="slide">
          <img src="screenshot-${i}.png" />
        </div>
      `).join('')}
    </body>
    </html>
  `;

  await pdfPage.setContent(htmlContent);

  // Inject screenshots as base64
  for (let i = 0; i < screenshots.length; i++) {
    const base64 = screenshots[i].toString('base64');
    await pdfPage.evaluate((index, data) => {
      const img = document.querySelector(`img[src="screenshot-${index}.png"]`);
      if (img) img.src = `data:image/png;base64,${data}`;
    }, i, base64);
  }

  await new Promise(resolve => setTimeout(resolve, 2000));

  // Generate PDF
  await pdfPage.pdf({
    path: OUTPUT_FILE,
    format: 'Letter',
    landscape: true,
    printBackground: true,
    preferCSSPageSize: true
  });

  await pdfBrowser.close();

  console.log(`\n✅ PDF generated successfully: ${OUTPUT_FILE}`);
  console.log(`📄 Total slides: ${SLIDE_COUNT}`);
  console.log(`📁 File location: ${process.cwd()}/${OUTPUT_FILE}`);
}

generatePDF().catch(err => {
  console.error('❌ Error:', err.message);
  process.exit(1);
});
