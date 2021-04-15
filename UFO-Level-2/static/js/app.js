showData(data);

function showData(data) {
    d3.select('tbody').html('');
    data.forEach(obj => {
        var row = d3.select('tbody').append('tr');
        Object.values(obj).forEach(val=>row.append('td').text(val));
    });

    [...new Set(data.map(obj=>obj.datetime))].forEach(date=>d3.select('#datetime').append('option').text(date))
};

d3.select('button').on('click',handleClick);

function handleClick() {
    var selection = d3.select('input').node().value;
    console.log(selection);

    var filteredData = data.filter(obj => obj.datetime == selection);
    showData(filteredData);
};