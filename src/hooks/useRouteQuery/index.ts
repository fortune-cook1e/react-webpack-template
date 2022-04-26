import { searchParamsToUrlQuery } from '@/utils'

export interface ParsedUrl {
	hash: string
	hostname?: string | null
	href: string
	pathname: string
	port?: string | null
	protocol?: string | null
	query: Record<string, any>
	search: string
}

export const useRouterQuery = (): ParsedUrl => {
	const url = location.href
	const parsedURL = new URL(url)

	return {
		hash: parsedURL.hash,
		hostname: parsedURL.hostname,
		href: parsedURL.href,
		pathname: parsedURL.pathname,
		port: parsedURL.port,
		protocol: parsedURL.protocol,
		query: searchParamsToUrlQuery(parsedURL.searchParams),
		search: parsedURL.search
	}
}
