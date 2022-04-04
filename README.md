# Getting Started with react dashboard template

## RDT 구성

### react, redux, material-ui, react-router   

## RDT 구조

┌── src    
│   ├── config  
│   │   ├── common.js - title, api_base_url, roles, setting options, paths 설정    
│   │   ├── dashboard.js - header option, dashboard option 설정  
│   │   ├── dashboardTheme.js - dashboard theme 설정  
│   │   ├── routes.js - routes 설정  
│   │   └── index.js  
│   ├── api - api 모음   
│   ├── components - 컴포넌트 모음    
│   ├── containers - 리덕스 연결 컴포넌트 모음    
│   ├── guards - login, roles 가드  
│   ├── helper - library util 모음  
│   ├── hooks - hook 모음  
│   ├── layouts - layout 구성  
│   ├── pages - page 구성  
│   ├── presets - 초기 설정 모음  
│   ├── redux - redux 모음  
│   ├── theme - theme 모음  
│   ├── utils  
└── README.md 등  

## RDT 설정 

### 기본 설정
TITLE, API_BASE_URL, ROLES, DEFAULT_SETTING  
common.js 수정  

### 기본 라우팅 path 수정 (dashboard 제외)
index, error, auth, 등을 설정 할 경우    
또는  
새로운 path를 생성할 경우 설정    
단  
/dashboard 설정은 NAV_BAR list 수정 참조  

1. common.js PATHS 수정  
2. routes.js 수정 - react-route v6 참조  

### HEADER POPOVER list 수정
dashboard.js HEADER_OPTIONS 수정  

### NAV_BAR list 수정
1. common.js PATHS 수정  
2. dashboard.js DASHBOARD_OPTIONS 수정 - react-route v6 참조  
