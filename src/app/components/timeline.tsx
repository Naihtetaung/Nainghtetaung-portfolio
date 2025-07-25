import { CalendarIcon } from "@radix-ui/react-icons";
import { BiBriefcase } from "react-icons/bi";


interface TimelineItemProps {
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
  achievements: string[];
  logo?: string;
  isLast?: boolean;
}

export function TimelineItem({
  company,
  position,
  duration,
  description,
  technologies,
  achievements,
  logo,
  isLast
}: TimelineItemProps) {
  return (
    <div className="relative pl-20 animate-fade-in">
      {/* Timeline dot */}
      <div className="absolute left-6 w-4 h-4 bg-black rounded-full border-4 border-white shadow-lg"></div>
      
      {/* Company logo placeholder */}
      <div className="absolute left-2 top-12 w-12 h-12 bg-gray-100 rounded-lg border-2 border-gray-200 flex items-center justify-center hover-scale">
        {logo ? (
          <img src={logo} alt={`${company} logo`} className="w-8 h-8 object-contain grayscale" />
        ) : (
          <BiBriefcase className="w-6 h-6 text-gray-400" />
        )}
      </div>
      
      {/* Content card */}
      <div className="bg-transparent border-2 border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-1">{position}</h3>
            <h4 className="text-xl text-muted font-semibold">{company}</h4>
          </div>
          <div className="flex items-center text-gray-500 mt-2 md:mt-0">
            <CalendarIcon className="w-4 h-4 mr-2" />
            <span className="font-medium">{duration}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        
        {achievements.length > 0 && (
          <div className="mb-4">
            <h5 className="font-semibold text-primary mb-2">Key Achievements:</h5>
            <ul className="space-y-1">
              {achievements.map((achievement, index) => (
                <li key={index} className="text-gray-600 flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {technologies.length > 0 && (
          <div>
            <h5 className="font-semibold text-black mb-2">Technologies & Skills:</h5>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
