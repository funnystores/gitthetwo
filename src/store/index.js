import Vue from 'vue' 
import Vuex from 'vuex'
Vue.use(Vuex)  //注册vuex插件
  

//创建vuex实列
 const store=new Vuex.Store({
    //状态：state里存放的是希望共享的数据
    state:{
        infro:"我是共享的数据",
        gender:1,//表示男,
        doall:200,
        person:{
            name:"小明",
            age:25,
            money:5000,
            addres:"北京"
        },
        word:[1,2,3,4,5,6]
    },
    getters:{    //computed
        sex(state){  //有两个默认参数，state表示所有的数据，getters表示计算机属性中的所有。
            return state.gender==1?"man":"women"
        }
    },
    //唯一修改state数据的方法
    mutations:{
        changeword(state){
           let narr=[...state.word]
           narr[0]=200
           state.word=narr
        },
        changepeople(state){
            state.person={...state.person,money:6000}
        },
        changedoall(state,payload){
            if(payload.sex==="man"){
                state.doall+=payload.num
            }else{
                state.doall-=payload.num
            }
        }
    }
    
})
export default store //导出，main js引入