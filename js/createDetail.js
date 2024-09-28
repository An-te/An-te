export default function (summary, detail) {
	const newDiv = document.createElement("div");
	newDiv.className = "detail";
	const newDetail = document.createElement("details");
	const newSummary = document.createElement("summary");
	newSummary.textContent = summary;
	newDetail.textContent = detail;
	newDetail.appendChild(newSummary);
	newDiv.appendChild(newDetail);
	return newDiv;
}