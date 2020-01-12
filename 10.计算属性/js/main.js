var app = new Vue({
    el:"#app",
    data:{
            id:"龚烁宇",
            math:10,
            english:90,
            chinese:100,
    },
    computed:{
        sum:function(){
            return parseFloat(this.math) + parseFloat(this.english) + parseFloat(this.chinese);
        },
        average:function(){
            return Math.round(this.sum/3);
        }
    }
});