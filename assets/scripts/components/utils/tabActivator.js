const q = e => document.querySelector(e),
	qq = e => document.querySelectorAll(e);

const tabActivator = (obj, item, className) => {
	qq(obj).forEach((i) => i.classList.remove(className));
	q(item).classList.add(className);
};

export default tabActivator;