const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('products',{productos:products})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let idProducto=req.params.id;
		for(let i=0;i<products.length;i++){
			if(products[i].id==idProducto){
				var productoEncontrado=products[i];
			}
		}
		res.render('detail',{productoEnDetalle:productoEncontrado});
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form')
	},
	
	// Create -  Method to store
	store: (req, res) => {
		let idNuevo=products[products.length-1].id + 1
		let nuevoObjeto=Object.assign({id:idNuevo},req.body);
		products.push(nuevoObjeto);
		fs.writeFileSync(productsFilePath,JSON.stringify(products,null,' '));
		res.redirect('/')
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;