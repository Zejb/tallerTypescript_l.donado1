import { series } from "./data.js";
const tbody = document.getElementById("series-body");
const averageText = document.getElementById("average-seasons");
const detailContainer = document.getElementById("series-detail");
function renderSeries(seriesList) {
    seriesList.forEach((serie) => {
        const row = document.createElement("tr");
        row.innerHTML =
            "<td>" + serie.id + "</td>" +
                "<td><a href='#' class='series-link'>" + serie.name + "</a></td>" +
                "<td>" + serie.channel + "</td>" +
                "<td>" + serie.seasons + "</td>";
        row.querySelector("a").addEventListener("click", function (event) {
            event.preventDefault();
            showSeriesDetail(serie);
        });
        tbody.appendChild(row);
    });
}
function showSeriesDetail(serie) {
    detailContainer.innerHTML =
        '<div class="card">' +
            '<img class="card-img-top" src="' + serie.image + '" alt="' + serie.name + '">' +
            '<div class="card-body">' +
            '<h5 class="card-title">' + serie.name + '</h5>' +
            '<p class="card-text">' + serie.description + '</p>' +
            '<a href="' + serie.link + '" target="_blank">' + serie.link + '</a>' +
            '</div>' +
            '</div>';
}
function getAverageSeasons(seriesList) {
    let totalSeasons = 0;
    seriesList.forEach((serie) => {
        totalSeasons += serie.seasons;
    });
    return totalSeasons / seriesList.length;
}
function showAverageSeasons(seriesList) {
    const average = getAverageSeasons(seriesList);
    averageText.innerHTML = "Seasons average: " + average.toFixed(0);
}
renderSeries(series);
showAverageSeasons(series);
showSeriesDetail(series[0]);
