"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const projects = [
  {
    title: "Project 1",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=center",
  },
  {
    title: "Project 2",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=center",
  },
  {
    title: "Project 3",
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop&crop=center",
  },
  {
    title: "Project 4",
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop&crop=center",
  },
  {
    title: "Project 5",
    src: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500&h=300&fit=crop&crop=center",
  },
]

const StickyCard_001 = ({
  i,
  title,
  src,
  progress,
  range,
  targetScale,
}: {
  i: number
  title: string
  src: string
  progress: any
  range: [number, number]
  targetScale: number
}) => {
  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div
      className="sticky flex items-center justify-center"
      style={{ top: `calc(50vh - 150px + ${i * 14}px)`, zIndex: i + 1 }}
    >
      <motion.div
        style={{ scale }}
        className="rounded-2xl sm:rounded-3xl lg:rounded-[2rem] relative flex origin-top flex-col overflow-hidden shadow-xl
                   h-[200px] w-[90%] max-w-[500px]
                   sm:h-[240px]
                   md:h-[280px]
                   lg:h-[300px]"
      >
        <img src={src || "/placeholder.svg"} alt={title} className="h-full w-full object-cover" />
      </motion.div>
    </div>
  )
}

const ImagesScrollingAnimation = () => {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  return (
    <section ref={container} style={{ position: 'relative', height: `${projects.length * 60 + 40}vh` }}>
      {projects.map((project, i) => {
        const targetScale = Math.max(0.85, 1 - (projects.length - i - 1) * 0.04)
        return (
          <StickyCard_001
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * (1 / projects.length), 1]}
            targetScale={targetScale}
          />
        )
      })}
    </section>
  )
}

export { ImagesScrollingAnimation, StickyCard_001 }
