import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';

import {Provider} from 'react-redux';
import store from './redux/store';

import '../public/common/css/reset.css';
import '../public/common/css/base.css';
import '../public/common/css/icon.css';


import Header from './components/header';
import Tab from './components/tab';


// import createBrowserHistory from 'history/createBrowserHistory'
const createBrowserHistory = require('history').createBrowserHistory;
const history = createBrowserHistory();


/*
	<Router history={history}>
		<Switch>
			<Route path="/" exact={true} />
	    	<Route path="/goods" component={Goods}>商品</Route>
			<Route path="/rating" component={Rating} />
			<Route path="/seller" component={Seller} />					
		</Switch>
	</Router>
*/


/*
	// 学习redux， 写个简单的counter
*/

/*const Counter = ({value, onIncrement, onDecrement}) => (
	<div>
		<h1>{value}</h1>
		<button onClick={onIncrement}>+</button>
		<button onClick={onDecrement}>-</button>
	</div>
)
const reducer = (state = 0, action) => {
	switch(action.type) {
		case 'INCREMENT': return state + 1;
		case 'DECREMENT': return state -1;
		default: return state;
	}
}
const store = createStore(reducer);*/



class Index extends React.Component {	
	/*constructor (props) {
		super(props);
		this.state = {
			iCount: 0
		}

		store.subscribe(() => {
			console.log('aa');
			this.setState({
				iCount: store.getState()
			})
		})
			
	}*/

	/*<Counter
		value={this.state.iCount}
		onIncrement={ () => store.dispatch({type: 'INCREMENT'})}
		onDecrement={() => store.dispatch({type: 'DECREMENT'})}
	/>*/
	render () {
		return (
			<div>				
				<Header />
				<Router history={history}>
					<Tab store={store}/>
				</Router>
			</div>
		)
	}
}

ReactDOM.render(
	<Provider store={store}>
  		<Index />
  	</Provider>,
  	document.getElementById('root')
);

