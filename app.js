const initialPrice = document.querySelector("#initialprice");
const quantity = document.querySelector("#quantity");
const currentPrice = document.querySelector("#currentPrice");
const btnCheck = document.querySelector("#checkBtn");
const output = document.querySelector("#output");

function calculateProfitLoss(initial, qty, current) {
  if (initial > current) {
    var loss = (initial - current) * qty;
    var lossPercentage = (loss / initial) * 100;
    showOutput(
      `Hey the Loss is ${loss}₹ and the Percentage is ${lossPercentage}%`,
      0
    );
  } else if (current > initial) {
    var profit = (current - initial) * qty;
    var profitPercentage = (profit / initial) * 100;
    showOutput(
      `Hey The Profit is ${profit}₹ and Profit percentage is ${profitPercentage.toFixed(
        2
      )}%`,
      1
    );
  } else {
    showOutput(`No pain No gain and No Gain No Pain`, 2);
  }
}

function showOutput(str, stutus) {
  switch (stutus) {
    case 0:
      output.style.color = "red";
      break;
    case 1:
      output.style.color = "green";
      break;
    default:
      output.style.color = "black";
      break;
  }
  output.innerText = str;
}

function CheckProfitLoss() {
  var InitialData = Number(initialPrice.value);
  var qty1 = Number(quantity.value);
  var CurrentData = Number(currentPrice.value);

  //   alert(InitialData + "\n" + qty1 + "\n" + CurrentData);
  if (InitialData != "" && qty1 != "" && CurrentData != "") {
    calculateProfitLoss(InitialData, qty1, CurrentData);
  } else {
    alert("Please Enter All Fields");
  }
}

btnCheck.addEventListener("click", CheckProfitLoss);
