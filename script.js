const year = new Date().getFullYear()
const calendar = []

let day = 1
let date = new Date(year, 0, 1)

while (date.getFullYear() === year) {
	const month = date.getUTCMonth()
	if (!calendar[month]) calendar[month] = []

	calendar[month].push(day)

	day++
	date = new Date(date.getTime() + 24 * 60 * 60 * 1000)
}

const container = document.querySelector(".calendar")
container.append(
	...calendar.map((month, m) => {
		const monthContainer = document.createElement("div")
		monthContainer.className = "month"

		const title = document.createElement("h2")
		title.className = "title"
		title.innerText = new Date(year, m, 2).toLocaleString("default", {
			month: "long",
		})

		const grid = document.createElement("div")
		grid.className = "grid"
		grid.append(
			...month.map((ofYear, ofMonth) => {
				const ofWeek = new Date(year, m, ofMonth + 1).getUTCDay()

				const cell = document.createElement("div")
				cell.className = `day${ofWeek > 4 ? " weekend" : ""}`
				cell.innerText = ofYear
				return cell
			})
		)

		monthContainer.append(title, grid)
		return monthContainer
	})
)
