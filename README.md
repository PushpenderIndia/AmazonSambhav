# Social2Amazon  

<p align="center">
    <a href="https://python.org">
    <img src="https://img.shields.io/badge/Python-3-green.svg">
  </a>
  <a href="https://www.djangoproject.com/">
    <img src="https://img.shields.io/badge/Backend-Django-%23000.svg">
  </a>
  <a href="https://jupyter.org/">
    <img src="https://img.shields.io/badge/Jupyter-Notebook-%23F37626.svg">
  </a>
  <a href="https://ai.google.dev/">
    <img src="https://img.shields.io/badge/Model-Gemini-%2334D058.svg">
  </a>
  <a href="https://github.com/PushpenderIndia/AmazonSambhav">
    <img src="https://img.shields.io/badge/Open%20Source-%E2%9D%A4-brightgreen.svg">
  </a>
</p>

## Project Description  
**Social2Amazon** is an advanced AI-powered tool that automatically converts social media content into comprehensive e-commerce listings on platforms like Amazon. By scraping content from platforms such as Instagram, Facebook, and TikTok, this solution extracts and analyzes text, images, and videos to generate detailed product descriptions, pricing, and attributes. The system can even transcribe and analyze Instagram Reels, enabling the creation of rich product listings.  

---

## Demonstration  

### Live Demo  
Explore the tool in action: **[Demo Link](#)**  

### Screenshots  

#### Dashboard  
![Dashboard Overview](https://via.placeholder.com/800x400)  
*A snapshot of the user-friendly dashboard, showcasing account management and fetched posts.*  

#### Generated Product Listing  
![Generated Product Listing](https://via.placeholder.com/800x400)  
*Example of an Amazon product listing generated from social media content.*  

---

## Problem Statement  
The manual process of creating e-commerce listings from social media posts is labor-intensive, inconsistent, and prone to errors. This leads to delays, poor content quality, and missed opportunities to capitalize on potential sales from social media engagement.  

---

## Solution Overview  
**Social2Amazon** automates the conversion of social media posts into e-commerce product listings. By scraping and analyzing the content of posts—including images, captions, and videos—it extracts valuable product information, such as descriptions, features, and pricing. This system significantly reduces manual effort, ensures high-quality listings, and enhances the likelihood of conversions.  

---

## Features  
- **Multi-Platform Content Scraping**:  
   Scrapes posts from Facebook, Instagram, and TikTok, bypassing reliance on APIs.  
- **Video Transcription & Analysis**:  
   Transcribes and analyzes text within Instagram Reels and other video posts.  
- **Content Extraction**:  
   Extracts text and images from posts and applies AI for object detection and OCR.  
- **AI-Generated Product Details**:  
   Generates detailed product titles, descriptions, and attributes such as price, brand, material, and style.  
- **Automated Amazon Listing Creation**:  
   Populates Amazon product listings directly with the generated data.  
- **Scalability**:  
   Deployed on DigitalOcean for high availability and security.  
- **User Dashboard**:  
   Manage multiple social media accounts and review generated product data.  

---

## Examples or Demos  

### Social Media Post  
Original Post:  
![Social Media Post](https://via.placeholder.com/400x400)  

### Generated Product Listing  
Generated Amazon Listing:  
![Generated Amazon Listing](https://via.placeholder.com/800x400)  

---

## Components or Modules  

### Main Modules  
1. **Social Media Scraper**  
   - Scrapes content from Facebook, Instagram, and TikTok (including videos).  
   - Supports multiple accounts per user.  

2. **Content Analysis Module**  
   - Processes images, videos, and captions.  
   - Includes object detection and OCR for accurate data extraction.  

3. **Generative AI Module**  
   - Uses large language models (LLMs) to create compelling product descriptions.  
   - Generates product details such as price, brand, and material.  

4. **Backend API**  
   - Built using Django to manage requests, database operations, and listing generation.  

5. **Frontend**  
   - Developed with ReactJS and TailwindCSS for a smooth user experience.  

---

## Detailed Descriptions of Components  

### Social Media Scraper  
- **Technology Used**: Scraping tools like BeautifulSoup and Selenium for dynamic content.  
- **Functionality**: Scrapes text, images, and videos from posts. Handles complex data from Reels and TikTok videos.  

### Content Analysis Module  
- **Technology Used**: OpenCV, PyTesseract for OCR.  
- **Functionality**:  
   - Detects objects in images to identify products.  
   - Transcribes audio and text from videos (e.g., Instagram Reels).  

### Generative AI Module  
- **Technology Used**: LLMs- Mistral-7B/Gemini-API.  
- **Functionality**:  
   - Converts raw data into detailed product information.  
   - Creates SEO-friendly short and long descriptions for e-commerce platforms.  

### Backend API  
- **Technology Used**: Django, PostgreSQL.
- **Functionality**: Handles user authentication, data storage, and request-response cycles.  

### Frontend  
- **Technology Used**: ReactJS, TailwindCSS, Vite, TypeScript
- **Functionality**: Provides an intuitive dashboard for account management and generated listings.  

---

## Technologies Used  
- **Languages**: Python, JavaScript.  
- **Frontend**: ReactJS, TailwindCSS.  
- **Backend**: Django.  
- **AI & ML**: PyTesseract for OCR, LLMs for text generation.  
- **Cloud Infrastructure**: DigitalOcean.  
- **Tools**: BeautifulSoup, Selenium for scraping.  

---

## Architecture Overview  

### Architecture Diagram  
![image](https://github.com/user-attachments/assets/672848d6-0d61-4500-a45d-a2d643dbee4f)

[Click here for Flowchart](https://github.com/user-attachments/assets/34e9d412-4bbb-4368-bde2-f04d0cd2ae44)

---

## Installation Instructions  

### Backend Setup  
```bash  
git clone https://github.com/pushpenderindia/AmazonSambhav  
python3 -m venv venv  
source venv/bin/activate  
cd backend  
mv env-sample .env  
# Update .env with necessary keys and configurations  
pip install -r requirements.txt  
python3 manage.py runserver  
```  

### Frontend Setup  
```bash  
cd frontend  
npm i  
mv env-sample .env  
# Update .env with necessary keys and configurations  
npm run dev  
```  

### Backend Deployment on VPS
```
apt install nginx python3.12-pip

git clone https://github.com/pushpenderindia/AmazonSambhav  

# Configure Ngnix
sudo cp -rf DevOps/social2amazon.conf /etc/nginx/sites-available/social2amazon
sudo ln -s /etc/nginx/sites-available/social2amazon /etc/nginx/sites-enabled
sudo nginx -t

# Configure Gunicorn Service
sudo cp -rf DevOps/gunicorn_social2amazon.socket /etc/systemd/system/
sudo cp -rf DevOps/gunicorn_social2amazon.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl start gunicorn_social2amazon.socket
sudo systemctl enable gunicorn_social2amazon.socket
sudo systemctl status gunicorn_social2amazon.socket
sudo systemctl start gunicorn_social2amazon
sudo systemctl enable gunicorn_social2amazon
sudo systemctl status gunicorn_social2amazon

sudo systemctl reload nginx
cd backend
python3 -m venv venv  
source venv/bin/activate  
mv env-sample .env  
# Update .env with necessary keys and configurations  
pip install -r requirements.txt  
```

---

## Usage Instructions  
1. Access the dashboard through the frontend.  
2. Connect and manage your social media accounts.  
3. Use the **Fetch Posts** button to scrape posts from linked accounts.  
4. Review extracted data, including text and images.  
5. Allow the AI system to generate detailed product listings.  
6. Export or publish the listings directly to Amazon.  

---

## Acknowledgments  
- **Libraries**: BeautifulSoup, Selenium, OpenCV, PyTesseract, Django, ReactJS.  
- **APIs**: Gemini API.  
- **Hosting**: DigitalOcean for providing scalable and secure infrastructure.  
