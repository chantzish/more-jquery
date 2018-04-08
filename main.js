setTimeout(()=>alert($('p:contains("Brisket")').data().sauce, 1));
$('ul.sauce li').click(function() {
    console.log(this);
    this.remove();
});

// add and remove

$('#add-student').click(function(){
    $('ul.students').append("<li>"+$("#my-input").val()+"</li>")
});
$('ul.students').on("click","li",function(){
    this.remove();
})
