FROM node:18-alpine
RUN addgroup health-app && adduser -S -G health-app health-app
WORKDIR /app
COPY . .
RUN chown -R health-app:health-app .
USER health-app
RUN npm install --production
EXPOSE 3000
CMD ["npm", "start"]