# RaspiDashboard
Life dashboard on Raspberry Pi

## Ce que j'ai compris
-j'ai compris comment envoyer une vue (html tout simple, ou tmplate avec le "render" par EJS), le moteur Jade/Pug, c'est vraiment de la grosse merde pour faire de l'angularJS

-j'ai compris les fondamentaux de angularJS
	-comment on fait des controleur et comment on fait le double data binding

## Ce que je cherche à comprendre
-Comment faire pour qu'Angular rafraichisse un élement de la vue, genre faire une horloge, ou de manière étendue, tout le dashboard en fait
-Comment intergrer un template bootstrap (ou autre, tant que ca fait des trucs cools)
-Comment j'architechure mes ajax de données. 
-Genre je veux recuperer mon planning sur google angenda, où est ce que je mets le module qui fait ça et comment je m'en sert par angular



_____
## Commandes pour créer le serveur node.js et le lancer en mode debug
-installer 	
	-node.js
	-git

npm install npm@latest -g

npm install express-generator -g

npm install express 		# peut etre pas la peine en fait car je pense que express generator e fout dans le package.jso 

express monsite

cd monsite && npm install

npm install ejs

npm uninstall jade

*modifer le template engine par ejs*

*modifer les vues error, index et 404 au format EJS*

set DEBUG=monsite:* & npm start 	# attention il faut penser à mettre l'étoile que le mardown interprette comme italique
