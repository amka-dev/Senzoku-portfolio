import '../Scss/Contact.scss'

import hand from '../assets/hand.png'
import instagram from '../assets/instagram.svg'
import github from '../assets/github.svg'
import gmail from '../assets/gmail.svg'
import telegram from '../assets/telegram.svg'

export default function Contact() {
	return (
		<div className='contact'>
			<div className='main_contact'>
				<div className='main_contact_container'>
					<h2 className='number'>- V -</h2>

					<h1 className='text1'>GET IN</h1>

					<h1 className='text2'>
						<u>TOUCH</u>
					</h1>

					<p className='text3'>
						Have a project in mind?
						<br />
						Lets talk and craft
						<br />
						something amazing.
					</p>
				</div>

				<div className='contact_icons'>
					<a className='link_white' href='https://t.me/yourtelegram' target='_blank' rel='noreferrer'>
						<img src={telegram} alt='' />
					</a>

					<a className='link_red' href='https://instagram.com/yourinstagram' target='_blank' rel='noreferrer'>
						<img src={instagram} alt='' />
					</a>

					<a className='link_white' href='https://github.com/yourgithub' target='_blank' rel='noreferrer'>
						<img src={gmail} alt='' />
					</a>

					<a className='link_red' href='https://behance.net/yourbehance' target='_blank' rel='noreferrer'>
						<img src={github} alt='' />
					</a>
				</div>

				<div className='hand_container'>
					<img src={hand} alt='' />
				</div>
			</div>
		</div>
	)
}
