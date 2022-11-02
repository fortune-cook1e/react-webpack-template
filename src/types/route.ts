import { ComponentType } from 'react'
import { RouteConfig } from 'react-router-config'

export interface IRouteItem extends RouteConfig {
	path: string
	component: ComponentType
	icon?: string
	auth?: boolean
	exact?: boolean
	children?: IRouteItem[]
	redirect?: string
	title?: string
}
