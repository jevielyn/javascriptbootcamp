	const firstnames = ["Mark", "James", "Alison", "Mary"];
	const lastnames = ["Smith", "Roberts", "Brown", "Williams"]
	const prices = [100, 200, 300];
	const paidOptions = ["true", "false"];
	const additionalOptions = ["Cake", "Breakfast", "Tea", "Coffee", "Newspaper"];
	

	const pickRandomItem = (array) => {
	    let randomValue = Math.random()
	    let randomIndex = Math.floor(randomValue * array.length);
	
	    return array[randomIndex];
	}

	let pickDataFunction = (givenName, surName, unitAmount, paymentStatus, addOn) => {
		let firstname = pickRandomItem(givenName);
		let lastname = pickRandomItem(surName);
		let totalprice = pickRandomItem(unitAmount);
		let depositPaid = pickRandomItem(paymentStatus)
		let additionalNeeds = pickRandomItem(addOn);	

		console.log(lastname);
		console.log(firstname);
		console.log(totalprice);
		console.log(depositPaid);
		console.log(additionalNeeds);
	}

	pickDataFunction(firstnames,lastnames,prices,paidOptions,additionalOptions);
	pickDataFunction(firstnames,lastnames,prices,paidOptions,additionalOptions);
	pickDataFunction(firstnames,lastnames,prices,paidOptions,additionalOptions);