import '../Scss/aboutme.scss'
import mikilanjelo from '../assets/mikilanjelo.png'

export default function Aboutme() {
	return (
		<div className='aboutme'>
			<div className='main_about'>
				<div className='main_about_container'>
					<h2 className='number'>II</h2>

					<h1 className='text1'>ABOUT</h1>

					<h1 className='text2'>
						<u>ME</u>
					</h1>

					<p className='text3'>
						I am self-taught, devoted<br></br> to crafting clean and<br></br> thoughtful forms,
						transforming ideas
						<br></br>
						into reality through the art of code.
					</p>
				</div>
				<div className='image_wrap'>
					<img className='mikilanjelo' src={mikilanjelo} alt='mikilanjelo' />
				</div>
			</div>
		</div>
	)
}
