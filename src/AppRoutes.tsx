import { Route, Routes } from 'react-router';
import Layout from './components/Layout';
import HomePage from './pages/homepage/HomePage';

function AppRoutes() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route index element={<HomePage />} />
			</Route>
		</Routes>
	);
}

export default AppRoutes;
