# 학습용 바닐라 자바스크립트 Full Paging 스크롤

[![Build Status](http://www.beautifulcss.com/img/git/git-build.svg)](#) [![Coverage Status](http://www.beautifulcss.com/img/git/git-coverage.svg)](#) ![Dependencies](http://www.beautifulcss.com/img/git/git-dep.svg)

_**Pure JavaScript**_ full paging scroll with basic features.

## Demo
 [**Click Here**](http://beautifulcss.com/demo/vanilla-js-page-scroll/ "Full Paging Scroll Demo")


## Installation
1. HTML 파일에 직접 삽입: 
    ```html
    <script src="vanilla-js-page-scroll.js"></script>
    ```

## Usage
1. HTML 마크업:
    ```html
    <main id="js-page-scroll" class="js-page-scroll-container">
        <section class="js-page-scroll-section">
            <p>Section 1</p>
        </section>
        <section class="js-page-scroll-section">
            <p>Section 2</p>
        </section>
    </main>
    ```

3. 함수 호출:
    ```html
    <script type="text/javascript">
        var myPageScroll = new pageScroll({
            elem: "js-page-scroll",
            animateDuration: 0.7,
            animateTiming: "ease",
            secNumber: true
        });
    </script>
    ```

4. 초기화:
    ```js
   var myPageScroll = new pageScroll({
       elem: "js-page-scroll",   // 스크롤 영역의 HTML id
       animateDuration: 0.7,     // 스크롤 애니메이션의 길이
       animateTiming: "ease",    // 애니메이션 시작과 끝의 움직임 처리
       secNumber: true           // 섹션 번호 출력
   }); 
    ```


## Options

#### Settings
Option | Type | Default | Description
------ | ---- | ------- | -----------
elem | string | carousel | 스크롤 영역의 HTML _id_
animateDuration | int  | 0.7 | 스크롤 애니메이션의 길이 (milliseconds)
animateTiming | string | ease | 애니메이션 시작과 끝의 움직임 처리
secNumber | boolean | true | 현재 위치한 섹션 번호 출력


## Browser support and dependencies
Browser | Support | Dependencies
------ | -------- | -----------
Chrome | yes | -
Firefox | yes | -
Safari | yes | -
Opera | yes | -
IE | yes | -


## License

Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.

See [Unlicense](http://unlicense.org) for full details.


## Related

* [beautifulcss.com](http://www.beautifulcss.com)
