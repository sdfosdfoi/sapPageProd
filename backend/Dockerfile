# FastAPI backend Dockerfile
FROM python:3.11-slim

WORKDIR /app
COPY . /app

RUN python -m venv venv && \
    . venv/bin/activate && \
    pip install --upgrade pip && \
    pip install fastapi uvicorn

EXPOSE 8000
CMD ["venv/bin/uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]

