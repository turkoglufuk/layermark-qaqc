import request from '@/utils/request'

export function fetchTaskList() {
  return request({
    url: '/workorder/sync/dcw-fma-valve-bps-01/task-list',
    method: 'GET'
  })
}

export default {
  fetchTaskList
}
