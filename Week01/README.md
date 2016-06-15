### 진행내용
- [nodejs.org](http://nodejs.org "NodeJS") //bullet은 목록
- [npmjs.com](https://brunch.co.kr/@ultra0034/23)
- 

---

#### Nodejs 설치
[nodejs.org](http://nodejs.org "NodeJS")에 들어가서 자신의 컴퓨터 사양에 맞는 걸 선택해서 다운받는다.
다운을 완료하고 나면, terminal 창에서 다운이 성공적으로 되었는지 다음 명령어를 통해 확인 가능하다.
* npm이란?
Node Package Manager의 약자인 npm은 노드 패키지를 관리할 수 있는 것이다

```sh
$ node --version #v.4.4.5
$ npm --version #2.15.5
```

#### http-server 모듈 전역 설치
nodejs를 설치 완료하고 나면, http-server 모듈을 설치할 수 있다.
```sh
$ sudo npm install --global http-server
```

서버를 구동하고자 하는 루트 폴더로 이동하여 서버를 구동한다.
```sh
$ cd /Users/rohjiseung/Documents/Favorites/School/WEEK01/20160614
$ http-server -o
```
이렇게 하면 로컬호스트 주소(Local host address)를 가진 웹사이트가 하나 열리는 것을 볼 수 있다.
로컬에서 작동하는 서버가 구동이 되는 것이고, 앞으로 절대 경로를 사용할 수 있다.

* 절대경로
- 루트폴더(Root Folder)를 기준으로 해서 파일의 경로를 찾을 수 있다.
- 절대경로를 설정할 땐 경로 제일 앞에 '/'를 붙여주면 된다. (ex. `href="/css/style.css"`)


#### Favicon 설정
1. 포토샵에서 Favicon으로 사용할 이미지를 제작한다.
- 이미지는 32*32px 사이즈로 작업한다. png로 작업해도 괜찮으나, 일부 IE 브라우저에서는 .iso 파일만 인삭할 수 있기에 별도의 작업이 필요하다.

2. `html`의 `head`에 favicon 링크 추가하기.
```html
<head>
	<link rel="shortcut icon" type="image/x-icon" href="image/favicon.png">
</head>
```
favicon snippet : link:favicon
