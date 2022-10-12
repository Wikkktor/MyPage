FROM python:3.10

# App user
RUN addgroup --system app && adduser --system --group app

WORKDIR /app/

# Prevents Python from writing .pyc files to disk
ENV PYTHONDONTWRITEBYTECODE 1

# ensures that the python output is sent straight to terminal (e.g. your container log)
# without being first buffered and that you can see the output of your application (e.g. django logs)
# in real time. Equivalent to python -u: https://docs.python.org/3/using/cmdline.html#cmdoption-u
ENV PYTHONUNBUFFERED 1
ENV ENVIRONMENT prod
ENV TESTING 0

# Allow installing dev dependencies to run tests
ARG INSTALL_DEV=false


COPY ./requirements.txt /app/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /app/requirements.txt

COPY ./app /app/app

COPY ./passwords.py /app/passwords.py

EXPOSE $PORT
CMD gunicorn -k uvicorn.workers.UvicornWorker --bind 0.0.0.0:$PORT app.main:app