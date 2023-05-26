const year = new Date().getFullYear()
const calendar = []

let day = 1
let date = new Date(year, 0, 1)

while (date.getFullYear() === year) {
	const month = date.getUTCMonth()
	if (!calendar[month]) calendar[month] = []

	const row = Math.floor((date.getUTCDate() - 1) / 5)
	if (!calendar[month][row]) calendar[month][row] = []

	calendar[month][row].push({
		ofYear: day,
		ofMonth: date.getUTCDate(),
	})

	day++
	date = new Date(date.getTime() + 24 * 60 * 60 * 1000)
}

const container = document.querySelector(".container")
container.append(
	...calendar.map((month, m) => {
		const monthContainer = document.createElement("div")
		monthContainer.className = "month"

		const titleRow = document.createElement("tr")
		titleRow.className = "title"
		const titleCell = document.createElement("td")
		titleCell.colSpan = 5
		titleCell.innerText = new Date(year, m, 2).toLocaleString("default", {
			month: "long",
		})
		titleRow.append(titleCell)

		const rows = month.map((row) => {
			const rowContainer = document.createElement("tr")
			rowContainer.className = "row"

			rowContainer.append(
				...row.map((day) => {
					const ofWeek = new Date(year, m, day.ofMonth).getUTCDay()

					const cell = document.createElement("td")
					cell.className = `cell${ofWeek > 4 ? " weekend" : ""}`
					cell.innerText = day.ofYear
					return cell
				})
			)

			return rowContainer
		})

		monthContainer.append(titleRow, ...rows)
		return monthContainer
	})
)
