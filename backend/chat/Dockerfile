FROM python:3.12-slim
RUN pip install uv
WORKDIR /app
COPY pyproject.toml ./
COPY uv.lock ./
RUN uv sync
COPY . . 
EXPOSE 4002
CMD [ "uv","run", "uvicorn", "main:app" , "--host", "0.0.0.0", "--port", "4002" ]