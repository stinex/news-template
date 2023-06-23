import { StaticImageData } from "next/image"

export interface ILinkHeader {
  name: string
  class?: string
}

export interface IBarNews {
  img: StaticImageData
  title: string
  description: string
  date: string
  type: string
}

export interface IBarAdv {
  img: StaticImageData
  title: string
  description: string
  site: string
  siteIcon: StaticImageData
  link: string
}