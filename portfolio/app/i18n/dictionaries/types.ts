export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  type: string;
  description: string;
  points: string[];
  technologies: string[];
};

export type ProjectItem = {
  title: string;
  subtitle: string;
  icon: string;
  category: string;
  description: string;
  features: string[];
  technologies: string[];
  github: string;
};

export type Highlight = {
  title: string;
  text: string;
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  resumeUrl: string;
  nav: {
    home: string;
    about: string;
    experience: string;
    projects: string;
    contact: string;
    subtitle: string;
    cvButton: string;
    cvButtonMobile: string;
    menuAria: string;
  };
  hero: {
    eyebrow: string;
    greetingPrefix: string;
    name: string;
    paragraph1: string;
    paragraph2: string;
    skills: string[];
    ctaProjects: string;
    ctaContact: string;
  };
  aboutMe: {
    eyebrow: string;
    title: string;
    intro: string;
    motivationTitle: string;
    motivation1: string;
    motivation2: string;
    motivation3: string;
    highlights: Highlight[];
    techTitle: string;
    techText: string;
    programmingLanguagesLabel: string;
    frameworksLabel: string;
    toolsLabel: string;
    langSectionTitle: string;
    langSectionText: string;
    cvDownload: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    intro: string;
    items: ExperienceItem[];
  };
  projects: {
    eyebrow: string;
    title: string;
    intro: string;
    coreFeaturesLabel: string;
    technologiesLabel: string;
    viewProjectLabel: string;
    items: ProjectItem[];
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    contactInfoTitle: string;
    contactInfoText: string;
    emailLabel: string;
    locationLabel: string;
    locationValue: string;
    profilesTitle: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailFieldLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    submitNote: string;
    mailSubjectPrefix: string;
    mailBodyNameLabel: string;
    mailBodyEmailLabel: string;
    mailBodyMessageLabel: string;
  };
};
