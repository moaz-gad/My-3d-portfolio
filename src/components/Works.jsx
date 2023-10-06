import Tilt from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { browser } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  isMobile,
}) => {
  // if (isMobile) {
  //   return (
  //     <>
  //       <div className="relative w-full h-[230px]">
  //         <img
  //           src={image}
  //           alt={name}
  //           className="w-full h-full object-cover rounded-2xl"
  //         />
  //         <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
  //           <div
  //             onClick={() => window.open(source_code_link, "_blank")}
  //             className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
  //           >
  //             <img
  //               src={browser}
  //               alt="browser"
  //               className="w-1/2 h-1/2 object-contain"
  //             />
  //           </div>
  //         </div>
  //       </div>
  //       <div className="mt-5">
  //         <h3 className="text-white font-bold text-[24px]">{name}</h3>
  //         <p className="mt-2 text-secondary text-[14px]">{description}</p>
  //       </div>
  //       <div className="mt-4 flex flex-wrap gap-2">
  //         {tags.map((tag) => (
  //           <p key={tag.name} className={`text-[14px] ${tag.color}`}>
  //             #{tag.name}
  //           </p>
  //         ))}
  //       </div>
  //     </>
  //   )
  // }

  return (
    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[300px] w-full"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={browser}
              alt="browser"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  )
}

const Works = ({ isMobile }) => {
  return (
    <>
      <p className={styles.sectionSubText}>My work</p>
      <h2 className={styles.sectionHeadText}>Projects.</h2>

      <div className="w-full flex">
        Ventures in Frontend Development: Discover a Glimpse of My Projects.
        Explore a selection of projects that shed light on my journey in
        frontend development. These endeavors encapsulate my approach to
        problem-solving and highlight my dedication to creating meaningful user
        experiences.
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            isMobile={isMobile}
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")
