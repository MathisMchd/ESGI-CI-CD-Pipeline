
# Démarrage de l'application

- `npm run dev`  



docker run --name mariadb -e MARIADB_ROOT_PASSWORD=root -e MARIADB_DATABASE=db -e MARIADB_USER=user -e MARIADB_PASSWORD=pass -p 3306:3306 -d mariadb:latest
