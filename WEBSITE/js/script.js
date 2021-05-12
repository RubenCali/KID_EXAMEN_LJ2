var $menuItems = $('.nav-link');

$menuItems.click(function() {
	$menuItems.removeClass('active');
	$(this).addClass('active');
})

let clickedCartBTN = document.getElementById("clickedCartBTN");

clickedCartBTN.addEventListener("click", alertMSG);
function alertMSG(){
	alert("Je hebt het hele proces door gelopen van het SNEAKER ABONNEMENT. Dankuwel voor uw tijd. (dit is het einde)");
}