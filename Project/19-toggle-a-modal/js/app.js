var btn_modal = query('.btn-modal');
// 현재 상태가 중요하다고 하셨다.
var btn_modal_status = false;
var body = document.body;

// 모달을 만드는 함수를 만들어보자
function makeModal() {
	if (!btn_modal_status) {
		var modal = document.createElement('div');
		var modal_title = document.createElement('h2');
		var modal_desc = document.createElement('p');
		modal_title.textContent = 'Brand New Modal';
		modal_desc.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto possimus deserunt dignissimos qui laboriosam, expedita officia illum. Eos, enim assumenda dolores sequi voluptates saepe quo in odio eaque vitae, ipsa.';
		modal.setAttribute('class', 'modal-container');
		modal_title.setAttribute('class', 'modal-title');
		modal_desc.setAttribute('class', 'modal-desc');
		modal.appendChild(modal_title);
		modal.appendChild(modal_desc);
		body.appendChild(modal);
	} else {
		var modal = query('.modal-container');
		modal.parentNode.removeChild(modal);
	}
	btn_modal_status = !btn_modal_status;
}

btn_modal.onclick = makeModal;
