FROM python:alpine 

LABEL maintainer="Devops Ninja"

RUN pip install flask

COPY main.py /app
WORKDIR /app

EXPOSE 5000

CMD ["python", "main.py"]
