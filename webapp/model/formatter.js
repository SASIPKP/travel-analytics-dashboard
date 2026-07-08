sap.ui.define([], function () {
    "use strict";

    return {

        formatAmount: function (sAmount, sCurrency) {
            if (!sAmount) {
                return "";
            }
            return Number(sAmount).toLocaleString("en-IN") + " " + sCurrency;
        },

        formatRevenueInK: function (nValue) {
            if (nValue === undefined || nValue === null) {
                return "0";
            }
            return (nValue / 1000).toFixed(1);
        }

    };

});