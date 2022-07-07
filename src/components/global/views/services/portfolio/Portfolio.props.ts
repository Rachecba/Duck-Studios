interface IProject {
  projectTitle: string
  projectDescription: string
  images: string[],
  socialMedia?: ISocialMedia[],
  projectLink?: IProjectLink
}

interface ISocialMedia {
  type:string,
  url:string
}

interface IProjectLink {
  type:string,
  url:string,
  name:string
}


export interface Props {
  projects: IProject[]
}
