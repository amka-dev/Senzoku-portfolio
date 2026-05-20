import '../Scss/Contact.scss'

import hand from '../assets/hand.webp'
import whatsapp from '../assets/whatsapp.svg'
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
					<a className='link_white' href='https://t.me/amka_dev' target='_blank' rel='noreferrer'>
						<img src={telegram} alt='' />
					</a>

					<a className='link_red' href='https://wa.me/+905510201707' target='_blank' rel='noreferrer'>
						<img src={whatsapp} alt='' />
					</a>

					<a
						className='link_white'
						href='mailto:nasifullinamir064@gmail.com'
						target='_blank'
						rel='noreferrer'
					>
						<img src={gmail} alt='' />
					</a>

					<a className='link_red' href='https://github.com/amka-dev' target='_blank' rel='noreferrer'>
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
