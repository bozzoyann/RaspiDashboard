# RaspiDashboard
Life dashboard on Raspberry Pi




_____
*Commandes pour créer le serveur node.js et le lancer en mode debug
installer 	node.js
		git

npm install npm@latest -g
npm install express-generator -g

npm install express 		#peut etre pas la peine en fait car je pense que express generator e fout dans le package.jso 
express monsite
cd monsite && npm install

npm install ejs
npm uninstall jade
*modifer le template engine par ejs*
*modifer les vues error, index et 404 au format EJS*

set DEBUG=monsite:* & npm start
