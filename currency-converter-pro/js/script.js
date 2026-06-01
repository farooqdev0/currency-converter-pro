$("#convertBtn").click(async function () {

    let amount = $("#amount").val();
    let from = $("#fromCurrency").val();
    let to = $("#toCurrency").val();

    if (!amount) {
        alert("Enter Amount");
        return;
    }

    try {

        const response = await fetch(
            `https://open.er-api.com/v6/latest/${from}`
        );

        const data = await response.json();

        const rate = data.rates[to];

        const result = (amount * rate).toFixed(2);

        $("#result").text(
            `${amount} ${from} = ${result} ${to}`
        );

    } catch (error) {

        console.error(error);

        alert("API Error");

    }

});