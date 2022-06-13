interface IProject {
  projectTitle: string
  projectDescription: string
  image: string
}

export interface Props {
  projects: IProject[]
}
