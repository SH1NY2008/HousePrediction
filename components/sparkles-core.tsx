"use client"; 
import React, { useRef, useEffect, useState } from "react"; 
import { cn } from "@/lib/utils"; 


interface SparklesProps { 
  id?: string; 
  className?: string; 
  background?: string; 
  minSize?: number; 
  maxSize?: number; 
  speed?: number; 
  particleColor?: string; 
  particleDensity?: number; 
} 


export const SparklesCore = ({ 
  id, 
  className, 
  background = "transparent", 
  minSize = 0.4, 
  maxSize = 1.5,
  speed = 1.2,
  particleColor = "#3772FF", // Changed from #00BFB2 to #3772FF
  particleDensity = 120,
}: SparklesProps) => { 
  const canvasRef = useRef<HTMLCanvasElement>(null); 
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null); 
  const [particles, setParticles] = useState<any[]>([]); 
  const [width, setWidth] = useState(0); 
  const [height, setHeight] = useState(0); 
  const [mouse, setMouse] = useState({ x: 0, y: 0, radius: 0 }); 


  useEffect(() => { 
    if (canvasRef.current) { 
      const ctx = canvasRef.current.getContext("2d"); 
      setContext(ctx); 
    } 


    function handleResize() { 
      if (canvasRef.current) { 
        const canvas = canvasRef.current; 
        const rect = canvas.getBoundingClientRect(); 
        setWidth(rect.width); 
        setHeight(rect.height); 
        canvas.width = rect.width; 
        canvas.height = rect.height; 
        
        // Recreate particles on resize 
        createParticles(); 
      } 
    } 


    function handleMouseMove(e: MouseEvent) { 
      if (canvasRef.current) { 
        const rect = canvasRef.current.getBoundingClientRect(); 
        setMouse({ 
          x: e.clientX - rect.left, 
          y: e.clientY - rect.top, 
          radius: 50, 
        }); 
      } 
    } 


    window.addEventListener("resize", handleResize); 
    window.addEventListener("mousemove", handleMouseMove); 
    handleResize(); 


    return () => { 
      window.removeEventListener("resize", handleResize); 
      window.removeEventListener("mousemove", handleMouseMove); 
    }; 
  }, []); 


  useEffect(() => { 
    if (width > 0 && height > 0) { 
      createParticles(); 
    } 
  }, [width, height, particleDensity]); 


  const createParticles = () => { 
    const newParticles = []; 
    const particleCount = Math.min(Math.floor((width * height) / 8000) * particleDensity / 100, 500); 
    
    for (let i = 0; i < particleCount; i++) { 
      const size = Math.random() * (maxSize - minSize) + minSize; 
      newParticles.push({ 
        x: Math.random() * width, 
        y: Math.random() * height, 
        size: size, 
        speedX: (Math.random() - 0.5) * speed, 
        speedY: (Math.random() - 0.5) * speed, 
        color: particleColor, 
      }); 
    } 
    
    setParticles(newParticles); 
  }; 


  useEffect(() => { 
    if (!context || particles.length === 0) return; 


    let animationFrameId: number; 
    
    const animate = () => { 
      context.clearRect(0, 0, width, height); 
      context.fillStyle = background; 
      context.fillRect(0, 0, width, height); 
      
      particles.forEach((particle, i) => { 
        // Update particle position 
        particle.x += particle.speedX; 
        particle.y += particle.speedY; 
        
        // Boundary check 
        if (particle.x < 0 || particle.x > width) { 
          particle.speedX = -particle.speedX; 
        } 
        
        if (particle.y < 0 || particle.y > height) { 
          particle.speedY = -particle.speedY; 
        } 
        
        // Mouse interaction 
        const dx = mouse.x - particle.x; 
        const dy = mouse.y - particle.y; 
        const distance = Math.sqrt(dx * dx + dy * dy); 
        
        if (distance < mouse.radius + particle.size) { 
          if (mouse.x < particle.x && particle.x < width - particle.size * 10) { 
            particle.x += 1; 
          } 
          if (mouse.x > particle.x && particle.x > particle.size * 10) { 
            particle.x -= 1; 
          } 
          if (mouse.y < particle.y && particle.y < height - particle.size * 10) { 
            particle.y += 1; 
          } 
          if (mouse.y > particle.y && particle.y > particle.size * 10) { 
            particle.y -= 1; 
          } 
        } 
        
        // Draw particle 
        context.beginPath(); 
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2); 
        context.fillStyle = particle.color; 
        context.fill(); 
      }); 
      
      animationFrameId = requestAnimationFrame(animate); 
    }; 
    
    animate(); 
    
    return () => { 
      cancelAnimationFrame(animationFrameId); 
    }; 
  }, [context, particles, width, height, background, mouse]); 


  return ( 
    <canvas 
      ref={canvasRef} 
      id={id} 
      className={cn("absolute inset-0", className)} 
    /> 
  ); 
};