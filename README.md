# libraryApp
Deep in MEAN Stack


#Node Version
	- v7.7.4


# Get the code

	- git clone https://github.com/adoel90/libraryApp.git

	- cd 'libraryApp'
	
	- npm install


**************************************************************************************************************

# 06 Mei 2017
	- Model
	- View
	- Controller

	- View 
		|
		|
		|
		|
	1. No
	2. Judul Buku
	3. Pengarang
	4. Penerbit
	5. Tahun Cetakan


# CATATAN 
***app.set('views', path.join(__dirname, 'views')); 
							*
							*
							*
							|
							|
							|
							*
							*
							*
		***app.set('views', path.join(__dirname, '/app_server/views'));

	- Gw buat main.js di folder "app_server/controller"
		*** 
			exports.index = function(req, res){
				res.render('index', { title: 'Express' });
			}

	- INFO
		***	"Jadi nanti-nya setiap request yang datang ke web aplikasi ini akan di arahkan : 

				app.js --> /routes/index.js --> /app_server/controllers/main.js
				  |					|							|						
				  |					|							|
				  |					|							|
				  |					|							|
				  *					|							|
				  require('./routes')(app);						|
				  					|							|
				  					|							|
				  					|							|
				  					|							|
				  					|							|
				  					*							|
				  					var controller = require("../app_server/controllers/main");
									module.exports = function(app){
										app.get("/", controller.index);
									}							|
																|
																|
																|									
																|
																|
																|
																*
															exports.index = function(req, res){
																res.render('index', { title: 'Express' });
															}



