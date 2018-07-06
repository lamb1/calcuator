<template>
  <div class="calculator">
    <div class="whiteboard">
      <div class="data">
        <p v-for="item in data">{{item}}</p>
      </div>
      <div class="operater">
        <p v-for="item in operater">{{item}}</p>
      </div>

    </div>
    <div class="bottom">
      <div class="operator">
        <ul>
          <li @click="checkNum('c')" :class="{'on' : active=='c'}">c</li>
          <li @click="checkNum('÷')" :class="{'on' : active=='÷'}">÷</li>
          <li @click="checkNum('×')" :class="{'on' : active=='×'}">×</li>
        </ul>
      </div>
      <div class="operator2">
        <ul>
          <li @click="checkNum('delete')" :class="{'on' : active=='delete'}" class="delete"></li>
          <li @click="checkNum('+')" :class="{'on' : active=='+'}">＋</li>
          <li @click="checkNum('-')" :class="{'on' : active=='-'}">－</li>
          <li @click="checkNum('=')" :class="{'on' : active=='='}">＝</li>
        </ul>
      </div>
      <div class="num">
        <ul>
          <li v-for="item in num" @click="checkNum(item)" :class="{'on' : active==item}">{{item}}</li>
        </ul>
      </div>
    </div>

  </div>
</template>
<script>
  var map

export default {
    name:'Index',
    data () {
        return {
            num: [],
            active: null,
            data: [''],
            operater:[]

        }
    },
    components:{

    },

    computed:{

    },
    mounted: function () {
        for(var i=1;i <= 9;i++){
            this.num.push(i);
        }
        this.num.push("%");
        this.num.push(0);
        this.num.push(".");
    },
    methods: {

      checkNum: function(i){
          var _this = this;
          _this.active = i;
          switch(i){

            case "delete":
            _this.data[_this.data.length-1] = _this.data[_this.data.length-1].substr(0, _this.data[_this.data.length-1].length - 1);
            break;

            case "-":
            if(_this.data[_this.data.length-1]==""){
                 _this.operater[_this.operater.length-1] = "－";
            }else{
                 _this.operater[_this.operater.length] = "－";
            }
             _this.data[_this.data.length] = "";
            break;

            case "+":
            if(_this.data[_this.data.length-1]==""){
                console.log(_this.operater)
                console.log(_this.operater.length)
                 _this.operater[_this.operater.length-1] = "＋";
            }else{
                console.log(_this.operater.length)
                 _this.operater[_this.operater.length] = "＋";
                console.log(_this.operater)
            }
            _this.data[_this.data.length] = "";
            break;

            case "÷":
            if(_this.data[_this.data.length-1]==""){
                 _this.operater[_this.operater.length-1] = "÷";
            }else{
                 _this.operater[_this.operater.length] = "÷";
            }
            _this.data[_this.data.length] = "";
            break;

            case "×":
            if(_this.data[_this.data.length-1]==""){
                 _this.operater[_this.operater.length-1] = "×";
            }else{
                 _this.operater[_this.operater.length] = "×";
            }
            _this.data[_this.data.length] = "";
            break;

            case "=":
             _this.operater = "";
            _this.data[_this.data.length] = "";
            break;

            case "c":
            _this.data = [''];
            _this.operater = [];
            break;

            case "%":

            break;

            default:
            if(_this.data[_this.data.length-1]==undefined){
                _this.data[_this.data.length-1] = '';
            }
            _this.data[_this.data.length-1] += String(i);
            break;

          }

          setTimeout(function(){
              _this.active = null;
          },150)
      }
    }
}



</script>
<style>

.calculator{
  position: relative;
  width: 100%;
  height: 100%;
  background: url('../assets/img/AodaCat.png') no-repeat center center;
  background-size: 100%;
  opacity: .8;
    overflow: hidden;
    color: #ffffff;
    text-shadow: 0px 0px 5px #323233;
}
.bottom{
    overflow: hidden;
    position: absolute;
    bottom: 0
}
.data{
    float: right;
}
.operater{
    text-align: left;
    padding: 5px;
    float: left;
    margin-top: 16px;
}
.operator2{
    float: right;
    width: 20%;
    background-color: rgba(109, 172, 214, 0.5);
}
.operator2 li{
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
    font-size: 30px;
    border-top: 1px solid #c1c1c1;
    border-right: 1px solid #c1c1c1;
    height: 80px;
}
.operator2 li:last-child{
    padding: 54px 0;
    border-bottom: 1px solid #c1c1c1;
    height: 160px;
}
.whiteboard{
    width: 80%;
    height: 60px;
    text-align: right;
    font-size: 24px;
    box-sizing: border-box;
}
.num{
    width: 80%;
    float: left;
    overflow: hidden;
    border-bottom: 1px solid #c1c1c1;
    background-color: rgba(240, 247, 252, 0.5);
}
.operator{
    width: 80%;
    float: left;
    overflow: hidden;
    background-color: rgba(109, 172, 214, 0.5);
}
.num li,.operator li{
    float: left;
    width: 33.33%;
    text-align: center;
    font-size: 24px;
    padding: 20px;
    box-sizing: border-box;
    border-left: 1px solid #c1c1c1;
    border-top: 1px solid #c1c1c1;
    height: 80px;
}
.operator li{
    font-size: 30px;
}
.num li:nth-child(3n),.operator li:nth-child(3n){
    border-right: 1px solid #c1c1c1;
}
li.on{
    background: rgba(246, 245, 245,.2)
}
.delete{
    background: url('../assets/img/delete.png') no-repeat center center;
}
</style>
