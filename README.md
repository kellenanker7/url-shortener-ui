# URL Shortener UI

```bash
docker build -t test .

docker run --rm -p 80:80 test

docker stop test

aws ecr get-login-password --region us-east-1

docker tag test:latest 630010311280.dkr.ecr.us-east-1.amazonaws.com/url-shortener-ui:latest

docker push 630010311280.dkr.ecr.us-east-1.amazonaws.com/url-shortener-ui:latest
```