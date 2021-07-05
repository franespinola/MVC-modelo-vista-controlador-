const { dir } = require('console');
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
		let nombreImagen=req.file.filename
		let idNuevo=products[products.length-1].id + 1
		let nuevoObjeto=Object.assign({id:idNuevo},req.body,{image:nombreImagen});
		products.push(nuevoObjeto);
		fs.writeFileSync(productsFilePath,JSON.stringify(products,null,' '));
		res.redirect('/')
	},

	// Update - Form to edit
	edit: (req, res) => {
		let idProducto=req.params.id;
		//const idProducto=products.find(element=>element.id==req.params.id); mejor mas simplificado,hacemos todo en una linea
		for(let i=0;i<products.length;i++){
			if(products[i].id==idProducto){
				var productoEncontrado=products[i];
			}
		}
		res.render('product-edit-form',{productoEnDetalle:productoEncontrado})
	},
	// Update - Method to update
	update: (req, res) => {
		let valoresNuevos=req.body;
		let idProducto=req.params.id;
		let nombreImagen=req.file.filename
		
		for(let i=0;i<products.length;i++){
			if(products[i].id==idProducto){
				var imagenAnterior=products[i].image;
				products[i].name=valoresNuevos.name;
				products[i].price=valoresNuevos.price;
				products[i].discount=valoresNuevos.discount;
				products[i].category=valoresNuevos.category;
				products[i].description=valoresNuevos.description;
				products[i].image=nombreImagen
				
				
				var productoEncontrado=products[i];
				
				break;
			}
		}
		fs.unlinkSync(path.join(__dirname,'../../public/images/products/'+imagenAnterior));
		fs.writeFileSync(productsFilePath,JSON.stringify(products,null,' '));
		res.render('detail',{productoEnDetalle:productoEncontrado})

	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		
		let idProducto=req.params.id;
		for(let i=0;i<products.length;i++){
			if(products[i].id==idProducto){
				var nombreImagen=products[i].image;
				products.splice(i,1);
				break;
			}	
		}
		fs.writeFileSync(productsFilePath,JSON.stringify(products,null,' '));
		fs.unlinkSync(path.join(__dirname,'../../public/images/products/'+nombreImagen));
		res.render('index',{productos:products})
	}
};

module.exports = controller;