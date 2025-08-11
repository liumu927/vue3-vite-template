/**
 * @description - 这是一个测试服务是否启动成功的 api
 */
import { http } from '../instance'

export const testApi = {
  /**
   * 测试服务状态
   * @returns
   */
  checkServiceStatus() {
    return http.get('/health-check')
  },
}
