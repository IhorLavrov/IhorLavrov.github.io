

document.addEventListener("DOMContentLoaded", function(event) { 
document.getElementById('tab1').onclick = function() {
	document.getElementById('feature1Paragraph').innerHTML="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est odio deleniti deserunt, ipsum saepe tempora molestiae architecto ab, ipsa possimus iusto. Eos minus animi, magni assumenda esse officia. Id, nemo?";
   document.getElementById('tab2').style.background="#333333";
   document.getElementById('tab3').style.background="#333333";
   document.getElementById('tab1').style.background="#ff8b38";
}

document.getElementById('tab2').onclick = function() {
	document.getElementById('feature1Paragraph').innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur faucibus tellus vitae rhoncus. Nunc sed purus eu enim ultrices lobortis. Duis feugiat sollicitudin fringilla.";
   document.getElementById('tab1').style.background="#333333";
   document.getElementById('tab3').style.background="#333333";
   document.getElementById('tab2').style.background="#ff8b38";
}
document.getElementById('tab3').onclick = function() {
	document.getElementById('feature1Paragraph').innerHTML="Nunc porttitor metus vel orci tincidunt, sit amet commodo ante faucibus. Nulla vel augue sodales, pretium dolor eget, gravida quam. Pellentesque sit amet eros eu magna placerat consectetur.";
   document.getElementById('tab1').style.background="#333333";
   document.getElementById('tab2').style.background="#333333";
   document.getElementById('tab3').style.background="#ff8b38";
}
var mdate = new Date();
document.getElementById('year').innerHTML=mdate.getFullYear();
});