var $ziti=(function(){
    var $main=$('#main');
    var $context=$(''
    +'<div class="ziti">'
    +'<div class="box">'
        +'<div class="top">字体'
        +'<span class="remove" id="remove">X</span>'
        +'</div>'
        +'<div class="content">'
            +'<div>'
                +'<span class="con1" id="con1">字体(F):</span>'
                +'<input type="text" id="con2" class="con2" value="微软雅黑">'
                +'<div class="con3" id="con3">'
                       +'<ul>'
                           +'<li>华文宋体</li>'
                           +'<li>华文细黑</li>'
                           +'<li>幼圆体</li>'
                           +'<li>楷书</li>'
                           +'<li>微软雅黑</li>'
                           +'<li>隶书</li>'
                           +'<li>宋体</li>'
                           +'<li>方正舒体</li>'
                       +'</ul>'
                   +'</div>'
            +'</div>'
            +'<div>'
               +'<span class="con4" id="con4">字型(Y):</span>'
               +'<input type="text" id="con5" class="con5" value="常规">'
               +'<div class="con6" id="con6">'
                       +'<ul>'
                          +'<li>常规</li>'
                          +'<li>斜体</li>'
                          +'<li>粗体</li>'
                          +'<li>粗偏斜体</li>'
                       +'</ul>'
              +'</div>'
            +'</div>'
            +'<div>'
               +'<span class="con7" id="con7">大小(S):</span>'
               +'<input type="text" id="con8" class="con8" value="16">'
               +'<div class="con9" id="con9">'
                       +'<ul>'
                           +'<li>6</li>'
                           +'<li>8</li>'
                           +'<li>10</li>'
                           +'<li>12</li>'
                           +'<li>14</li>'
                           +'<li>16</li>'
                           +'<li>18</li>'
                           +'<li>20</li>'
                       +'</ul>'
               +'</div>'
           +'</div>'
        //    <!-- 示例部分 -->
           +'<div>'
               +'<fieldset class="shili" id="shili">'
                   +'<legend>示例</legend>AaBbZzYy'
               +'</fieldset>'
               +'<span class="bottom">脚本(R):</span>'
               +'<input list="yuyan" value="西欧语言" class="yuyan">'
               +'<datalist id="yuyan">'
                   +'<option>西欧语言</option>'
                   +'<option>中文</option>'
                   +'<option>希腊语</option>'
                   +'<option>中欧字符</option>'
               +'</datalist>'
               +'<input type="button" value="确定" class="btn1" id="btn1">'
               +'<input type="button" value="取消" class="btn2" id="btn2">'
           +'</div>'
        +'</div>'
    +'</div>'
 +'</div>'
    )
    var $remove=$context.find('#remove');
    var $btnqueding=$context.find('#btn1');
    var $btnquxiao=$context.find('#btn2');
    var $con1=$context.find('#con2');
    var $con3=$context.find('#con3 ul li');
    var $con4=$context.find('#con5');
    var $con6=$context.find('#con6 ul li');
    var $con7=$context.find('#con8');
    var $con9=$context.find('#con9 ul li')
    var $shili=$context.find('#shili');
    function select(){
        for(let i=0;i<$con3.length;i++){
                 $($con3[i]).click(function(){
                    $con3.attr('class','')
                    $con3.eq(i).attr('class','xuanzhong');
                    $con1.val($($con3[i]).html())
                    $con1.select();
                    $shili.css({ 'font-family': $con1.val()});
                })
        }
        for(let i=0;i<$con6.length;i++){
                $($con6[i]).click(function(){
                    $con6.attr('class','')
                    $con6.eq(i).attr('class','xuanzhong');
                    $con4.val($($con6[i]).html())
                    $con4.select();
                    if($con4.val()==='斜体'){
                        $shili.css({ 'font-style':  'italic','font-weight':'normal'});
                    }
                    else if($con4.val()==='粗体'){
                        $shili.css({'font-style':  'normal', 'font-weight':  'bold'});
                    }else if($con4.val()==='粗体偏斜'){
                        $shili.css({ 'font-style':  'italic' ,'font-weight':  'bold'});
                    }
                    else{
                        $shili.css({ 'font-style':  'normal','font-weight':'normal'});
                    }
                })   
        }
        for(let i=0;i<$con9.length;i++){
                $($con9[i]).click(function(){
                    $con9.attr('class','')
                    $con9.eq(i).attr('class','xuanzhong');;
                    $con7.val($($con9[i]).html())
                    $con7.select();
                    $shili.css({ 'font-size': $con7.val()+'px'});
                })
        }
    }
    function remove(){
        $context.remove();
    }
    function show(){
        $main.append($context);
        select();
        $remove.click(remove);
        $btnqueding.click(remove);
        $btnquxiao.click(remove);
    }
    return{
        show:show
    }
}())