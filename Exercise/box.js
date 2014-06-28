/**
 * Created by Amit Thakkar on 18/6/14.
 */
"use strict";

(function Box() {
    var selectedColor = "",
        numbers = {},
        selectors = {
            colorSelector: "div.exciseBox input:radio",
            resetSelector: "div.exciseBox input.reset",
            numberSelector: "div.exciseBox ul li.number"
        },
        eventHandlers = {
            selectColor: function () {
                selectedColor = this.value;
            },
            resetBox: function () {
                numbers = {};
                jQuery(selectors.numberSelector).css({background: "#ccc"});
                jQuery(selectors.colorSelector + ":checked").prop('checked', false);
            },
            colorNumber: function () {
                var number = this.innerHTML;
                if (!selectedColor) {
                    alert("Please select a color before clicking on boxes.");
                    return;
                }
                if (!numbers[number]) {
                    numbers[number] = {};
                }
                if (numbers[number].style) {
                    alert("Already applied " + numbers[number].style.background + " color.");
                    return;
                }
                numbers[number].style = {background: selectedColor};
                jQuery(this).css(numbers[number].style);
            },
            bind: function () {
                jQuery(selectors.colorSelector).click(eventHandlers.selectColor);
                jQuery(selectors.numberSelector).click(eventHandlers.colorNumber);
                jQuery(selectors.resetSelector).click(eventHandlers.resetBox);
            },
            init: new function () {
                jQuery(document).ready(function () {
                    eventHandlers.constructor();
                });
            },
            constructor: function () {
                eventHandlers.bind();
            }
        };
})();