let filter = () => {
    let size = document.getElementById("size").value;
	let color = document.getElementById("color").value;
	let price = document.getElementById("price").value;

	let items = document.getElementsByClassName("item");

		for (let i = 0; i < items.length; i++) {
		let item = items[i];

		if ((size == "" || item.classList.contains(size)) &&
			(color == "" || item.classList.contains(color)) &&
			(price == "" || item.classList.contains(price))) {
			item.style.display = "block";
		} else {
			item.style.display = "none";
		}
	}
};





