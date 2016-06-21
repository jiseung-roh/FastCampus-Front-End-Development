######WEEK 02 | Markup Form & Input Elements

# Form & Input Element
`<form>` 요소와 `<input>`을 활용하여 다음 이미지를 마크업하고 CSS 스타일링 하기



####[드리블](https://dribbble.com/shots/2612221-Check-out-flow/attachments/521426)에 게시된 신청서 폼을 참고하여, 폼 요소를 마크업해보자.


- Step 1 결과물

![결과물1](https://github.com/jiseung-roh/FastCampus-Front-End-Development/blob/master/Project/05-form-2/asset/result-1.png?raw=true)

- Step 2 결과물

![결과물2](https://github.com/jiseung-roh/FastCampus-Front-End-Development/blob/master/Project/05-form-2/asset/result-2.png?raw=true)


1. `<form>` 요소 마크업
2. `<input>`의 `type`에 따른 마크업


***

### Step 1. form요소를 작성하자

`<form>` 요소는 사용자에게 입력을 받아 웹 서버로 보낼 수 있도록 도와주는 요소이다. `<form>` 요소 내부에는 `<input>`, `<textarea>`, `<select>` 등과 같은 사용자로부터 데이터를 받을 수 있도록 해주는 요소들이나 `<button>` 등이 들어갈 수 있다.


**폼 요소를 구성하는 속성**

- `action` : 사용자로부터 입력받은 데이터를 전송할 곳, URL이나 서버 파일이 있는 경로를 표기한다.
- `method` : 서버로 HTTP Request를 보내는 방식을 정할 수 있고, **GET과 POST 방식**을 자주 사용한다.
- `name` : `<form>`의 이름, 문서 내 폼 요소의 name 값은 각각 달라야 한다.
- `enctype` : `method="POST"`일때 서버에게 보내지는 콘텐츠의 MIME Type을 정의할 때 사용한다. 서버에게 보내지는 데이터가 단순한 텍스트일 때 기본값으로 `enctype="x-www-form-urlencoded`다. 하지만 서버에게 전송되는 데이터가 파일일시`enctype`을 `multiparts/form-data`로 표시한다.


**GET vs POST**

앞서 우리는 `<form>` 요소가 사용자가 입력한 데이터를 HTTP Request의 형식에 맞게 변환해서 서버로 전송할 수 있게 도와주는 요소라고 배웠다. 서버에 데이터를 Request 하는 방식은 크게 GET방식과 POST방식으로 나뉜다.

1. GET
  - HTTP Request Body가 비어 있어, 데이터 전송하면 데이터가 URL에 노출된다.
  - HTTP Request를 통해 서버에게 "Hey, I want to get that resource."라고 말하는 것과 같다.

2. POST
  - HTTP Request Body안에 사용자의 데이터가 저장되어 전송되므로 데이터가 URL에 노출이 되지 않는다.
  - 파일 전송 시 POST를 사용한다.
  - 사용자 입력 데이터가 많아 URL이 길어질 것 같을 때 POST를 사용한다.
