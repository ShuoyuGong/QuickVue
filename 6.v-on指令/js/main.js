var app = new Vue({
    el:"#submit",
    methods:{
        onClick:function(){
          console.log("clicked");
        },
        onEnter:function(){
            console.log("Enter");
        },
        onOut:function(){
            console.log("Out");
        },
        onSubmit:function(e){
            e.preventDefault();
            console.log("submitted");
        },
    }
});

var app1 = new Vue({
    el:"#submit1",
    methods:{
        onSubmit:function(e){
            e.preventDefault();
            console.log("submitted");
        }
    }
});

var app1 = new Vue({
    el:"#keyup",
    methods:{
        onSubmit:function(e){
            e.preventDefault();
            console.log("submitted");
        },
        onkeyup:function(){
            // e.preventDefault();
            console.log("key up");
        }
        // onEnter:function(){
        //     console.log("onEnter");
        // }
    }
});

var app1 = new Vue({
    el:"#enter",
    methods:{
        onSubmit:function(e){
            e.preventDefault();
            console.log("submitted");
        },
        onEnter:function(){
            console.log("onEnter");
        }
    }
});

var app1 = new Vue({
    el:"#enter1",
    methods:{
        onSubmit:function(e){
            e.preventDefault();
            console.log("submitted");
        },
        onEnter:function(){
            console.log("onEnter");
        }
    }
});