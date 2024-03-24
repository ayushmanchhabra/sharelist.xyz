FROM golang:1.22-bullseye

LABEL org.opencontainers.image.source="https://github.com/ayushmanchhabra/sharelist.xyz"
LABEL org.opencontainers.image.description="sharelist.xyz client"

ENV GIN_MODE=debug

WORKDIR /app

COPY . .

RUN go install github.com/cosmtrek/air@latest

RUN go mod download

RUN go build -o main .

EXPOSE 8080

CMD ["air"]
