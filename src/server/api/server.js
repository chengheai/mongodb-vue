import axios from '../../util/axios'

// 获取英雄列表
export async function get_heros(params) {
  return axios.get('/api/hero', { params });
}

// 编辑英雄信息
export async function put_heros(params) {
  return axios.put(`/api/hero/${params._id}`, params);
}

// 添加新英雄
export async function post_hero(params) {
  return axios.post(`/api/hero`, params)
}

// 删除英雄
export async function delete_hero(params) {
  return axios.delete(`/api/hero/${params}`, params)
}

// 英雄添加图片
export async function put_add_pic(params) {
  return axios.put(`/api/addpic/${params.id}`,params)
}

// 获取单个英雄详情
 export async function get_hero_detail(params) {
   return axios.get(`/api/hero/${params}`, params)
 }