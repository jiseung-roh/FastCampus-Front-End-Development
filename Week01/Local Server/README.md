######Frontend Develop School | Week 1
#Node.js를 활용하여 로컬 서버 작동시키기

###1. Node.js 설치하기
[nodejs.org](http://nodejs.org)에 접속하여 자신의 컴퓨터 사양에 맞게 nodejs 패키지 파일을 다운로드한다. 패키지 설치를 완료하면 터미널을 통해 설치 완료 여부 및 버젼 확인을 확인할 수 있다.

```sh
$ node --version #ver.4.4.5
$ npm --version #2.15.5
```

* npm이란?
Node Package Manager의 약자로, nodejs 패키지를 관리하기 위한 것이다.
[www.npmjs.com](http://www.npmjs.com)

###2. 로컬 서버 구동하기
로컬 서버를 구동하기 위해선 먼저 루트 폴더(Root Folder)를 지정해야 한다. 루트 폴더를 서버를 통해 지정하면 루트 폴더를 기준으로 하는 절대 경로도 사용할 수 있다.

* 절대 경로 vs 상대 경로 
    - 절대 경로 : 루트 폴더를 기준으로 경로를 설정
      i.e. /css/style.css
    - 상대 경로 : 파일이 현재 위치한 폴더를 기준으로 경로 설정
      i.e. ../css/style.css

npm을 통해 http-server를 설치해야 로컬 서버를 작동시킬 수 있다.

```sh
$ sudo npm install --global http-server
```

http-server 설치를 완료하면, 루트 폴더로 설정하고자 하는 폴더에 들어가 http-server를 구동시키면 된다.

```sh
$ cd /Users/rohjiseung/Documents/Favorites/School/WEEK01/20160614
$ http-server -o
```

다음 코맨드를 실행시키면, 브라우저에 http://127.0.0.1:8080/ 주소로 로컬 호스트가 설정된 것을 볼 수 있다.