# typescript-react-express-quick-start

<h2>사용법</h2>
<pre>
 git clone https://github.com/hyunsolcomment/typescript-react-express-quick-start
</pre>
위 명령을 통해 repo를 clone한 뒤

<pre>
 cd typescript-react-express-quick-start
</pre>
위 명령을 통해(혹은 다른 방식으로) clone된 폴더로 이동한 후

<pre>
 npm install
</pre>
위 명령을 통해 프로젝트 최상위 폴더에서 라이브러리를 설치합니다.

<pre>
 npm run project-install
</pre>
위 명령을 통해 프론트엔드, 백엔드의 라이브러리를 설치합니다.

<hr />

<h2>프론트엔드: 라이브러리</h2>
<ul>
 <li><b>React</b></li>
 <li><b>cross-env:</b> 리엑트를 시작할 때, BROWSER 환경변수를 none으로 설정하여 리엑트 화면이 자동으로 브라우저에 실행되는 것을 방지합니다.</li>
 <li><b>axios:</b> 백엔드나 다른 도메인과 통신하기 위해 사용됩니다.</li>
 <li><b>react-router-dom:</b> URL 뒤에 있는 문자열에 따라 다른 컴포넌트를 새로고침 없이 로드합니다.</li>
 <li><b>react-redux</b></li>
 <li><b>@reduxjs/toolkit(React Redux ToolKit)</b></li>
</ul>

<hr />

<h2>백엔드: 라이브러리</h2>
<ul>
 <li><b>express</b></li>
 <li><b>jsonwebtoken:</b> JWT를 사용하기 위해 사용됩니다.</li>
 <li><b>crypto-js: </b> 데이터를 암호화하는 기능이 있는 라이브러리입니다. (DB에 비밀번호를 저장하는 등의 작업에서 사용됨)</li>
 <li><b>dotenv: </b> .env 파일에 변수를 대입하는 것 처럼 환경변수를 작성할 수 있습니다.</li>
 <li><b>mysql2: </b> 데이터베이스와 연동하기 위해 사용합니다.</li>
 <li><b>nodemon: </b> src 폴더 안에 있는 .ts 폴더의 내용이 변경되면 자동으로 서버를 재시작합니다.</li>
 <li><b>ts-node: </b> .ts 파일을 일반적인 node 명령 처럼 실행되게 합니다.</li>
</ul>

<hr />

<h2>프론트엔드: 구조</h2>
<ul>
 <li><b>global.js: </b>리엑트에서 전역적으로 필요한 값을 설정하여 사용합니다. (기본적으로 BACKEND 값이 http://localhost:1234 로 설정되어 있습니다.)</li>
 <li><b>store: </b> 기본적인 Redux store 파일이 있습니다.</li>
 <li>기본적으로 localhost:3000의 기본 페이지는 App 컴포넌트로 설정되어 있습니다.</li>
 <li>기본적으로 index.tsx에서 react-router-dom을 사용하기 위해 BrowserRouter을 사용하고 있습니다. 상황에 맞게 HashRouter로 변경해주세요.</li>
 <li>위 사항을 제외하고, 다른 파일들의 변경사항은 없습니다.</li>
</ul>

<hr />

<h2>백엔드: 구조</h2>
<ul>
 <li><b>server.ts: </b>express 서버의 시작과 db.ts의 getConnection 메소드를 호출하여 데이터베이스를 연결합니다.(db.ts에 있는 connection 값을 초기화합니다.)</li>
 <li>db-test로 GET 요청(localhost:3000/db-test 접속)하면 현재 연결된 데이터베이스의 test 테이블의 데이터를 json 형식으로 출력합니다. DB 연결이 제대로 되었는 지 테스트할 때 사용됩니다.</li>
 <li>.env 파일에 express 서버 포트(SERVER_PORT), 데이터베이스 주소(DB_HOST), 데이터베이스 포트(DB_PORT), 데이터베이스 유저 이름(DB_USER), 데이터베이스 비밀번호(DB_PW), 연결할 데이터베이스 이름(DB_NAME), 최대 데이터베이스 연결 수(DB_LIMIT)이 있습니다. 알맞게 수정하여 사용해주세요.</li>
</ul>
