import { useState } from 'react'
import {
  aboutInfo,
  educationInfo,
  contactInfo,
  skillsInfo,
  projectsInfo,
  professionalExperience,
} from '../data/content'
import ChatAppAboutMe from './ChatAppAboutMe'

const VIEW_TITLES = {
  about: 'About Me & Resume',
  professional: 'Professional Experience',
  education: 'Education',
  skills: 'Skills',
  projects: 'Personal Projects',
  contact: 'Contact',
}

// Groups same-company entries into one timeline card (logo + company name
// shown once) instead of a duplicate header per role. `professionalExperience`
// is static, so this only needs to run once at module load.
function groupByCompany(experiences) {
  const groups = []
  const byCompany = new Map()
  for (const exp of experiences) {
    let group = byCompany.get(exp.company)
    if (!group) {
      group = { company: exp.company, roles: [] }
      byCompany.set(exp.company, group)
      groups.push(group)
    }
    group.roles.push(exp)
  }
  return groups
}
const experienceGroups = groupByCompany(professionalExperience)

// Portfolio content pages (About / Professional / Education / Skills / Projects
// / Contact) plus the CHAT WITH AI experience. `contentView` selects which;
// back navigation is owned by App.
//
// CHAT WITH AI renders the Persona 5-style chat (its own header + CLOSE
// control), so it replaces the standard content chrome entirely. The chat's
// CTAs jump to other sections via `onNavigate`. ABOUT ME is a separate, static
// page — the chatbot and the summary are deliberately distinct.
export default function ContentScreen({ contentView, onBack, onHover, onSelect, onNavigate }) {
  // Which experience/project cards are expanded, keyed by id/name. Toggled
  // independently — opening one doesn't close the others. The newest role in
  // each experience group starts open; everything else starts collapsed.
  const [openExperiences, setOpenExperiences] = useState(
    () => new Set(experienceGroups.map((group) => group.roles[0].id))
  )
  const [openProjects, setOpenProjects] = useState(() => new Set())

  function toggleSetItem(setState, key) {
    setState((prev) => {
      const next = new Set(prev)
      next.has(key) ? next.delete(key) : next.add(key)
      return next
    })
  }

  if (contentView === 'chat') {
    return (
      <section className="screen content-screen content-screen-chat">
        <ChatAppAboutMe onBack={onBack} onHover={onHover} onSelect={onSelect} onNavigate={onNavigate} />
      </section>
    )
  }

  return (
    <section className="screen content-screen">
      <div className="content-header">
        <p className="screen-label">PORTFOLIO PAGE</p>
        <h2>{VIEW_TITLES[contentView] ?? 'Portfolio'}</h2>
      </div>

      {contentView === 'about' && (
        <div className="content-card about-card">
          {aboutInfo.intro.map((paragraph) => (
            <p key={paragraph} className="page-copy">{paragraph}</p>
          ))}
          <ul className="about-highlights">
            {aboutInfo.highlights.map((item) => <li key={item}>{item}</li>)}
          </ul>
          {aboutInfo.resumeHref && (
            <a className="resume-btn" href={aboutInfo.resumeHref} target="_blank" rel="noreferrer" onMouseEnter={onHover}>
              Download Résumé
            </a>
          )}
        </div>
      )}

      {contentView === 'professional' && (
        <div className="content-card experience-list-card">
          {experienceGroups.map((group) => (
            <div className="experience-company-group" key={group.company}>
              <div className="experience-company-header">
                <img src="/logo/accenture-logo.png" alt="Accenture logo" className="experience-company-logo" />
                <p className="experience-company">{group.company}</p>
              </div>
              <div className="experience-timeline">
                {group.roles.map((exp) => {
                  const isOpen = openExperiences.has(exp.id)
                  return (
                    <div className={`experience-role-item ${isOpen ? 'is-open' : ''}`} key={exp.id}>
                      <button
                        type="button"
                        className="experience-toggle"
                        onClick={() => { onSelect?.(); toggleSetItem(setOpenExperiences, exp.id) }}
                        onMouseEnter={onHover}
                        aria-expanded={isOpen}
                      >
                        <div className="experience-head">
                          <h3 className="experience-role">{exp.role}</h3>
                          <p className="experience-meta">{exp.duration} · {exp.location}</p>
                        </div>
                        <span className="experience-chevron" aria-hidden="true">{isOpen ? '▲' : '▼'}</span>
                      </button>

                      {isOpen && (
                        <div className="experience-body">
                          <p className="page-copy experience-summary">{exp.summary}</p>
                          {exp.sections.map((section) => (
                            <div className="experience-section" key={section.title}>
                              <h4 className="experience-section-title">{section.title}</h4>
                              <ul className="experience-list">
                                {section.points.map((point) => <li key={point}>{point}</li>)}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {contentView === 'education' && (
        <div className="content-card edu-card">
          <div className="edu-head">
            <h3 className="edu-degree">{educationInfo.degree}</h3>
            <div className="edu-school-row">
              <img src="/logo/usc-logo.svg" alt="University of San Carlos logo" className="edu-school-logo" />
              <p className="edu-school">{educationInfo.school}</p>
            </div>
            <p className="edu-meta">{educationInfo.duration} · {educationInfo.location}</p>
          </div>
        </div>
      )}

      {contentView === 'skills' && (
        <div className="content-card skills-card">
          <p className="page-copy skills-intro">{skillsInfo.intro}</p>
          <div className="skills-grid">
            {skillsInfo.categories.map((category) => (
              <div className="skill-category" key={category.title}>
                <h4 className="skill-category-title">{category.title}</h4>
                <div className="skill-tags">
                  {category.items.map((item) => (
                    <span className="skill-tag" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {contentView === 'projects' && (
        <div className="content-card projects-card">
          <p className="page-copy projects-intro">{projectsInfo.intro}</p>
          <div className="projects-grid">
            {projectsInfo.projects.map((project) => {
              const isOpen = openProjects.has(project.name)
              const toggle = () => { onSelect?.(); toggleSetItem(setOpenProjects, project.name) }
              return (
                <button
                  type="button"
                  className={`project-card ${isOpen ? 'is-open' : ''}`}
                  key={project.name}
                  onClick={toggle}
                  onMouseEnter={onHover}
                  aria-expanded={isOpen}
                >
                  <img src={project.thumbnail} alt={`${project.name} screenshot`} className="project-thumb" />
                  <h4 className="project-name">{project.name}</h4>
                  {isOpen && <p className="project-blurb">{project.blurb}</p>}
                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span className="tech-tag" key={tech}>{tech}</span>
                    ))}
                  </div>
                  <span className="project-more">{isOpen ? 'Show less ▲' : 'Read more ▼'}</span>
                </button>
              )
            })}
          </div>
        </div>
      )}

      {contentView === 'contact' && (
        <div className="content-card contact-card">
          <p className="page-copy contact-blurb">{contactInfo.blurb}</p>
          <div className="contact-links">
            {contactInfo.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
            ))}
          </div>
        </div>
      )}

      <button type="button" className="back-button" onClick={onBack} onMouseEnter={onHover}>BACK TO MENU</button>
    </section>
  )
}
