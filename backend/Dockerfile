#Build stage for backend (FastAPI Python)
FROM python:3.10

WORKDIR /profiles

COPY requirements.txt ./

RUN pip install --upgrade -r requirements.txt

COPY . .

CMD python3 main.py

