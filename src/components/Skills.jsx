import '../Scss/Skills.scss'
import { useEffect, useRef, useState } from 'react'
import aristotel2 from '../assets/aristotel2.png'
import react from '../assets/react.png'

export default function Skills() {
	const [visible, setVisible] = useState(false)
	const sectionRef = useRef(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true)
				}
			},
			{
				threshold: 0.3
			}
		)

		if (sectionRef.current) {
			observer.observe(sectionRef.current)
		}

		return () => observer.disconnect()
	}, [])

	const skills = [
		{ name: 'React', percent: 90 },
		{ name: 'HTML5', percent: 95 },
		{ name: 'SCSS', percent: 88 },
		{ name: 'JavaScript', percent: 82 },
		{ name: 'TypeScript', percent: 30 },
		{ name: '3D', percent: 75 }
	]

	return (
		<div className='skills' ref={sectionRef}>
			<div className='main_skills'>
				<div className='main_skills_container'>
					<h2 className='number'>- IV -</h2>

					<h1 className='text1'>My</h1>

					<h1 className='text2'>
						<u>Skills</u>
					</h1>

					<p className='text3'>
						Technologies i work with<br></br>to bring ideas to life.
					</p>
				</div>

				<div className='photo_skills'>
					<div className='book_man'>
						<img src={aristotel2} alt='' />
					</div>
				</div>

				<div className='skills_container'>
					{skills.map((skill, index) => (
						<div className='skill' key={index}>
							<div className='skill_icon'>
								<img src={react} alt='' />
							</div>

							<div className='skill_wrap'>
								<div className='skill_top'>
									<h3>{skill.name}</h3>
									<span>{skill.percent}%</span>
								</div>

								<div className='skill_bar'>
									<div
										className='skill_fill'
										style={{
											width: visible ? `${skill.percent}%` : '0%'
										}}
									></div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
