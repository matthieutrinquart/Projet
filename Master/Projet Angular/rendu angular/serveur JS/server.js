const express = require('express');
const app     = express();
app.use(express.json());

app.use(express.urlencoded({extended:true}));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Content-type', 'application/json');
    next();
});

const MongoClient = require('mongodb').MongoClient;
const ObjectID    = require('mongodb').ObjectId;
const url         = "mongodb://localhost:27017";

MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
    let db = client.db("MARMITON");


    /* Liste des produits */
    app.get("/produits", (req,res) => {
        console.log("/ingredient");
        ingr = [];
        try {
            db.collection("ingredient").find().toArray((err, documents) => {
                for (let doc of documents) {
                    ingr.push(new Ingredient(doc['id'], doc['nom'], doc[1], doc['uniter']))
                    console.log(doc['Like'])
                }
                res.end(JSON.stringify(documents));
            });
        } catch(e) {
            console.log("Erreur sur /ingredient: " + e);
            res.end(JSON.stringify([]));
        }
    });


    app.get("/recettes", (req,res) => {
        console.log("/recettes");
        try {
            db.collection("recettes").find().toArray((err, documents) => {

                res.end(JSON.stringify(documents));
            });
        } catch(e) {
            console.log("Erreur sur /ingredient : " + e);
            res.end(JSON.stringify([]));
        }
    });



    class Recette {
        constructor(id, nom ,ingredient, modeCuissin,NombrePersonnes,autheur,Like) {
            this.id = id;
            this.nom = nom;
            this.ingredient = ingredient;
            this.modeCuissin = modeCuissin;
            this.NombrePersonnes = NombrePersonnes;
            this.autheur = autheur;
            this.Like =Like ;

        }
    }
    class Commentaire {
        constructor(peudo, nomrecette ,commentaire, date) {
            this.peudo = peudo;
            this.nomrecette = nomrecette;
            this.commentaire = commentaire;
            this.date = date;

        }
    }

    class AffichageRecette {
        constructor(recette, ingr ,prix,commentaire,image) {
            this.recette = recette;
            this.ingr = ingr;
            this.prix = prix;
            this.commentaire = commentaire;
            this.image = image

        }

    }

    class Ingredient {
        constructor(nom ,prix, nombre,uniter) {
            this.nom = nom;
            this.prix = prix;
            this.nombre = nombre;
            this.uniter = uniter;
        }
    }

    app.get("/ingredientRecetteG", (req,res) => {
        console.log("/ingredientRecetteG");
        try {
             rec = [];
            aff2: AffichageRecette;
             aff = [];

            returnvalue = [] ;
            db.collection("recettes").find().toArray((err, documents) => {
                for (let doc of documents) {
                    rec.push(new Recette(doc['id'], doc['nom'], doc['ingredient'], doc['modeCuissin'], doc['NombrePersonnes'],doc['autheur'],doc['Like']))
                    console.log(doc['Like'])
                }
                console.log(rec)
                db.collection("ingredient").find().toArray((err, result) => {
                    db.collection("avis").find().toArray((err, sd) => {
                    for(let rt of rec) {
                        inf = [];
                        var somme=0;
                        for (let h of rt['ingredient']) {
                            console.log(h[0] +" quantité " + h[1])
                                for (let doc1 of result) {
                                    if (doc1['nom'] === h[0]) {
                                        inf.push(new Ingredient(doc1['nom'],doc1['prix'], h[1], doc1['uniter']))
                                        somme = somme + (doc1['prix'] *h[1])   ;
                                        //console.log(inf)
                                    }
                                }
                            }
                            com = [];
                            for (let c of sd){
                                if(c['nomrecette'] === rt['nom']){
                                    com.push(new Commentaire(c['peudo'],c['nomrecette'],c['commentaire'],c['date']))
                                }

                            }


                        aff.push(new AffichageRecette(rt, inf, somme,com));
                    }
                        res.end(JSON.stringify(aff));
                    });
                    //aff.push(new AffichageRecette(rec, inf, 3));
                    // aff2 = new AffichageRecette(rec, inf, 3)
                    console.log(aff)
                });
            });
        } catch(e) {
            console.log("Erreur sur /ingredient : " + e);
            res.end(JSON.stringify([]));
        }
    });





    app.get("/ingredientRecette/:val", (req,res) => {
        console.log("/ingredientRecette");
        let val = req.params.val ;
        try {
            rec = [];
            rec : Recette;
            aff2: AffichageRecette;
            aff = [];

            returnvalue = [] ;
            db.collection("recettes").find().toArray((err, documents) => {
                for (let doc of documents) {
                    rec.push(new Recette(doc['id'], doc['nom'], doc['ingredient'], doc['modeCuissin'], doc['NombrePersonnes'],doc['autheur'],doc['Like']))
                }
                db.collection("ingredient").find().toArray((err, result) => {
                    db.collection("avis").find().toArray((err, sd) => {
                    for(let rt of rec) {
                        inf = [];
                        var somme=0;
                        var exist = false;
                        for (let h of rt['ingredient']) {
                            if(h[0] === val){
                                exist = true;
                            }
                        }
                        if(rt["nom"].includes(val) || rt["autheur"] ===val|| exist) {
                            for (let h of rt['ingredient']) {
                                console.log(h[0] + " quantité " + h[1])
                                for (let doc1 of result) {
                                    if (doc1['nom'] === h[0]) {
                                        inf.push(new Ingredient(doc1['nom'],doc1['prix'], h[1], doc1['uniter']))
                                        somme = somme + (doc1['prix'] * h[1]);
                                    }
                                }
                            }
                            com = [];
                            for (let c of sd){
                                if(c['nomrecette'] === rt['nom']){
                                    com.push(new Commentaire(c['peudo'],c['nomrecette'],c['commentaire'],c['date']))
                                }

                            }

                            aff.push(new AffichageRecette(rt, inf, somme,com));
                        }
                    }
                    console.log(aff)
                    res.end(JSON.stringify(aff));
                    });
                    //aff.push(new AffichageRecette(rec, inf, 3));
                    // aff2 = new AffichageRecette(rec, inf, 3)
                    console.log(aff)
                });
            });
        } catch(e) {
            console.log("Erreur sur /ingredient : " + e);
            res.end(JSON.stringify([]));
        }
    });

    app.get("/:tab/:attribut/:valeur", (req,res) => {
        let tab = req.params.tab ;
        let att = req.params.attribut;
        let val = req.params.valeur;


        try {
            let s = {} ;
            let returnvalue = [] ;
            db.collection(tab).find(s).toArray((err, documents) => {
                for (let doc of documents) {
                    if (doc.hasOwnProperty(att) && doc[att] === val) {
                        if (!returnvalue.includes(doc.att)) {
                            returnvalue.push([doc]);
                        }
                    }
                }
                res.end(JSON.stringify(returnvalue));
            });
        } catch(e) {
            console.log("Erreur sur /"+ tab + "/"+ att + "/" + val +" : "+ e);
            res.end(JSON.stringify([]));
        }
    });

    app.post("/Like", (req,res) => {
        console.log("/avis/add avec " + JSON.stringify(req.body));
        try {
            db.collection("recettes").findOneAndUpdate({nom : req.body['rec']} , {$addToSet: { Like : req.body['user']}})
            res.end(JSON.stringify({"resultat": 1, "message": "Like fait"}));
        } catch (e) {
            res.end(JSON.stringify({"resultat": 0, "message": e}));
        }
    });


    app.post("/Commentaire", (req,res) => {
        console.log("/avis/add avec " + JSON.stringify(req.body));
        var c = new Commentaire(req.body["peudo"],req.body["nomrecette"],req.body["commentaire"],req.body["date"])
        try {
            db.collection("avis").insertOne(c, function(err, res) {
                if (err) throw err;
                console.log("1 document inserted");
            });
            res.end(JSON.stringify({"resultat": 1, "message": "Like fait"}));
        } catch (e) {
            res.end(JSON.stringify({"resultat": 0, "message": e}));
        }
    });



    app.post("/user/connexion", (req,res) => {
        console.log("/utilisateurs/connexion avec "+JSON.stringify(req.body));
        try {
            db.collection("users")
                .find(req.body)
                .toArray((err, documents) => {
                    if (documents.length == 1)
                        res.end(JSON.stringify({"resultat": 1, "message": "Authentification réussie" , "pseudo" : documents[0]["pseudo"], "email" : documents[0]["email"], "nom" : documents[0]["nom"], "prenom" : documents[0]["prenom"]}));
                    else res.end(JSON.stringify({"resultat": 0, "message": "Email et/ou mot de passe incorrect"}));
                });
        } catch (e) {
            res.end(JSON.stringify({"resultat": 0, "message": e}));
        }
    });

    class RecetteGet {
        constructor(recette, ingr , Modecuisson, Nbpersonne, Autheur, Like) {
            this.nom = recette;
            this.ingredient = ingr;
            this.modeCuissin = Modecuisson;
            this.NombrePersonnes = Nbpersonne;
            this.autheur = Autheur;
            this.Like = Like;
        }

    }

    app.post("/PUTRecette", (req,res) => {
        console.log("/avis/add avec " + JSON.stringify(req.body));
        var c = new RecetteGet(req.body["recette"],req.body["ingr"],req.body["Modecuisson"],req.body["Nbpersonne"],req.body["Autheur"],req.body["Like"])
        try {
            db.collection("recettes").insertOne(c, function(err, res) {
                if (err) throw err;
                console.log("1 document inserted");
            });
            res.end(JSON.stringify({"resultat": 1, "message": "Like fait"}));
        } catch (e) {
            res.end(JSON.stringify({"resultat": 0, "message": e}));
        }
    });


    app.post("/PUTIngredient", (req,res) => {
        console.log("/PUTIngredient avec " + JSON.stringify(req.body));
        var c = new Ingredient(req.body["nom"],req.body["prix"],req.body["uniter"])
        try {
            db.collection("ingredient").insertOne(c, function(err, res) {
                if (err) throw err;
                console.log("1 document inserted");
            });
            res.end(JSON.stringify({"resultat": 1, "message": "Like fait"}));
        } catch (e) {
            res.end(JSON.stringify({"resultat": 0, "message": e}));
        }
    });
/*
    app.post("/Like/new", (req,res) => {
        console.log("/Like "+JSON.stringify(req.body));
        try{
            db.collection("recettes").findOneAndUpdate({nom : 'soupe'} , {$set: { Like: 'radhika_newemail@gmail.com'}})
        }catch(e) {
            console.log("Erreur sur /produits : " + e);
            res.end(JSON.stringify([]));
        }
    });
    */



});






app.listen(8888);
