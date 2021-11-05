import { AnyOptions } from '@/types'
/**
 * 获取 storage 缓存数据
 * @param {*} type 类型   local：localStorage   session：sessionStorage
 * @param {*} name 缓存数据name名
 * @returns
 */
export const getStorage = (
	type: 'session' | 'local',
	name: string
): string | null | undefined => {
	const storageType: string = type || 'local'
	let result
	if (storageType === 'local') {
		result = localStorage.getItem(name) ? localStorage.getItem(name) : ''
	} else if (storageType === 'session') {
		result = sessionStorage.getItem(name) ? sessionStorage.getItem(name) : ''
	}
	return result
}

/**
 * 设置 storage 缓存数据
 * @param {*} type 类型   local：localStorage   session：sessionStorage
 * @param {*} name 缓存数据name名
 * @param {*} content 缓存的数据内容
 */
export const setStorage = (
	type: 'local' | 'session',
	name: string,
	content: string
): void => {
	const storageType: string = type || 'local'
	let data: string = content
	if (typeof data === 'object') {
		data = JSON.stringify(content)
	}
	if (storageType === 'local') {
		localStorage.setItem(name, data)
	} else if (storageType === 'session') {
		sessionStorage.setItem(name, data)
	}
}

export const omit = (obj: AnyOptions, fields: string[]): AnyOptions => {
	const shallowCopy = { ...obj }
	for (let i = 0; i < fields.length; i++) {
		const key = fields[i]
		delete shallowCopy[key]
	}
	return shallowCopy
}

export function searchParamsToUrlQuery(
	searchParams: URLSearchParams
): AnyOptions {
	const query: AnyOptions = {}
	searchParams.forEach((value, key) => {
		if (typeof query[key] === 'undefined') {
			query[key] = value
		} else if (Array.isArray(query[key])) {
			;(query[key] as string[]).push(value)
		} else {
			query[key] = [query[key] as string, value]
		}
	})
	return query
}
