interface IService {
  title: string
  icon: string
  description: string
}

export interface Props {
  title: string
  services: IService[]
}
