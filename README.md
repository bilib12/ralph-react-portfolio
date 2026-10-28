# Ralph Jambert O. Padilla — React Portfolio

A responsive dark portfolio built with React, Vite, custom CSS, and Lucide icons.

## Requirements
- Node.js 18 or newer
- npm

## Run locally
1. Extract this folder.
2. Open a terminal inside the project folder.
3. Install packages:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in the terminal.

## Build for deployment

```bash
npm run build
```

The production build will be generated in `dist/`.

## Profile photo and resume
- The supplied profile photo is used in the hero and header at `public/images/profile.jpg`.
- The supplied resume is available from the View Resume button at `public/resume.pdf`.
- Verify the email, phone number, education dates, and certification status before publishing.

## Project screenshots
- Project screenshots are stored in `public/images/projects/` and displayed in the matching project cards.
- Both Seafudz screenshots are shown in a horizontally scrollable preview.
- The car-rental project preview displays a placeholder until a project screenshot is available.

## Education and training photos
- The TESDA certificate photo is displayed in the TESDA entry and opens in a larger preview when clicked.
- STI, AWS Cloud, and Cyber Quotient are separate entries that use the supplied work-in-progress image.
- Their thumbnail images open in a larger preview when clicked. Update the image paths in `educationItems` in `src/App.jsx` when you have specific photos for those entries.
- TESDA is listed last because its training date is 2023.

## Important content checks
- The Seafudz capstone is shown as a team academic project. Describe your personal contribution accurately.
- If AWS Cloud and Cyber Quotient are courses in progress rather than formal certifications, keep them under ongoing learning rather than claiming completed certifications.
- All project demo and repository links should be checked before publishing.
