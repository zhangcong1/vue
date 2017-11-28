var router = new VueRouter({
    linkActiveClass:"active",
    routes:[
        {path:"/",component:Home},
        {
            path:"/info",
            component:Info,
            children:[
                {path:"",component:List},
                {path:"list/:id",component:Con}
            ]
        },
        {
            path:"/product",
            component:product,
            children:[
                {path:"",components:{
                    left:left,
                    right:right
                }}
            ]

        },
        {path:"/login",component:login},
        {path:"*",redirect:"/"}
    ]
})