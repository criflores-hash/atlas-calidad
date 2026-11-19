# Imagen base con soporte vigente (Node 20)
FROM node:20-alpine
 
WORKDIR /app
 
# 1) Primero solo los archivos de dependencias para aprovechar la caché de Docker
COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force
 
# 2) Luego el código de la aplicación y la estructura de base de datos
COPY src/ ./src/
COPY sql/ ./sql/
 
# 3) Carpeta de documentos con permisos para el usuario sin privilegios
RUN mkdir -p uploads/contracts && chown -R node:node /app/uploads
 
# 4) No ejecutar como administrador (root) por seguridad
USER node
 
# 5) El puerto real en que escucha la API
EXPOSE 4000
 
CMD ["node", "src/app.js"]