function calculateSquareRoot() {
            var number = document.getElementById("number").value;
            var result = document.getElementById("result");

            // 检查输入是否为有效数字
            if (isNaN(number) || number === "") {
                result.textContent = "請輸入有效數字";
            } else {
                var squareRoot = Math.sqrt(parseFloat(number));
                result.textContent = "根號 " + number + " = " + squareRoot.toFixed(2);
            }
        }