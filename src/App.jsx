import logo from './logo.svg'
import './App.scss'
import Main from './components/Main.jsx'
import Aboutme from './components/Aboutme.jsx'
import Projects from './components/Projects.jsx'
export default function App() {
	return (
		<div className='app'>
			<Main></Main>
			<Aboutme></Aboutme>
			<Projects></Projects>
		</div>
	)
}
