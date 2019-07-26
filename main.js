// 1.准备数据结构
var keys={
    0:['q','w','e','r','t','y','u','i','o','p'],
    1:['a','s','d','f','g','h','j','k','l'],
    2:['z','x','c','v','b','n','m'],
    length:3
}
var hash={
    'a':'acfun.com',
    'b':'bilibili.com',
    'e':undefined,
    'q':'qq.com'
}
// 6.读取进度
// 取出localStorage中的userChange桶中存的东西 有细节需要扣null
var hashInLocalStorage=JSON.parse(localStorage.getItem('userChange'||'null'))
// 如果不是空值，就用取出的值覆盖当前hash
if(hashInLocalStorage){
    hash=hashInLocalStorage
}
// 2.创建键盘元素
index=0
while(index<keys.length){
    div=document.createElement('div')
    maincontent.appendChild(div)
    row=keys[index]
    index2=0
    while(index2<row.length){
        kbd=document.createElement('kbd')
        kbd.textContent=row[index2]
        buttonEdit=document.createElement("button")
        buttonEdit.textContent="E"
        //找到用户当前点击的元素,使用id进行标记
        buttonEdit.id=row[index2]
        buttonEdit.onclick=function(curButton){
            curK=curButton.target.id
            newHref=prompt("请输入一个新网址")
            hash[curK]=newHref
            //5.保存进度，存此次变更后的hash,使用localStorage存用户编辑信息
            localStorage.setItem('userChange',JSON.stringify(hash))
        }
        kbd.appendChild(buttonEdit)
        div.appendChild(kbd)
        index2=index2+1
    }
    index=index+1
}       
// 3.监听键盘事件
document.onkeypress=function(curKbd){
    curKey=curKbd.key
    website=hash[curKey]
    window.open("http://"+website,"_blank")//新开一个标签页打开
}
