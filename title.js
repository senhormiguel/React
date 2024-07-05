import React from 'react';
import ReactDOM from 'react-dom/client';
import style from './NavBar.module.css';
// NavBar.module.css
// NavBar.module.tsx,css e tsx na mesma pasta:NavBar

// Exercícios das aulas mais restantes
const MyComponent = () => {
	return (
		<div>
			<p>Best Product Seller</p>
		</div>
	);
};

export default MyComponent;

const Home = () => <p>Home</p>;
const Shop = () => <p>Shop</p>;
const Contact = () => <p>About</p>;
const Blog = () => <p>Blog</p>;
const Contact = () => <p>Contact</p>;
const Pages = () => <p>Pages</p>;

const App = () => {
	return (
		<div className="main-header">
			<div className="logo-wrapper"><img src="" alt=logo />//</div>
			<nav className="links-wrapper">
				<div className="main-menu">
					<ul>
						<li>Home</li>
						<li>Shop</li>
						<li>About</li>
						<li>Blog</li>
						<li>Contact</li>
						<li>Pages</li>
					</ul>
			</nav>
		</div>
	);
};

export default App;

const MyComponent = () => {
	return (
		<div>
			<h4>Featured Porducts</h4>
			<h3>BESTSELLER PRODUCTS</h3>
			<p>Problems trying to resolve the conflit between</p>
		</div>
	);
};


