import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const título = React.createElement("h2", {className:"título"}, "Hello Edit!");
const cubo1 = React.createElement("div", {className:"cubo"});
const cubo2 = React.createElement("div", {className:"cubo"});
const cubo3 = React.createElement("div", {className:"cubo"});
const cubo4 = React.createElement("div", {className:"cubo"});
const cubo5 = React.createElement("div", {className:"cubo"});
const cubo6 = React.createElement("div", {className:"cubo"})

const mainContainer = React.createElement("div", {className:"main-container"})
	título,
	cubo1,
	cubo2,
	cubo3,
	cubo4,
	cubo5,
	cubo6
	);

const Root = ReactDOM(creat.Root(document.getElementById("root")));
React render(mainContainer);
