######WEEK 01 | FastCampus Front End Develop School

#Timetable Markup
`<table>` 요소를 활용하여 시간표를 마크업하고 CSS 스타일링 하기



####[학과 홈페이지](http://creative.sogang.ac.kr/?page_id=16013)에 게시된 시간표를 참고하여, 시간표를 마크업해보자.


![결과물](https://github.com/jiseung-roh/FastCampus-Front-End-Development/blob/master/Project/02-timetable/etc/result.png)

1. `<table>` 작성 방법
2. `<table>` 스타일링 기초

***


###1. `<table>` 작성 방법 노하우
HTML의 `<table>` 요소를 구조화할 때 헷갈릴 수 있는 부분들이 많아서 다음과 같은 프로세스를 따르면 쉽게 `<table>` 요소를 작성할 수 있다.



######기본 구조 작성
  
  
  1. 표에 작성해야 하는 데이터들을 행별로 먼저 나열한다.
  
  ```html
  제목  내용 
  사과  사과는 서늘한 기후에 적당한 온대북부과수이다.
  포도  포도는 포도속(Vitis) 식물의 총칭, 또는 그 열매를 말한다.
  ```
  
  2. 데이터의 성격에 따라 마크업을 한다. 해당 데이터가 셀의 제목 역할을 하면 `<th>`, 셀 데이터 역할을 하면 `<td>`로 마크업한다.  
  
  ```html
  <th>제목</th>  <th>내용</th> <!-- 표 제목 -->
  <th>사과</th>  <td>사과는 서늘한 기후에 적당한 온대북부과수이다.</td> <!-- 사과,포도 : 표 제목, 나머지 : 표 데이터 -->
  <th>포도</th>  <td>포도는 포도속(Vitis) 식물의 총칭, 또는 그 열매를 말한다.</td>
  ```
  
  3. 그리고 같은 행에 포함되는 `<th>`, `<td>` 요소들을 `<tr>`로 묶는다.
   
  ```html
  <tr><th>제목</th>  <th>내용</th></tr> <!-- 1행 -->
  <tr><th>사과</th>  <td>사과는 서늘한 기후에 적당한 온대북부과수이다.</td></tr> <!-- 2행 --> 
  <tr><th>포도</th>  <td>포도는 포도속(Vitis) 식물의 총칭, 또는 그 열매를 말한다.</td></tr> <!-- 3행 -->
  ```
  
  4. 이 모두를 `<table>` 요소로 묶어주고, 표를 설명하는 `<caption>`을 `<table>` 바로 다음으로 추가한다. 
  
  ```html
  <table>
  <caption>과일 설명표</caption> <!-- 표의 주제에 대해 기입, CSS로 마음대로 스타일링 가능 -->
  <tr><th>제목</th>  <th>내용</th></tr>
  <tr><th>사과</th>  <td>사과는 서늘한 기후에 적당한 온대북부과수이다.</td>
  <tr><th>포도</th>  <td>포도는 포도속(Vitis) 식물의 총칭, 또는 그 열매를 말한다.</td></tr>
  </table>
  ```
  
