			let menus = ["Steak", "Chorizo", "Queso", "Doble queso"];

			let precios = [9.5, 10.5, 8.1, 7.5];

			let precio = 0.0;
			let nombre = "";

			nombre = window.prompt(
				"¿Que hamburguesa deseas?\nElige la tuya:\n\n Steak / Chorizo / Queso / Doble queso"
			);

			for (let i = 0; i < menus.length; i++) {
				if (menus[i] == nombre) {
					precio = precios[i];
					i = menus.length;
				}
			} // termina for

			alert(`el precio de tu hamburguesa es ${precio}`);
