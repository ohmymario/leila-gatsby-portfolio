/** @jsx jsx */
import * as React from "react"
import { jsx } from "theme-ui"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import BGImage from "./bg-image"

type HeroProps = {
  children: React.ReactNode
  color?: string
  slim?: boolean
  image: IGatsbyImageData
}

const Hero = ({ children, color = ``, image, slim = true }: HeroProps) => (
  <section
    sx={{
      position: `relative`,
      height: slim ? [`300px`, `300px`] : [`500px`, `600px`, `700px`, `40vw`],
      maxHeight: `300px`,
      width: `100%`,
      overflow: `hidden`,
    }}
  >
    <BGImage color={color} slim={slim}>
      <GatsbyImage image={image} alt="" />
    </BGImage>
    {children}
  </section>
)

export default Hero
