const year = new Date().getFullYear()
let day = 0

document.querySelector(".calendar").append(
	...[...Array(12)].map((_, month) => {
		const monthContainer = document.createElement("div")
		monthContainer.className = "month"

		const title = document.createElement("h2")
		title.className = "title"
		title.innerText = new Date(year, month, 2).toLocaleString("default", {
			month: "long",
		})

		const grid = document.createElement("div")
		grid.className = "grid"
		grid.append(
			...[...Array(new Date(year, month + 1, 0).getDate())].map(
				(_, ofMonth) => {
					const ofWeek = new Date(year, month, ofMonth + 1).getUTCDay()

					const cell = document.createElement("div")
					cell.className = `day${ofWeek > 4 ? " weekend" : ""}`
					cell.innerText = ++day
					return cell
				}
			)
		)

		monthContainer.append(title, grid)
		return monthContainer
	})
)
