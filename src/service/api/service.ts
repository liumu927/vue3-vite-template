
import baseRequest from '@/service/index';

const baseURL = '/api'

// 使用示例
export const exmpleRequest = (file: File) => {
	const formData = new FormData()
	formData.append('board', file)
	return baseRequest({
		baseURL,
		url: '/get_board_prohibited_area',
		method: 'post',
		data: formData,
	})
}