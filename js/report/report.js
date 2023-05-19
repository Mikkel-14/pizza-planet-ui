
fetch('http://127.0.0.1:5000/report/')
    .then(response => response.json())
    .then(report => {
        parseMonthName(report);
        let rows = createReportTemplate(report);
        let table = $("#report tbody");
        table.append(rows);
    });


function createReportTemplate(report) {
    let template = $("#report-template")[0].innerHTML;
    return Mustache.render(template, report);
}

function parseMonthName(report) {
    date = new Date();
    month = report["month"];
    date.setMonth(month-1);
    const formatter = new Intl.DateTimeFormat('en', { month: 'long' });
    report["month"] = formatter.format(date)
}