'use client'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 100
    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    
    const currentMount = mountRef.current
    currentMount.appendChild(renderer.domElement)

    const starsGeometry = new THREE.BufferGeometry()
    const starsCount = 2000
    const posArray = new Float32Array(starsCount * 3)

    for(let i = 0; i < starsCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 400 
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
    const starsMaterial = new THREE.PointsMaterial({
        size: 0.3, color: 0xaceca1, transparent: true, opacity: 0.8,
    })
    const starMesh = new THREE.Points(starsGeometry, starsMaterial)
    scene.add(starMesh)

    let mouseX = 0, mouseY = 0
    const handleMouseMove = (event: MouseEvent) => {
        mouseX = event.clientX; mouseY = event.clientY
    }
    document.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
        requestAnimationFrame(animate)
        starMesh.rotation.y += 0.0005; starMesh.rotation.x += 0.0002
        starMesh.rotation.y += mouseX * 0.00005; starMesh.rotation.x += mouseY * 0.00005
        renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('resize', handleResize)
        if (currentMount) currentMount.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <>
      <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-20 opacity-40" />
      <div className="absolute top-0 left-0 w-full h-screen bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15)_0%,transparent_60%)] opacity-60 pointer-events-none -z-10"></div>
    </>
  )
}