FROM node:24-alpine

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm ci --only=production

# Copiar código de la aplicación
COPY src/ ./src/
COPY sql/ ./sql/
COPY uploads/ ./uploads/

# Crear directorio para uploads si no existe
RUN mkdir -p uploads/contracts

# Exponer puerto
EXPOSE 4000
USER node
# Comando para iniciar la aplicación
CMD ["node", "src/app.js"]

