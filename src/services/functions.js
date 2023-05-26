export function getPlayer(id) {
	let data = fetch(`https://www.balldontlie.io/api/v1/players/${id}`).then(
		(response) => response.json()
	);
	return data;
}

export function savePlayer(player) {
	localStorage.setItem("player", JSON.stringify(player));
}

export function handleState(player) {
	this.setState(() => ({
		firstName: player.first_name,
		lastName: player.last_name,
		position: player.position,
		height: `${player.height_feet}'${player.height_inches}`,
	}));
}
