"use strict";
$.ajax({
    type: "GET",
    url: "https://www.feriadosapp.com/api/holidays.json",
    dataType: 'JSON',
    success: function(feriados){
        let tabla = `<table><caption>Feriados de Chile</caption><tbody>`;
            feriados.data.forEach(element=>{
            tabla += `<tr><td>${element.date}</td><td>${element.title}</td><td>${element.extra}</td><td>${element.law}</td></tr>`
        })
        tabla += `</tbody></table>`
        $('body').append(tabla)
    },
    error: function(feriados){
        $('body').append("No ha sido posible traer los datos :(")
    },
    async: true,
});