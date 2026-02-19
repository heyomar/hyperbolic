const canvas = document.getElementById('particles')
const ctx = canvas.getContext('2d')
let particles = []

const PARTICLE_COUNT = 80
const MAX_DIST = 150
const SPEED = 0.4
const DOT_RADIUS = 1.5
const DOT_COLOR = 'rgba(255,255,255,0.7)'
const LINE_COLOR = (opacity) => `rgba(255,255,255,${opacity})`

function resize() {
	canvas.width = window.innerWidth
	canvas.height = window.innerHeight
}

class Particle {
	constructor() {
		this.reset()
	}
	reset() {
		this.x = Math.random() * canvas.width
		this.y = Math.random() * canvas.height
		this.vx = (Math.random() - 0.5) * SPEED
		this.vy = (Math.random() - 0.5) * SPEED
	}
	update() {
		this.x += this.vx
		this.y += this.vy
		if (this.x < 0 || this.x > canvas.width) this.vx *= -1
		if (this.y < 0 || this.y > canvas.height) this.vy *= -1
	}
	draw() {
		ctx.beginPath()
		ctx.arc(this.x, this.y, DOT_RADIUS, 0, Math.PI * 2)
		ctx.fillStyle = DOT_COLOR
		ctx.fill()
	}
}

function drawLines() {
	for (let i = 0; i < particles.length; i++) {
		for (let j = i + 1; j < particles.length; j++) {
			const dx = particles[i].x - particles[j].x
			const dy = particles[i].y - particles[j].y
			const dist = Math.sqrt(dx * dx + dy * dy)
			if (dist < MAX_DIST) {
				ctx.beginPath()
				ctx.moveTo(particles[i].x, particles[i].y)
				ctx.lineTo(particles[j].x, particles[j].y)
				ctx.strokeStyle = LINE_COLOR(0.15 * (1 - dist / MAX_DIST))
				ctx.lineWidth = 1
				ctx.stroke()
			}
		}
	}
}

function animate() {
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	particles.forEach(p => { p.update(); p.draw() })
	drawLines()
	requestAnimationFrame(animate)
}

function init() {
	particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle())
}

window.addEventListener('resize', () => { resize(); init() })
resize()
init()
animate()
