# Utiliza una imagen oficial de Node.js como imagen base
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

# Copia los archivos del proyecto al directorio de trabajo
COPY ./package.json ./
COPY ./package-lock.json ./


# Instala las dependencias del proyecto
RUN npm install

COPY . ./

RUN npm run build
ENV NODE_ENV=production

# Etapa de producción: Usa nginx para servir la aplicación construida
# FROM nginx:stable-alpine
# COPY --from=build /app/build /usr/share/nginx/html
# COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expone el puerto que tu servidor utilizará
EXPOSE 5000

# Define el comando para iniciar la aplicación
CMD ["node", "--max-old-space-size=2048", "node_modules/react-scripts/scripts/start.js"]