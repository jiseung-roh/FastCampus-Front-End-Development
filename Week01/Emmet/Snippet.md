######Frontend Develop School | Week 1
#Emmet을 활용한 Snippet 설정하기

###Snippet이란?
스니펫(Snippet)은 일종의 코드 블록이다. 자주 쓰는 코드 블록을 스니펫 설정해두면 매번 같은 코드를 작성하지 않고 Emmet을 활용하여 쉽게 코드를 쓸 수 있다.

```html
<body>
    <img src="http://placehold.it/180x180/000/fff?text=hello" alt="hello" width="180" height="180"> 
</body>
```

위의 img 요소의 소스링크인 [placehold.it](http://placehold.it)은 img파일을 마크업 하기 전에 대략적인 디자인 사이즈를 잡기 위해서 사용하는 일종의 더미 이미지(dummy image)다. 와이어프레임 작업할 때 유용하게 자주 쓰이는 코드임으로 이걸 스니펫으로 등록하고자 한다.

1. 스니펫으로 등록하고자 하는 코드를 복사하고 Sublime Text 3의 메뉴에서 [Tools]-[Developer]-[New Snippet...]에 들어간다.

2. 다음과 같은 코드를 볼 수 있다.

```xml
<snippet>
    <content><![CDATA[
Hello, ${1:this} is a ${2:snippet}.
]]></content>
    <!-- Optional: Set a tabTrigger to define how to trigger the snippet -->
    <!-- <tabTrigger>hello</tabTrigger> -->
    <!-- Optional: Set a scope to limit where the snippet will trigger -->
    <!-- <scope>source.python</scope> -->
</snippet>
```

3. `Hello, ${1:this} is a ${2:snippet}.`를 지우고 해당 영역 안에 내가 추가하고자 하는 스니펫 코드를 붙여 넣는다. 그리고 주석 중 'Optional:'로 시작하는 주석은 삭제하고 나머지 주석은 활성화한다.

```xml
<snippet>
    <content><![CDATA[
<img src="http://placehold.it/180x180/000/fff?text=hello" alt="hello" width="180" height="180">
]]></content>
    <tabTrigger>hello</tabTrigger>
    <scope>source.python</scope>
</snippet>
```
