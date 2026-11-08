\# Edge PK - Frontend



React + Vite storefront for the Edge PK brand.



Live demo: http://umar-edge-pk2026.s3-website.eu-north-1.amazonaws.com/



\## Tech

React, Vite, JavaScript. Backend is in /backend (in progress).



\## My contribution

\- Fixed a build-breaking typo in Checkout.jsx

\- Deploying the static frontend to AWS S3



\## Deployment notes

1\. `npm run build` creates the `dist` folder

2\. Upload the contents of `dist` to the bucket, keeping the folder structure (`assets/`, `images/`)

3\. Enable static website hosting with `index.html` as index and error document

4\. Add a bucket policy that allows `s3:GetObject` for public read



Lesson learned: the logo requested `/images/logo.png`, so the bucket had to mirror the `dist` folder structure exactly



\## Run locally

cd frontend

npm install

npm run dev

