# RaspiDashboard
Life dashboard on Raspberry Pi

## Ce que j'ai compris
- Utiliser Express pour faire un serveur Node.js

- Comment envoyer une vue 
	- html tout simple
	- ou par template avec le moteur de rendu EJS. *Le moteur Jade/Pug, c'est vraiment de la grosse merde pour faire de l'angularJS, enfin, je il me fait chier quoi*

- Les fondamentaux de angularJS
	- Comment on fait des controleurs
	- Comment on fait le double data binding

## Ce que je cherche à comprendre
- Comment faire pour qu'Angular rafraichisse un élement de la vue, genre faire une horloge, ou de manière étendue, tout le dashboard en fait
- Comment intergrer un template bootstrap proprement *surrement résolue*
- Comment j'architechure mes ajax de données
	- Genre je veux recuperer mon planning sur google angenda, où est ce que je mets le module qui fait ça et comment je m'en sert par angular



_____
## Commandes pour créer le serveur node.js et le lancer en mode debug
Installer
- node.js
- git

npm install npm@latest -g

npm install express-generator -g

express monsite

cd monsite && npm install

npm install ejs

npm uninstall jade

*modifer le template engine par ejs*

*modifer les vues error, index et 404 au format EJS*

set DEBUG=monsite:* & npm start 	