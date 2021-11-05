import { RouteConfig } from 'react-router-config'
import { ComponentType } from 'react'

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
