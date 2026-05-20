import '../Scss/sidebar.scss'
import whatsapp from '../assets/whatsapp.svg'
import github from '../assets/github.svg'
import gmail from '../assets/gmail.svg'
import telegram from '../assets/telegram.svg'

export default function Sidebar() {
	return (
		<div className='sidebar'>
			<div className='links'>
				<a href='#about'>
					<p>ABOUT</p>
				</a>

				<a href='#projects'>
					<p>PROJECTS</p>
				</a>

				<a href='#skills'>
					<p>SKILLS</p>
				</a>
			</div>
			<div className='socials'>
				<img src={telegram} alt='telegram' />
				<img src={whatsapp} alt='whatsapp' />
				<img src={gmail} alt='gmail' />
				<img src={github} alt='github' />
			</div>
		</div>
	)
}
