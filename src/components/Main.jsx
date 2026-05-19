import '../Scss/main.scss'

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

import { Canvas } from '@react-three/fiber'

import Aristotel from './Aristotel.jsx'

export default function Main() {
	return (
		<div className='main'>
			<div className='main_container'>
				<Header />

				<div className='info_wrap'>
					<div className='main_info'>
						<div className='main_info_container'>
							<h2 className='number'>I</h2>

							<h1 className='text1'>WEB</h1>

							<h1 className='text2'>DEVELOPER</h1>

							<p className='text3'>who creates history</p>
						</div>

						<div className='arrows'>
							<p>DESCEND</p>

							<div className='arrow'></div>

							<div className='arrow delay'></div>
						</div>
					</div>

					<Canvas
						dpr={[1, 1.5]}
						shadows
						gl={{
							antialias: true,
							powerPreference: 'high-performance',
							stencil: false,
							depth: true
						}}
						camera={{
							position: [0, 0.5, 9],
							fov: 22
						}}
					>
						<spotLight
							position={[-4, 3, 5]}
							angle={0.3}
							penumbra={1}
							intensity={3}
							castShadow
							shadow-mapSize-width={1024}
							shadow-mapSize-height={1024}
						/>

						<directionalLight position={[-9, 8, -7]} intensity={1.2} />
						<pointLight position={[0, 1, -2]} intensity={0.5} color='#550000' />
						<Aristotel />
					</Canvas>
				</div>
			</div>

			<Sidebar />
		</div>
	)
}
