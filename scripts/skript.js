 <script>
        document.addEventListener("DOMContentLoaded", function () {
            //navbar
            const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
            const navbarToggler = document.querySelector('.navbar-toggler');
            const collapseNavbar = function () {
                // Ověříme, zda je navigační menu v rozbalovacím režimu
                if (window.innerWidth < 992) {
                    const bsCollapse = new bootstrap.Collapse(navbarToggler.nextElementSibling, {
                        toggle: false
                    });
                    bsCollapse.hide();
                }
            };
			
			navLinks.forEach(function (link) {
                link.addEventListener('click', collapseNavbar);
            });
			
	        //Vysvětlení:		
            // nextElementSibling je JavaScriptová vlastnost, která vrátí element, který je bezprostředně 
            // následující sourozencem daného elementu v DOM stromu. V tomto případě hledáte element, 
            // který je hned za navbarToggler v HTML struktuře. V kontextu Bootstrap navigace, tento element 
            // obvykle reprezentuje rozbalovací část navigační lišty. Pak vytváříte instanci 
            // Bootstrap Collapse komponenty pro tento element, kterou pak můžete programově skrýt.

            //modal
            document.querySelectorAll('.modal').forEach(function (modal) {
                modal.addEventListener('hide.bs.modal', function () {
                    const memory = this.innerHTML;
                    this.innerHTML = memory;
                });
            });
			
            //Vysvětlení:
            // document.querySelectorAll('.modal').forEach(function(modal) {...}): 
            // Vybere všechny elementy s třídou modal a pro každý z nich provede funkci uvedenou v těle forEach.
            // modal.addEventListener('hide.bs.modal', function() {...}): Přidává posluchače událostí pro každé modální okno, 
            // který reaguje na událost hide.bs.modal - událost specifickou pro Bootstrap, která nastane, když se modální okno začíná skrývat.
            // var memory = this.innerHTML; this.innerHTML = memory;: Ukládá aktuální HTML obsah modálního okna do proměnné memory a 
            // poté ho okamžitě nastavuje zpět. Toto zachovává aktuální stav modálního okna, i když je skryto.

    </script>