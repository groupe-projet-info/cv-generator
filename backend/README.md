These commands need to be run from inside of the "backend" folder.


# Pre requisites 

Before running the project, create a .env file in the backend folder and add inside the following line :

```
DB_URL="mongodb://localhost:27017/info_db"
```

# To get the project setup:
```
npm install
```

# To run the server, execute the following line:
```
node server.js
```

# API Documentation (examples)
 1- Create a document 
 
 ![alt text](./img/img1.png)

 Result:
 
 ![alt text](./img/result1.png)

  2- Delete a document 
 
 ![alt text](./img/img2.png)

 Result:

 ![alt text](./img/result2.png)

 # APPELS API

(type_bloc dans Education,Skill,Job,Language,Certification)

POST + ./api/cv/{id}/{type_bloc} : Ajouter valeur au CV

GET + ./api/cv/{id}/{type_bloc} : Afficher valeurs de ce type pour le CV {id}

DELETE + ./api/cv/{id}/{type_bloc}/{id} : Supprimer valeur en particulier

DELETE + ./api/cv/{id}/{type_bloc} : Supprimer toutes les valeurs pour ce bloc dans le CV {id}


POST + ./api/cv/ : Créer  CV (discuter des champs obligatoires - pour le moment c'est preset)
GET + ./api/cv/{id} : Récupérer  CV (a discuter si on le recupere juste avec les références où tous les éléments )

POST + ./api/cv/{id}/hobby : Ajouter liste entière hobbies au  CV / Ecraser l'ancienne
POST + ./api/cv/{id}/jobtitle : Ajouter nouveau titre au  CV / Ecraser l'ancien
