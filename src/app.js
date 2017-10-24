import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import AppRouter from './routers/AppRouter'
import './styles/styles.scss';
import 'normalize.css/normalize.css';


ReactDOM.render(<AppRouter />,document.getElementById('app'));