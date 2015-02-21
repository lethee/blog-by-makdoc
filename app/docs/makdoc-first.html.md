#### MakDoc 소개

[MakDoc](https://github.com/pismute/gulp-makdoc)은 팀동료 [@pismute](https://github.com/pismute)가 만들고 있는 [Gulp](http://gulpjs.com) 기반 정적 사이트 생성기입니다.
[GitHub 페이지](https://pages.github.com)랑 굉장히 잘 어울리구요.
[Jekyll](http://jekyllrb.com)이나 [Docpad](https://docpad.org)랑 비슷하다고 볼 수 있으며 최대한 간결하고 빠르게 작동하도록 하는 것이 목표라지요.
사실은 팀블로그 사이트를 [Docpad](https://docpad.org)를 써서 관리중이었는데 너무 느리고 방대해져서 다른 생성툴을 찾다가 결국 만들게 되었다고...

#### MakDoc 블로그 생성

적당히 새로 디렉토리를 생성하고 <code>npm init</code>, <code>npm install</code> 명령으로 기본적인 의존파일을 설치할 수 있습니다.
마지막 명령은 꽤 오래 걸립니다.

    $ mkdir blog
    $ cd blog
    $ git init
    $ npm init
    $ npm install --save git://github.com/pismute/gulp-makdoc.git

이제 <code>gulpfile.js</code> 파일을 만들고 MakDoc의 Task를 불러들입니다.
아직 <code>makdoc</code> 변수는 사용하지 않지만 <code>require</code>로 읽어오면 자동으로 MakDoc 블로그 생성을 위한 Gulp Task를 등록합니다.

    var makdoc = require('gulp-makdoc');

이제 첫 번째 index 페이지를 만들어줍니다. 아직은 사이트 템플릿 기능을 쓰지 않고 그냥 빈 페이지 하나를 만들어봅니다. <code>app/root/index.html.hbs</code> 경로로 파일을 하나 생성합니다.

	<!DOCTYPE html>
    <html>
    <body>
    <h1>Hello</h1>
    <p>First MakDoc Page</p>
    </body>
    </html>

프로젝트 루트 디렉토리에서 <code>gulp server</code> 또는 <code>gulp watch</code>를 실행하여 사이트를 띄워봅니다.
이 때 dist 디렉토리가 새로 생성되는데 MakDoc 생성기가 생성한 정적 사이트 파일이 위치하는 디렉토리입니다. .gitignore에 추가해둡니다.
<code>gulp watch</code>는 <code>app</code> 디렉토리 안의 파일이 변경되면 자동으로 새로 사이트를 생성하고 브라우저에 띄워둔 로컬호스트 사이트도 새로운 내용이 나타나도록 합니다.

#### 이후의 작업

다음 포스트에서는 사이트 템플릿을 활용해보고 bower로 클라이언트 라이브러리를 추가해보겠습니다.