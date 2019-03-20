export default{
    //添加
    addStorage:function(name, value) {
        window.localStorage.setItem(name,value)
    },
	//读取
    getStorage:function(name) {
       return window.localStorage.getItem(name)
    },
    //删除cookie
    delStorage:function(name){
        storage.removeItem(name);
    },
}