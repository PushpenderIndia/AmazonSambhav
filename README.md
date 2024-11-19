# AmazonSambhav

## Installation

- For windows use `python` instead of `python3`
- Backend Setup
```
git clone https://github.com/pushpenderindia/AmazonSambhav
python3 -m venv venv
source venv/bin/activate
cd backend
mv env-sample .env
# Update .env 
pip install -r requirements.txt
python3 manage.py runserver
```

- Frontend Setup
```
cd frontend
npm i 
mv env-sample .env
# Update .env
npm run dev
```