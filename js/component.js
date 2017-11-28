var Home = Vue.component("Home",{
    template:`
        <div class="Home">
            <Nav></Nav>
            <div class="img">
                <img src="imgs/2.jpeg" alt="">
            </div>
        </div>
    `
});
var Nav = Vue.component("Nav",{
    template:`
        <div class="Nav">
            <router-link v-for="(item,key) in navData" :to="item.url" :key="key" exact>{{item.title}}</router-link>
            <router-link to="/login" exact v-if="!islogin">登录</router-link>
            
            <span v-if="islogin" class="info" @click="show()">
       {{name}}
            <span  class="logout" v-show="isshow" @click="logout()">退出</span>
       </span>
        </div>
    `,
    data(){
        return {
            navData:[
                {title:"首页",url:"/"},
                {title:"公司简介",url:"/info"},
                {title:"产品介绍",url:"/product"}
            ],
            islogin:false,
            name:"",
            isshow:false
        }
    },
    created(){
        this.name=this.get("login","name");
        this.islogin=this.get("login","name");
    },
    methods:{
        show(){
            this.isshow=!this.isshow
        },
        logout(){
            this.del("login");
            router.push("/login")
        }
    }
})
var login = Vue.component("login",{
    template:`
    <div class="login">
        <header class="mui-bar mui-bar-nav">
            <span class="mui-icon mui-icon-undo" @click="back()"></span>
			<h1 class="mui-title">登录</h1>
		</header>
		<div class="mui-content">
			<form id='login-form' class="mui-input-group">
				<div class="mui-input-row">
					<label>账号</label>
					<input id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入账号">
				</div>
				<div class="mui-input-row">
					<label>密码</label>
					<input id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码">
				</div>
			</form>
			<div class="mui-content-padded">
				<button id='login' class="mui-btn mui-btn-block mui-btn-primary" @click="submit()">登录</button>
			</div>
			<div class="mui-content-padded oauth-area">

			</div>
		</div>
    </div>
    `,
    methods:{
        back(){
            router.push("/");
        },
        submit(){
            var obj={"name":document.querySelector("#account").value}
            this.save("login",obj);
            router.push("/")
        }
    }
})
var Info = Vue.component("Info",{
    template:`
        <div class="Info">
            <Nav></Nav>
            <transition name="opacity" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
        
    `
});
var List = Vue.component("List",{
    template:`
                    <ul class="mui-table-view"">
    <li class="mui-table-view-cell mui-media">
        <router-link to="/info/list/1">
            <img class="mui-media-object mui-pull-left" src="imgs/2.jpeg">
            <div class="mui-media-body">
                幸福
                <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
            </div>
        </router-link>
    </li>
    <li class="mui-table-view-cell mui-media">
        <router-link to="/info/list/2">
            <img class="mui-media-object mui-pull-left" src="imgs/2.jpeg">
            <div class="mui-media-body">
                木屋
                <p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
            </div>
        </router-link>
    </li>
    <li class="mui-table-view-cell mui-media">
        <router-link to="/info/list/3">
            <img class="mui-media-object mui-pull-left" src="imgs/2.jpeg">
            <div class="mui-media-body">
                CBD
                <p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
            </div>
        </router-link>
    </li>
</ul>
    `
});
var Con = Vue.component("Con",{
    template:`
            <div>
                <h2 style='padding-top: 44px;text-align: center'>{{conData[$route.params.id-1].title}}</h2>
                <h3 style='text-align: center'>{{conData[$route.params.id-1].con}}</h3>
            </div>`,
    data(){
        return {
            conData:[
                {title:"幸福",con:"能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？"},
                {title:"木屋",con:"想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖."},
                {title:"CBD",con:"烤炉模式的城，到黄昏，如同打翻的调色盘一般."},
            ]
        }
    }
})
var product = Vue.component("product",{
    template:`
        <div class="product">
            <Nav></Nav>
            <router-view name="left"></router-view>
            <router-view name="right"></router-view>
        </div>
    `,
    beforeRouteEnter(to,from,next){
        next(function(vm){
            if(!vm.get("login","name")){
                router.push("/login");
            }
        })
    }
})

var left = Vue.component("left",{
    template:`
        <div class="left">
            <ul>
                <li>
                    <router-link to="" tag="h2" active-class="aa">php</router-link>
                    <ul style="margin-left: 40px">
                        <li><router-link to="#one" tag="h4" active-class="aa">smarty</router-link></li>
                        <li><router-link to="#two" tag="h4" active-class="aa">thinkphp</router-link></li>
                    </ul>
                </li>
                <li>
                    <router-link to="" tag="h2" active-class="aa">php</router-link>
                    <ul style="margin-left: 40px">
                        <li><router-link to="#three" tag="h4" active-class="aa">smarty</router-link></li>
                        <li><router-link to="#four" tag="h4" active-class="aa">thinkphp</router-link></li>
                    </ul>
                </li>
            </ul>
        </div>
    `,
    watch:{
        $route(){
            var hash=this.$route.hash.slice(1);
            console.log(hash)
            var vm = this
            function animate () {
                if (TWEEN.update()) {
                    requestAnimationFrame(animate)
                }
            }
            new TWEEN.Tween({ tweeningNumber: document.querySelector(".right").scrollTop })
                .easing(TWEEN.Easing.Quadratic.Out)
                .to({ tweeningNumber: document.querySelector("#"+hash).offsetTop }, 500)
                .onUpdate(function () {
                    document.querySelector(".right").scrollTop = this.tweeningNumber.toFixed(0)
                })
                .start()
            animate()
        }
    }
})

var right = Vue.component("right",{
    template:`
        <div class="right">
            <div class="floor" id="one">
                <h2>Smarty讲解</h2>
                <p>
                    表示目标路由的链接。当被点击后，内部会立刻把 to 的值传到 router.push()，所以这个值可以是一个字符串或者是描述目标位置的对象。
                </p>
                <p>
                    表示目标路由的链接。当被点击后，内部会立刻把 to 的值传到 router.push()，所以这个值可以是一个字符串或者是描述目标位置的对象。
                </p>
                <p>
                    表示目标路由的链接。当被点击后，内部会立刻把 to 的值传到 router.push()，所以这个值可以是一个字符串或者是描述目标位置的对象。
                </p>
                <p>
                    表示目标路由的链接。当被点击后，内部会立刻把 to 的值传到 router.push()，所以这个值可以是一个字符串或者是描述目标位置的对象。
                </p>
                <p>
                    表示目标路由的链接。当被点击后，内部会立刻把 to 的值传到 router.push()，所以这个值可以是一个字符串或者是描述目标位置的对象。
                </p>
                <p>
                    表示目标路由的链接。当被点击后，内部会立刻把 to 的值传到 router.push()，所以这个值可以是一个字符串或者是描述目标位置的对象。
                </p>
            </div>
            <div class="floor" id="two">
                <h2>thinkphp讲解</h2>
                <p>
                    表示目标路由的链接。当被点击后，内部会立刻把 to 的值传到 router.push()，所以这个值可以是一个字符串或者是描述目标位置的对象。
                </p>
                <p>
                    表示目标路由的链接。当被点击后，内部会立刻把 to 的值传到 router.push()，所以这个值可以是一个字符串或者是描述目标位置的对象。
                </p>
                <p>
                    表示目标路由的链接。当被点击后，内部会立刻把 to 的值传到 router.push()，所以这个值可以是一个字符串或者是描述目标位置的对象。
                </p>
                <p>
                    表示目标路由的链接。当被点击后，内部会立刻把 to 的值传到 router.push()，所以这个值可以是一个字符串或者是描述目标位置的对象。
                </p>
            </div>
            <div class="floor" id="three">
                <h2>Smarty讲解</h2>
                <p>
                    表示目标路由的链接。当被点击后，内部会立刻把 to 的值传到 router.push()，所以这个值可以是一个字符串或者是描述目标位置的对象。
                </p>
                <p>
                    表示目标路由的链接。当被点击后，内部会立刻把 to 的值传到 router.push()，所以这个值可以是一个字符串或者是描述目标位置的对象。
                </p>
                <p>
                    表示目标路由的链接。当被点击后，内部会立刻把 to 的值传到 router.push()，所以这个值可以是一个字符串或者是描述目标位置的对象。
                </p>
                <p>
                    表示目标路由的链接。当被点击后，内部会立刻把 to 的值传到 router.push()，所以这个值可以是一个字符串或者是描述目标位置的对象。
                </p>
                <p>
                    表示目标路由的链接。当被点击后，内部会立刻把 to 的值传到 router.push()，所以这个值可以是一个字符串或者是描述目标位置的对象。
                </p>
                <p>
                    表示目标路由的链接。当被点击后，内部会立刻把 to 的值传到 router.push()，所以这个值可以是一个字符串或者是描述目标位置的对象。
                </p>
                <p>
                    表示目标路由的链接。当被点击后，内部会立刻把 to 的值传到 router.push()，所以这个值可以是一个字符串或者是描述目标位置的对象。
                </p>
            </div>
            <div class="floor" id="four">
                <h2>thinkphp讲解</h2>
                <p>
                    表示目标路由的链接。当被点击后，内部会立刻把 to 的值传到 router.push()，所以这个值可以是一个字符串或者是描述目标位置的对象。
                </p>
                <p>
                    表示目标路由的链接。当被点击后，内部会立刻把 to 的值传到 router.push()，所以这个值可以是一个字符串或者是描述目标位置的对象。
                </p>
                <p>
                    表示目标路由的链接。当被点击后，内部会立刻把 to 的值传到 router.push()，所以这个值可以是一个字符串或者是描述目标位置的对象。
                </p>
                <p>
                    表示目标路由的链接。当被点击后，内部会立刻把 to 的值传到 router.push()，所以这个值可以是一个字符串或者是描述目标位置的对象。
                </p>
            </div>
        </div>
    `
})