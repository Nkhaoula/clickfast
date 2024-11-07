# Utilisez une image Nginx de base
FROM nginx:alpine
# Copiez le contenu de votre projet dans le dossier d'accueil de Nginx
COPY . /usr/share/nginx/html
# Exposez le port 8080
EXPOSE 8080
# Lancez Nginx en mode non-détaché (background)
CMD ["nginx", "-g", "daemon off;"]