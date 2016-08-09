//*! DOMHelpers.js (c) jiseung.roh

/**
 * prependChild(parent_node, insert_node)
 * 부모노드의 첫번째 자식노드로 삽입한다.
 * -----------------------------------------------------------------------
 * @작성자		지승
 * @버전		0.0.1
 * @param		{ELEMENT_NODE}		target_node	목표노드
 * @param		{ELEMENT_NODE}		insert_node		삽입노드
 * @return		{undefined}
*/
function prependChild(parent_node, insert_node) {
	parent_node.insertBefore(insert_node, parent_node.firstChild);
}

/**
 * insertAfter(insert_node, target_node)
 * 목표노드 뒤에 노드를 삽입한다.
 * -----------------------------------------------------------------------
 * @작성자		지승
 * @버전		0.0.1
 * @param		{ELEMENT_NODE}		insert_node 	삽입노드
 * @param		{ELEMENT_NODE}		target_node	목노드
 * @return		{undefined}
*/
function insertAfter(insert_node, target_node) {
	var next_node = target_node.nextSibling;
	var parent_node = target_node.parentNode
	if (next_node) {
		parent_node.insertBefore(insert_node, next_node);
	} else {
		parent_node.appendChild(insert_node);
	}
}

/**
 * queryAll(selector, context)
 * context내의 해당 selector를 다 찾는다.
 * -----------------------------------------------------------------------
 * @작성자		지승
 * @버전		0.0.1
 * @param		{String Object}			selector 	선택자
 * @param		{ELEMENT_NODE}		context 	작동 컨텍스
 * @return		{nodeList}
*/
function queryAll(selector, context) {
	// selector는 반드시 문자여야 한다. 사용자가 올바른 데이터를 전달했는지에 대한 자체적인 검증이 필요하다.
	if (typeof selector !== 'string') {
		// 해당 조건이 참이 되면, 함수 실행을 멈추고 오류를 발생한다.
		throw new Error('전달인자는 문자열만 가능합니다.');
	}
	// context 인자 값을 사용자가 전달하였는가?
	// 사용자가 context 값을 전달하지 않았을 경우에는 undefined이다.
	// if (typeof context === 'undefined')
	if (!context) { context = document; }

	return context.querySelectorAll(selector);
}

function query(selector, context, index) {
	// index 기본 값 설정
	// index값이 전달되지 않으면 undefined 상태인 것
	if (!index) { index = 0; }
	return queryAll(selector, context)[index];
}

function $q(all, selector, context, index) {
	selector = selector || '*';
	if (all) { return queryAll(selector, context); }
	else { return query(selector, context, index); }
}

// return 값을 한 번만 사용하고 싶을 때
// 우리가 선언한 함수는 전역(window)에 선언된 함수이다.
// 전역에 선언된 함수는 전역객체인 window의 메소드이기 때문에, Object의 key값을 통해 해당 메소드를 호출 가능하다!
function $qee(all, selector, context) {
	var method;
	if (all) { method = 'query'; }
	else { method = 'queryAll'; }
	return window[method](selector, context);
}

function $qe(all, selector, context) {
	if (all) {
		if ( typeof selector !== 'string') { throw new Error('전달인자 값이 문자열이 아닙니다.'); }
		if (!context) { context = document; }
		return context.querySelectorAll(selector); 
	} else { return context.querySelectorAll(selector).item(0)}
}

