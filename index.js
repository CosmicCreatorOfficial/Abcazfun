document.querySelector('.uvform').addEventListener('submit', (e) => {
	e.preventDefault();

	worker().then(e=>{
		var val = document.querySelector('.uvinput').value;
		if (!val.startsWith('http')) val = 'https://' + val;
	
		location.assign(window.__uv$config.prefix + window.__uv$config.encodeUrl(val));
	});
});

async function worker() {
	var a = await navigator.serviceWorker.register('/sw.js', {scope: '/service'});
	return a;
}