# SSG.COM 클론코딩

## 📍 프로젝트 소개

> 본 프로젝트는 스파로스 아카데미 1기에서 진행한 **SSG.COM 신세계몰 클론 코딩 프로젝트**입니다.

- **쓱싹쓱싹(5조)의 프론트엔드 저장소**입니다.

### Project Repositories

- [프론트엔드](https://github.com/Im-hass/SSG_SSAG_FE)
- [백엔드](https://github.com/K-J-HYEON/SSG_SSAG_BE)

&nbsp;

## 📍 Demo

<details>
   <summary><b>Main Page</b></summary>
   <img alt="01_MainPage" src="https://github.com/Im-hass/ImageLink/assets/77854486/616d322e-f51b-4a44-b5d4-22795f00a6d2" width="400px" />   
</details>

<details>
   <summary><b>회원가입/로그인</b></summary>
   <img alt="02_로그인회원가입" src="https://github.com/Im-hass/ImageLink/assets/77854486/b8968ba0-44b7-4fd0-9865-9be9c30a055f" width="400px" />   
</details>

<details>
   <summary><b>상품 검색</b></summary>
   <img alt="03_상품검색" src="https://github.com/Im-hass/ImageLink/assets/77854486/f79cedb1-901f-400b-9d98-15c13baf8bc6" width="400px" />   
</details>

<details>
   <summary><b>필터 기능</b></summary>
   <img alt="04_상품필터" src="https://github.com/Im-hass/ImageLink/assets/77854486/6e8185e8-38a8-4a91-aa6e-e87c71b09c4c" width="400px" />   
</details>

<details>
   <summary><b>좋아요</b></summary>
   <img alt="05_좋아요" src="https://github.com/Im-hass/ImageLink/assets/77854486/8f045f70-49e7-4d9e-b46c-ae918e9d5f46" width="400px" />   
</details>

<details>
   <summary><b>상품 카테고리</b></summary>
   <img alt="06_상품카테고리" src="https://github.com/Im-hass/ImageLink/assets/77854486/c61c2f6f-b146-4777-bf5a-effbdb40578d" width="400px" /> 
</details>

<details>
   <summary><b>상품 목록 조회</b></summary>
   <img alt="07_상품목록조회" src="https://github.com/Im-hass/ImageLink/assets/77854486/e184b2e2-f83b-4556-89fa-8914089d5aa4" width="400px" />   
</details>

<details>
   <summary><b>상품 상세 조회</b></summary>
   <img alt="08_상품상세조회" src="https://github.com/Im-hass/ImageLink/assets/77854486/3d2590e6-9ad6-4b78-94f0-415316c40788" width="400px" />   
</details>

<details>
   <summary><b>최근 본 상품</b></summary>
   <img alt="09_최근본상품" src="https://github.com/Im-hass/ImageLink/assets/77854486/42b1d5fe-1e30-4bd0-9a88-87efdf884a8b" width="400px" />   
</details>

<details>
   <summary><b>장바구니</b></summary>  
   <img alt="10_장바구니" src="https://github.com/Im-hass/ImageLink/assets/77854486/61471ba1-c8b3-4a91-b4e5-bee8989cc7ff" width="400px" />   
</details>

<details>
   <summary><b>주문하기</b></summary>
   <img alt="11_주문" src="https://github.com/Im-hass/ImageLink/assets/77854486/57f6b28f-1fc3-4f6a-8d91-91d3bdba371c" width="400px" />   
</details>

<details>
   <summary><b>주문 조회</b></summary>
   <img alt="12_주문조회" src="https://github.com/Im-hass/ImageLink/assets/77854486/2520394a-b783-4ae6-8d27-d6aeecadd704" width="400px" />   
</details>

<details>
   <summary><b>배송지 관리</b></summary>
   <img alt="13_배송지추가" src="https://github.com/Im-hass/ImageLink/assets/77854486/b7de0ec9-3d32-4920-8035-aacdc61d16e9" width="400px" />
   <img alt="14_기본배송지설정수정삭제" src="https://github.com/Im-hass/ImageLink/assets/77854486/111f6592-fed8-4c6c-9995-90497d2ed186" width="400px" />
</details>

<details>
   <summary><b>결제수단 관리</b></summary>
   <img alt="15_결제수단관리" src="https://github.com/Im-hass/ImageLink/assets/77854486/429491ba-7f7f-4548-8920-63606acfb922" width="400px" />   
</details>

<details>
   <summary><b>Loading Spinner</b></summary>
   <img alt="16_로딩스피너" src="https://github.com/Im-hass/ImageLink/assets/77854486/ca00cc46-3925-481d-a049-c0d293dddc5d" width="400px" />   
</details>

<details>
   <summary><b>Not Found Page</b></summary>
   <img alt="17_NotFoundPage" src="https://github.com/Im-hass/ImageLink/assets/77854486/3bc6fb66-fbfa-48bc-8735-4540b9d091ce" width="400px" />   
</details>

&nbsp;

## 📍 시스템 아키텍처
![시스템 아키텍처](https://user-images.githubusercontent.com/77854486/203240194-fba60225-adfd-452e-afeb-f9d7f56b1368.png)

&nbsp;

## 📍 개발환경

```bash
> npm (v8.15.0)
> node (v16.16.0)
> react (v18.2.0)
```

### 설치 및 실행

1. `.env.sample` 파일 `.env`로 수정

2. `.env` 파일의 `REACT_APP_ZIPCODE_SERVICE_KEY2`, `REACT_APP_ZIPCODE_SERVICE_URL2` 수정  
   [주소기반산업지원서비스의 도로명주소 검색 API](https://www.juso.go.kr/addrlink/openApi/searchApi.do) 사용 중 (배송지 - 우편번호 검색에 사용)

3. 설치 및 실행
   ```bash
   $ npm install
   $ npm run start
   ```

&nbsp;

## 📍 사용 기술

### Frontend

<img src="https://img.shields.io/badge/Vscode-23a9f2?style=flat-square&logo=visual studio code&logoColor=white"/></a>&nbsp;
<img src="https://img.shields.io/badge/React-17b6e7?style=flat-square&logo=React&logoColor=white"/></a>&nbsp;
<img src="https://img.shields.io/badge/recoil-17b6e7?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FscXVlXzEiIGRhdGEtbmFtZT0iQ2FscXVlIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI1NS4yMSA2MjMuOTEiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDp3aGl0ZX08L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im03NC42MiAyNzcuNDYgMS4yNC0uMTMgMzQuNzgtMy4yOC01My40Ny01OC42NkE5Ni40NyA5Ni40NyAwIDAgMSAzMiAxNTAuM0gzYTEyNS4zIDEyNS4zIDAgMCAwIDMyLjggODQuNTdaTTE3Ny4xMyAzNDdsLTM2IDMuNCA1My4zMiA1OC41MUE5Ni40MSA5Ni40MSAwIDAgMSAyMTkuNjMgNDc0aDI4LjkyYTEyNS4yOCAxMjUuMjggMCAwIDAtMzIuNzYtODQuNTdaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjUzLjY5IDIzMS42OGMtNi4zMy0zMS4zLTMwLjg5LTU0LjA5LTYyLjU3LTU4LjA3bC02LjM1LS43OWE0OS42MSA0OS42MSAwIDAgMS00My4zNS00OS4xM3YtMjBhNTIuNzUgNTIuNzUgMCAxIDAtMjguOTEtLjM2djIwLjM4YTc4LjU2IDc4LjU2IDAgMCAwIDY4LjY1IDc3LjgybDYuMzYuOGMyMy4yNCAyLjkyIDM0Ljc4IDIwIDM3LjgzIDM1LjFzLS45MyAzNS4zMi0yMS4yMiA0N2E3My44MSA3My44MSAwIDAgMS0zMC4wNiA5LjYybC05NS42NiA5YTEwMi40NSAxMDIuNDUgMCAwIDAtNDEuOCAxMy4zOEM5IDMzMi40NS00LjgxIDM2MyAxLjUyIDM5NC4yOXMzMC44OSA1NC4wOCA2Mi41NyA1OC4wNmw2LjM1LjhhNDkuNiA0OS42IDAgMCAxIDQzLjM1IDQ5LjEydjE4YTUyLjc1IDUyLjc1IDAgMSAwIDI4LjkxLjI2di0xOC4yNmE3OC41NSA3OC41NSAwIDAgMC02OC42NS03Ny44MWwtNi4zNi0uOGMtMjMuMjQtMi45Mi0zNC43OC0yMC4wNS0zNy44My0zNS4xMXMuOTMtMzUuMzIgMjEuMjItNDdhNzMuNjggNzMuNjggMCAwIDEgMzAuMDYtOS42M2w5NS42Ni05YTEwMi40NSAxMDIuNDUgMCAwIDAgNDEuOC0xMy4zOGMyNy42NS0xNi4wMiA0MS40LTQ2LjU0IDM1LjA5LTc3Ljg2WiIvPjwvc3ZnPg==&logoColor=white"/></a>&nbsp;
<img src="https://img.shields.io/badge/SASS-CC6699?style=flat-square&logo=SASS&logoColor=white"/></a>&nbsp;
<img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=ESLint&logoColor=white"/></a>&nbsp;
<img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=Prettier&logoColor=white"/></a>&nbsp;

### Backend

<img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=flat-square&logo=Spring Boot&logoColor=white"/></a>&nbsp;
<img src="https://img.shields.io/badge/Gradle-02303A?style=flat-square&logo=Gradle&logoColor=white"/></a>&nbsp;
<img src="https://img.shields.io/badge/JPA-0D86C1?style=flat-square&logo=JPA&logoColor=white"/></a>&nbsp;

### Deploy

<img src="https://img.shields.io/badge/Amazon EC2-FF9900?style=flat-square&logo=Amazon EC2&logoColor=white"/></a>&nbsp;
<img src="https://img.shields.io/badge/NGINX-009639?style=flat-square&logo=NGINX&logoColor=white"/></a>&nbsp;
<img src="https://img.shields.io/badge/Amazon RDS-527FFF?style=flat-square&logo=Amazon RDS&logoColor=white"/></a>&nbsp;
<img src="https://img.shields.io/badge/Amazon S3-569A31?style=flat-square&logo=Amazon S3&logoColor=white"/></a>&nbsp;

### Tools

<img src="https://img.shields.io/badge/Jira-0052CC?style=flat-square&logo=Jira&logoColor=white"/></a>&nbsp;
<img src="https://img.shields.io/badge/Github-000000?style=flat-square&logo=Github&logoColor=white"/></a>&nbsp;
<img src="https://img.shields.io/badge/Notion-fafafa?style=flat-square&logo=Notion&logoColor=black"/></a>&nbsp;

&nbsp;

## 📍 디렉터리 구조

```bash
├─ ... # 환경설정 파일들
├─ README.md
├─ public
└─ src
    ├─ index.jsx
    ├─ Root.jsx # BrowserRouter, AuthContext, Recoil 설정
    ├─ assets # 데이터, 이미지, SVG 관리 폴더
    ├─ components
    │  ├─ App.jsx # 라우팅
    │  └─ ... # 컴포넌트 폴더
    ├─ lib # hooks 폴더
    ├─ pages # page 컴포넌트 폴더
    ├─ store # recoil, context 폴더
    └─ styles # style 폴더
```

&nbsp;

## 📍 개발 산출물
- [wiki 참조](https://github.com/Im-hass/SSG_SSAG_FE/wiki)
