FROM python:3.10


WORKDIR /notecards

COPY ./requirements.txt /notecards/requirements.txt

RUN pip install --upgrade -r /notecards/requirements.txt

COPY ./backend /notecards/backend

CMD ["uvicorn", "backend.main:app", "--host", "0.0.0.0", "--port", "8080"]
