import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout';
export const useCategoryStore = defineStore('category', () => {
// 导航列表数据管理
// state 导航列表数据
const CategoryList = ref([])

//action 获取导航列表的方法
const getCategory = async()=>{
  const res = await getCategoryAPI()
  CategoryList.value = res.result
}
   
  return{
    CategoryList,
    getCategory
  }
})