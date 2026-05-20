import './App.scss'

import Main from './components/Main.jsx'
import Aboutme from './components/Aboutme.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
	return (
		<div className='app'>
			<section>
				<Main />
			</section>

			<section id='about'>
				<Aboutme />
			</section>

			<section id='projects'>
				<Projects />
			</section>

			<section id='skills'>
				<Skills />
			</section>

			<section>
				<Contact />
			</section>
		</div>
	)
}
