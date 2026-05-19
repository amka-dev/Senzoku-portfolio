import '../Scss/projects.scss'
import cart1 from '../assets/cart1.png'
import cart2 from '../assets/cart2.png'
import cart3 from '../assets/cart3.png'
import cart4 from '../assets/cart4.png'
import cart5 from '../assets/cart5.png'
import cart6 from '../assets/cart6.png'

export default function Projects() {
	return (
		<div className='projects'>
			<div className='main_projects'>
				<div className='main_projects_container'>
					<h2 className='number'>III</h2>
					<h1 className='text1'>My</h1>
					<h1 className='text2'>
						<u>Art</u>
					</h1>
					<p className='text3'>Here are works shaped through purpose</p>
				</div>

				<div className='card-container'>
					<div className='card'>
						<img className='card-front' src={cart1} alt='' />

						<div className='card-back'>
							<img src={cart2} alt='' />
							<a href='https://time4pay.io/' className='click-layer' />
						</div>
					</div>
					<div className='card'>
						<img className='card-front' src={cart3} alt='' />

						<div className='card-back'>
							<img src={cart4} alt='' />
							<a href='https://time4pay.io/' className='click-layer' />
						</div>
					</div>
					<div className='card'>
						<img className='card-front' src={cart5} alt='' />

						<div className='card-back'>
							<img src={cart6} alt='' />
							<a href='https://time4pay.io/' className='click-layer' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
