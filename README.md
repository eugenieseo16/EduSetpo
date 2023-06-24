# Edusetpo



## 1. Overview

<img src="https://i.ibb.co/Nmh3sDC/movingeducell.gif" alt="movingeducell" border="0" width="50%"/>



### **서비스 소개**

너무 자주 바뀌는 개인 과외 일정을 손쉽게 정리하고 한 눈에 확인하고 싶은 당신!

자녀의 과외 성적과 일정을 손쉽게 확인하고 싶은 당신!

Edusetpo를 통해서 일정을 손쉽게 정리하고 편하게 확인해보세요!



### **기획 배경**

서울시 교육청의 조사에 따르면, 학령 인구 감소와 코로나 19 사태의 여파로 인해 학원 및 교습소가 지속적으로 감소하고 있는 반면 개인 과외 교습자는 지속적인 증가세를 보이고 있습니다. 또한 허가 없이 개인 과외를 하는 인원들을 감안하면 개인 과외 교습자는 더 많이 증가하고 있다고 예측할 수 있습니다.

이러한 개인 과외의 증가에도 개인 과외 교습자를 대상으로 하는 서비스가 미비합니다. Edusetpo는 개인 과외 교습자가 보다 효율적으로 자신의 수업 일정과 학생들을 관리할 수 있게 도움을  줄 수 있는 서비스를 만들고자 했습니다.

그리고 Edusetpo는 개인 과외 교습자 뿐만 아니라 학부모에게도 자녀에 대한 과외 현황 정보를 제공해줌으로써 자녀의 숙제, 성적 현황을 손쉽게 확인할 수 있는 서비스를 만들고자 했습니다.



### **타켓**

1. 간편하게 일정과 수업을 기록해서 한눈에 일정을 확인하고 싶은 사람
2. 수업에 관련한 정보들을 꼼꼼히 기록하고 확인하고 싶은 사람
3. 자녀가 수업을 잘 듣고 있는지 간편하게 확인하고 싶은 학부모



## 2. 주요 기능

1.  일정 관리
   - 개인 과외 일정들을 일별, 주별, 월별 단위로 확인이 가능하고 바로 해당 일정에 대한 정보를 확인할 수 있다.
   - 수업 일정을 주 단위로 설정하고 각 요일별로 다르게 시간을 설정해서 수업 일정을 등록할 수 있다.
   - 전체적인 수업 일정을 수정할 수 있고 해당 수업을 듣고 있는 학생들을 추가하고 제외할 수 있다.
2.  회차 관리
   - 각 수업 회차 단위로 회차 일정 및 회차 완료 여부를 확인할 수 있다.
   - 해당 회차에서 학생 단위로 학생의 숙제 완료 여부 및 숙제를 추가해줄 수 있고 회차에 있었던 특이사항을 메모할 수 있다.
3.  학생 관리
   - 본인이 수업을 맡고 있는 학생들을 전부 리스트로 확인이 가능하고 현재 수업을 하고 있는 학생인지 확인이 가능하다.
   - 각 학생별로 해당 학생이 어떤 과목을 수강하고 있는지 확인이 가능하고 각 과목별로 해당 과목의 성적 그래프를 확인할 수 있다.
4. 학부모 페이지
   - 자녀가 듣고 있는 수업을 한눈에 확인이 가능하고 해당 수업 별로 상세 정보를 확인할 수 있다.
   - 자녀가 듣고 있는 수업에서 자녀의 숙제 진척도 및 성적을 통계 그래프 형식으로 확인할 수 있다.



## 3. 기획

### ERD

<img src="https://i.ibb.co/MCHR9zw/edusetpo-erd.png" alt="edusetpo-erd" border="0">



### Figma

<img src="https://i.ibb.co/pdMWzTN/edusetpo-figma.png" alt="edusetpo-figma" border="0">

### API 기능 명세서

<img src="https://i.ibb.co/hmFmrbW/edusetpo-api1.png" alt="edusetpo-api1" border="0">



<img src="https://i.ibb.co/dbSWqg9/edusetpo-api2.png" alt="edusetpo-api2" border="0">

## 4. 개발 환경과 기술 스택



<img src="https://i.ibb.co/JBRVFxv/edusetpo-architecture.png" alt="edusetpo-architecture" border="0">

- **Server**

  - AWS EC2

  - OS : Ubuntu 22.04.1 LTS

    

- **DevOps**

  - Docker : 23.0.5

  - Docker Compose : 2.17.3

  - Nginx : 1.23.4

  - Jenkins : 2.387.2

    

- **SSL**

  - letsencrypt

  - cerbot : 1.7.0

    

- **DataBase**

  - MySQL v8.0.31

    

- **Backend**

  | Framework | Spring Boot v2.7.11 |
  | --------- | ------------------- |
  | Language  | Java v11.0.17       |
  | Build     | gradle              |
  | ORM       | JPA                 |

  

- **Frontend**

  | Library     | React               |
  | ----------- | ------------------- |
  | Language    | TypeScript          |
  | 상태 관리   | Recoil              |
  | CSS Library | Styled Component    |
  | Build       | vite                |
  | Router      | react-router-dom v6 |

- **Team Collaboration Tools**

  | 형상 관리    | GitLab             |
  | ------------ | ------------------ |
  | 이슈 관리    | Jira               |
  | 커뮤니케이션 | Notion, Mattermost |

  

## 5. 프로젝트 진행

### **Jira**

협업 및 일정 관리를 위해 Jira를 사용하였다. 매주 월요일 오전 스크럼에서 지난 한주간 있었던 일들에 대해 간단히 공유하고 이번 주 계획에 대해 공유하였다. 그리고 스크럼에서 공유된 내용을 바탕으로 서로의 일정을 조율하고 일정을 바탕으로 이슈를 등록하였다. 스프린트는 일주일 단위로 진행하였다.

- Epic : 기획 및 설계 , 프로젝트 개발, 산출물 정리
- Task : 코드 작업과 직접적인 연관이 있는 세부 과제 작성
- Story : 코드 작업과 직접적인 연관이 없는 세부 과제 작성



### **Git Flow**

- Git Branch 전략

<img src="https://i.ibb.co/yFM1jMY/edusetpo-branch.png" alt="edusetpo-branch" border="0">



- 커밋 메세지

  | 커밋 유형 | 의미                               |
  | --------- | ---------------------------------- |
  | Feat      | 새로운 기능 추가                   |
  | FIx       | 버그 수정                          |
  | Refactor  | 코드 리펙토링                      |
  | Design    | CSS 등 사용자 UI 디자인 변경       |
  | Remove    | 파일을 삭제하는 작업만 수행한 경우 |
  | Comment   | 필요한 주석 추가 및 변경           |





### **Notion**

서로에게 공유되면 좋은 자료, 회의록 그리고 명세서들을 모아서 관리하였다. 또한 그라운드 룰, 컨벤션 규칙 및 깃 브랜치 전략 등과 같이 모두가 지켜야하는 중요한 사항들을 모아 정리하여 접근하기 쉽게 관리하였다.



## 6. 팀원

<img src="https://i.ibb.co/kDKnFMK/edusetpo-members.png" alt="edusetpo-members" border="0">
