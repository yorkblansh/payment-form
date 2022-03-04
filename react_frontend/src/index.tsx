import ReactDOM from 'react-dom';
import './index.scss';
import { MAIN_PAGE } from 'PAGES/MAIN_PAGE/MAIN_PAGE';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PATH } from 'api/consts';

const App = () => (
	<BrowserRouter>
		<Routes>
			<Route   path={PATH('/')} element={<MAIN_PAGE />} />
		</Routes>
	</BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
