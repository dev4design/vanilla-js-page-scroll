/**
 * @fileOverview
 * @author Hyunhwa Jeong
 * @version 1.0
 */

/**
 * @description
 * Pure JavaScript one page scroll with basic features.
 * https://github.com/dev4design/vanilla-js-page-scroll
 *
 * @class
 * @param {object} options - 사용자정의 셋팅
 * @param {string} options.elem - 스크롤 영역의 HTML id.
 * @param {number} options.animateDuration - 스크롤 애니메이션의 길이
 * @param {string} options.animateTiming - 애니메이션 시작과 끝의 움직임 처리
 * @param {number} options.secNumber - 섹션 번호 출력
 */
function pageScroll(options) {

	'use strict';

	var element = document.getElementById(options.elem || 'js-page-scroll'),
		sections = element.querySelectorAll('.js-page-scroll-section'),

		animateDuration = options.animateDuration || 1000,
		animateTiming = options.animateTiming || 'ease-in-out',
		maxPosition = sections.length - 1,
		currentPosition = 0

	// URL의 해시값을 0으로 초기화 (#0)
	location.hash = 1;

	if (options.secNumber) {
		var secNumContainer = document.createElement('div');
		secNumContainer.classList.add('js-page-scroll-secNum');

		document.body.appendChild(secNumContainer);
	}

	// 마우스 휠 이벤트 시작
	onWheel();

	function onWheel() {
		// 휠 이벤트
		document.addEventListener('wheel', doWheel, false);
	}

	// location.hash 값이 변하면 발생하는 이벤트
	// URL 창에 www.abc.com/#4 라고 입력하면 해당 섹션으로 바로 이동시키기 위한 이벤트
	window.addEventListener('hashchange', hashChange, false);

	/**
	 * 휠 이벤트 핸들
	 *
	 * @param {object } e - 스크롤 값을 리턴하는 휠 이벤트 오브젝트
	 */
	function doWheel(e) {
		if (e.deltaY > 0 ) {
			currentPosition ++;
			changeCurrentPosition(currentPosition);
		} else if (e.deltaY < 0 ) {
			currentPosition --;
			changeCurrentPosition(currentPosition);
		}

		// 휠 이벤트로 발생하는 값(휠이 돌아갈 때 마다 찍히는 값)에 시간차 적용
		// 한번의 휠 동작으로 너무 많은 섹션이 한번에 스크롤 되는 문제를 회피
		removeEvents();

		console.log('wheel event currentPosition : ' + currentPosition);
	}

	/**
	 * 해시 변경 이벤트 핸들
	 * 현재 섹션의 포지션 번호와 해시 번호를 동일하게 맞춤
	 */
	function hashChange() {
		if (location) {
			// 각 섹션의 인덱스를 숫자로 받기 위해 현재 URL의 해시값에서 # 문자를 삭제
			var anchor = location.hash.replace('#', '').split('/')[0] - 1;

			if (anchor < 0) {
				changeCurrentPosition(0);
			} else if (anchor > maxPosition) {
				changeCurrentPosition(maxPosition);
			} else {
				currentPosition = anchor;

				// 섹션 넘버링
				if (options.secNumber) {
					secNumContainer.innerHTML = '<span class="secNumCurrent">' + (currentPosition + 1) + '</span>'
						+ '<span class="secNumDivide"> / </span>'
						+ '<span class="secNumTotal">' + sections.length + '</span>';
				}

				// 최소범위와 최대범위 이내에서 이벤트가 발생하면 스크롤 애니메이션 실행
				animateScroll();

				console.log('Hash changed currentPosition : ' + currentPosition);
				console.log('Hash changed anchor : ' + anchor);
			}
		}
	}

	// 휠 이벤트가 0.6초마다 한 번씩만 발생하도록 타이머로 설정
	function removeEvents() {
		document.removeEventListener('wheel', doWheel, false);

		setTimeout(function(){
			onWheel();
		}, 600);
	}

	/**
	 * 이벤트의 값을 섹션 포지션과 해시에 각각 대입
	 */
	function changeCurrentPosition(position) {
		currentPosition = position;
		location.hash = position + 1;
	}

	function animateScroll() {
		var distance = currentPosition * 100;

		// 섹션의 이동
		element.style.transform = 'translateY(-' + distance + '%)';

		// 섹션 에니메이션의 처리
		element.style.transition = 'all ' + animateDuration + 'ms ' + animateTiming;
	}
}