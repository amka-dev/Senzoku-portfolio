import '../Scss/sidebar.scss'
import instagram from '../assets/instagram.svg'
import github from '../assets/github.svg'
import gmail from '../assets/gmail.svg'
import telegram from '../assets/telegram.svg'

export default function Sidebar() {
	return (
		<div className='sidebar'>
			<div className='links'>
				<a href=''>
					<p>ABOUT</p>
				</a>
				<a href=''>
					<p>PROJECTS</p>
				</a>
				<a href=''>
					<p>SKILLS</p>
				</a>
			</div>
			<div className='socials'>
				<img src={telegram} alt='telegram' />
				<img src={instagram} alt='instagram' />
				<img src={gmail} alt='gmail' />
				<img src={github} alt='github' />
			</div>
		</div>
	)
}
