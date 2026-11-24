# Build the static Astro/Starlight site, then serve only the generated output.
FROM node:22-alpine AS build

WORKDIR /site

ARG SITE_URL
ENV SITE_URL=${SITE_URL}

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:1.27-alpine AS runtime

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /site/dist /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
