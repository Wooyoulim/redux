# 🖥️REDUX를 사용한 예제 사이트

<br>

<img width="1200" alt="리덕스 예제 메인 페이지" src="https://github.com/Wooyoulim/redux/assets/168395738/b9937ea4-26d5-41cb-9f4e-9ce5328129d4">

<br>
<br>

- 수업시간의 예제를 활용하여 작업한 Redux 사이트
- 바로가기 : wooyoulim.github.io/redux/dist

- 활용 Skills : <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" /> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" /> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white" /> <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white" />
  <br>
  <br>

## 📢기능구현

#### 👉🏻 Main, About 페이지
- Css, Swiper를 활용
    <br>
    <br>
#### 👉🏻 Product & Cart 페이지
- 분리되어 있는 데이터 전달
- 전달받은 데이터를 리스트화 
- 데이터 검색 및 정렬화 
- 클릭 시, cart 페이지와 연동되어 span에 수량 추가
- 추가한 수량 전체 삭제 또는 부분 삭제, 되돌아가기 기능추가
    <br>
    <br>
 #### 👉🏻 Notice 페이지
- 공지사항 상세페이지 이동
    <br>
    <br>

 #### 👉🏻 Customer 페이지
- 로그인 시, 게시판 글쓰기 가능
- 게시물 작성 후 저장 시, Customer에 추가
- 미로그인 시, 메시지 창 활성화 및 로그인 페이지로 이동
    <br>
    <br>

 #### 👉🏻 Login & Join 페이지
- 로그인 시 일정 페이지들에 접근 가능
- 회원가입 정보 기입 시, 로컬스토리지에 저장
    <br>
    <br>
 
## 👣 컴포넌트 구조

```
src
│   App.jsx
│   
└───assets
│   │   api
│   └───subfolder1
│       │   cartdata.jsx
│       │   customerdata.js
│       │   noticedata.js
│   
└───components
    │    
    └───cart
        │   CartEmpty.jsx
        │   CartItem.jsx
        │   CartList.jsx
        │   CartStyle.js
    │    
    └───customer
        │   CustomerAdd.jsx
        │   CustomerDetail.jsx
        │   CustomerEdit.jsx
        │   CustomerItem.jsx
        │   CustomerLIst.jsx
        │   CustomerStyle.js
    │    
    └───login
        │   Join.jsx
        │   Login.jsx
        │   LoginStyle.js
        │   Logout.jsx
    │    
    └───footer
        │   Footer.jsx
        │   FooterStyle.js
    │    
    └───header
        │   Header.jsx
        │   HeaderStyle.js
        │   NavBar.jsx
    │    
    └───notice
        │   NoticeDetail.jsx
        │   NoticeItem.jsx
        │   NoticeList.jsx
        │   NoticeStyle.js
    │    
    └───pagination
        │   Pagination.jsx
        │   PaginationStyle.js
    │    
    └───product
        │   ProductItem.jsx
        │   ProductList.jsx
        │   ProductSearch.jsx
        │   ProductStyle.js

│   
└───page
    │    
    └───about
        │   About.jsx
        │   AboutStyle.js
    │    
    └───cart
        │   Cart.jsx
        │   CartStyle.js
    │    
    └───customer
        │   Customer.jsx
        │   CustomerStyle.js
    │    
    └───login
        │   Join.jsx
        │   Login.jsx
        │   LoginStyle.js
        │   Logout.jsx
    │    
    └───main
        │   Main.jsx
        │   MainStyle.js
    │    
    └───notfile
        │   NotFileStyle.js
        │   NotFiles.jsx
    │    
    └───notice
        │   Notice.jsx
        │   NoticeStyle.js
    │    
    └───product
        │   Product.jsx
        │   ProductStyle.js


│   
└───store
    │   
    └───modules
         │   authSlice.jsx
         │   cartSlice.jsx
         │   customerSlice.jsx
         │   noticeSlice.jsx
         │   pagenationSlice.jsx
    │    index.jsx  
```
    

