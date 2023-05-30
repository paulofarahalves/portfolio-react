export default function handleClick(e, works, setFilteredWorks) {
	switch (e) {
		case 1:
			document.getElementById('filter-1').classList.add('active');
			document.getElementById('filter-2').classList.remove('active');
			document.getElementById('filter-3').classList.remove('active');
			setFilteredWorks(
				works.filter(
					(work) =>
						work.type === 0 ||
						work.type === 1 ||
						work.type === 2 ||
						work.type === 3 ||
						work.type === 4
				)
			);
			break;
		case 2:
			document.getElementById('filter-2').classList.add('active');
			document.getElementById('filter-1').classList.remove('active');
			document.getElementById('filter-3').classList.remove('active');
			setFilteredWorks(
				works.filter(
					(work) =>
						work.type === 0 || work.type === 1 || work.type === 4
				)
			);
			break;
		case 3:
			document.getElementById('filter-3').classList.add('active');
			document.getElementById('filter-1').classList.remove('active');
			document.getElementById('filter-2').classList.remove('active');
			setFilteredWorks(
				works.filter(
					(work) =>
						work.type === 2 || work.type === 3 || work.type === 4
				)
			);
			break;
		default:
			break;
	}
}
