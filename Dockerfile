FROM python:3.10


WORKDIR /postcards

COPY ./requirements.txt /postcards/requirements.txt

RUN pip install --upgrade -r /postcards/requirements.txt

COPY ./backend /postcards/backend

CMD ["uvicorn", "backend.main:app", "--host", "0.0.0.0", "--port", "8080"]
