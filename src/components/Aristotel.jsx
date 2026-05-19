import { useGLTF } from '@react-three/drei'

import { useFrame } from '@react-three/fiber'

import { useRef, useEffect } from 'react'

import * as THREE from 'three'

export default function Aristotel() {
	const model = useGLTF('/models/aristotel.glb')

	const ref = useRef()

	useEffect(() => {
		if (!ref.current) return

		ref.current.position.set(0, -6, 0)

		ref.current.scale.set(1, 1, 1)

		ref.current.rotation.y = Math.PI * 2
	}, [])

	useEffect(() => {
		if (!model?.scene) return

		model.scene.traverse(child => {
			if (child.isMesh) {
				child.castShadow = true
				child.receiveShadow = true

				if (child.material) {
					child.material.roughness = 0.8
					child.material.metalness = 0.2
				}
			}
		})

		return () => {
			model.scene.traverse(child => {
				if (child.isMesh) {
					child.geometry?.dispose?.()

					if (child.material) {
						if (Array.isArray(child.material)) {
							child.material.forEach(m => m.dispose?.())
						} else {
							child.material.dispose?.()
						}
					}
				}
			})
		}
	}, [model])

	useFrame((state, delta) => {
		if (!ref.current) return

		const t = state.clock.getElapsedTime()

		const targetY = -2
		const targetScale = 4
		const targetRotation = 0

		ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, targetY, delta * 1.8)

		const scale = THREE.MathUtils.lerp(ref.current.scale.x, targetScale, delta * 1.8)

		ref.current.scale.set(scale, scale, scale)

		ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, targetRotation, delta * 1.5)

		ref.current.rotation.y += Math.sin(t * 0.6) * 0.0008

		ref.current.rotation.z = Math.sin(t * 0.7) * 0.015

		ref.current.position.y += Math.sin(t * 1.2) * 0.003
	})

	return (
		<>
			<mesh position={[0.1, 0.5, -0.7]}>
				<torusGeometry args={[1.3, 0.03, 9, 100]} />

				<meshBasicMaterial color='#ff0000' toneMapped={false} />
			</mesh>

			<primitive ref={ref} object={model.scene} />
		</>
	)
}
