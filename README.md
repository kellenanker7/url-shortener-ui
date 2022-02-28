# URL Shortener UI

```bash
docker build -t 630010311280.dkr.ecr.us-east-1.amazonaws.com/url-shortener-ui:latest .

docker run --rm -p 80:80 630010311280.dkr.ecr.us-east-1.amazonaws.com/url-shortener-ui:latest

aws ecr get-login --region us-east-1

docker push 630010311280.dkr.ecr.us-east-1.amazonaws.com/url-shortener-ui:latest

aws ecs update-service --cluster url-shortener --service url-shortener --force-new-deployment
```