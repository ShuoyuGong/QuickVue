var app = new Vue({
    el:'#app',
    data:{
        foodList:['葱','姜','蒜'],
        foodInfo:[
            {
                name:"葱",
                price:10,
                discount:0.3,
            },
            {
                name:"姜",
                price:20,
                discount:0.5,
            },
            {
                name:"蒜",
                price:15,
                // discount:0.8,
            },
        ],  
    }
});