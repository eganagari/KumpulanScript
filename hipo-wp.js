        var step = 10;
        var thousandSeparator = ',';
        var value = 3377669132;
        function increment(element) {
            var max = step + 5;
            var min = step - 5;
            value = value + Math.floor(Math.random() * (max - min + 1) + min);
            element.text(formatNumber(value, thousandSeparator));
        }
        function formatNumber(value, separator) {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
        }
        $(document).ready(function () {
            counter = $('#downloads-served');
            setInterval(function () { increment(counter); }, 1000);
        });
