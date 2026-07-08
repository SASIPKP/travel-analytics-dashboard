sap.ui.define([], function () {
    "use strict";

    // Real data snapshot exported from the RAP OData V4 service
    // Service: Z_UI_TRAVEL_O4 -> Entity Set: Travel
    var aTravelRecords = [
            { travel_id: "3", agency_id: "70046", customer_id: "93", begin_date: "2026-04-04", end_date: "2027-01-31", booking_fee: 80, total_price: 4164, currency_code: "USD" },
            { travel_id: "4", agency_id: "70042", customer_id: "665", begin_date: "2026-04-04", end_date: "2027-01-31", booking_fee: 40, total_price: 1869.3, currency_code: "USD" },
            { travel_id: "5", agency_id: "70007", customer_id: "225", begin_date: "2026-04-04", end_date: "2026-04-04", booking_fee: 20, total_price: 991.5, currency_code: "USD" },
            { travel_id: "6", agency_id: "70049", customer_id: "72", begin_date: "2026-04-04", end_date: "2027-01-31", booking_fee: 120, total_price: 5584.5, currency_code: "USD" },
            { travel_id: "7", agency_id: "70046", customer_id: "138", begin_date: "2026-04-04", end_date: "2027-01-31", booking_fee: 120, total_price: 5685, currency_code: "USD" },
            { travel_id: "8", agency_id: "70012", customer_id: "705", begin_date: "2026-04-04", end_date: "2026-04-06", booking_fee: 60, total_price: 2775, currency_code: "USD" },
            { travel_id: "9", agency_id: "70032", customer_id: "115", begin_date: "2026-04-04", end_date: "2027-01-31", booking_fee: 120, total_price: 5789.8, currency_code: "USD" },
            { travel_id: "10", agency_id: "70016", customer_id: "697", begin_date: "2026-04-04", end_date: "2026-04-06", booking_fee: 20, total_price: 957.8, currency_code: "USD" },
            { travel_id: "11", agency_id: "70005", customer_id: "582", begin_date: "2026-04-04", end_date: "2026-04-04", booking_fee: 20, total_price: 959, currency_code: "USD" },
            { travel_id: "12", agency_id: "70028", customer_id: "583", begin_date: "2026-04-04", end_date: "2027-01-29", booking_fee: 90, total_price: 4302, currency_code: "USD" },
            { travel_id: "13", agency_id: "70014", customer_id: "4", begin_date: "2026-04-04", end_date: "2026-04-06", booking_fee: 40, total_price: 2011.5, currency_code: "USD" },
            { travel_id: "14", agency_id: "70010", customer_id: "667", begin_date: "2026-04-04", end_date: "2026-04-04", booking_fee: 10, total_price: 543.8, currency_code: "USD" },
            { travel_id: "15", agency_id: "70028", customer_id: "466", begin_date: "2026-04-04", end_date: "2027-01-29", booking_fee: 60, total_price: 3000, currency_code: "USD" },
            { travel_id: "16", agency_id: "70050", customer_id: "640", begin_date: "2026-04-04", end_date: "2027-01-31", booking_fee: 120, total_price: 5935.5, currency_code: "USD" },
            { travel_id: "17", agency_id: "70048", customer_id: "478", begin_date: "2026-04-04", end_date: "2027-01-31", booking_fee: 120, total_price: 6085, currency_code: "USD" },
            { travel_id: "18", agency_id: "70050", customer_id: "264", begin_date: "2026-04-04", end_date: "2027-01-31", booking_fee: 80, total_price: 4039.3, currency_code: "USD" },
            { travel_id: "19", agency_id: "70049", customer_id: "155", begin_date: "2026-04-04", end_date: "2027-01-31", booking_fee: 40, total_price: 2041.5, currency_code: "USD" },
            { travel_id: "20", agency_id: "70049", customer_id: "680", begin_date: "2026-04-04", end_date: "2027-01-31", booking_fee: 120, total_price: 6270, currency_code: "USD" },
            { travel_id: "21", agency_id: "70008", customer_id: "552", begin_date: "2026-04-04", end_date: "2026-04-04", booking_fee: 10, total_price: 585.5, currency_code: "USD" },
            { travel_id: "22", agency_id: "70037", customer_id: "540", begin_date: "2026-04-04", end_date: "2027-01-31", booking_fee: 40, total_price: 2254.5, currency_code: "USD" },
            { travel_id: "23", agency_id: "70049", customer_id: "542", begin_date: "2026-04-04", end_date: "2027-01-31", booking_fee: 40, total_price: 2364.3, currency_code: "USD" },
            { travel_id: "24", agency_id: "70050", customer_id: "346", begin_date: "2026-04-04", end_date: "2027-01-31", booking_fee: 120, total_price: 6605, currency_code: "USD" },
            { travel_id: "25", agency_id: "70048", customer_id: "478", begin_date: "2026-04-04", end_date: "2027-01-31", booking_fee: 40, total_price: 2211.5, currency_code: "USD" },
            { travel_id: "26", agency_id: "70006", customer_id: "220", begin_date: "2026-04-04", end_date: "2026-04-04", booking_fee: 20, total_price: 1245.3, currency_code: "USD" },
            { travel_id: "27", agency_id: "70025", customer_id: "515", begin_date: "2026-04-04", end_date: "2027-01-29", booking_fee: 60, total_price: 3542.5, currency_code: "USD" },
            { travel_id: "28", agency_id: "70040", customer_id: "24", begin_date: "2026-04-04", end_date: "2027-01-31", booking_fee: 80, total_price: 4521, currency_code: "USD" },
            { travel_id: "29", agency_id: "70041", customer_id: "202", begin_date: "2026-04-04", end_date: "2027-01-31", booking_fee: 40, total_price: 2418, currency_code: "USD" },
            { travel_id: "30", agency_id: "70015", customer_id: "636", begin_date: "2026-04-04", end_date: "2026-04-06", booking_fee: 20, total_price: 1284, currency_code: "USD" },
            { travel_id: "31", agency_id: "70008", customer_id: "71", begin_date: "2026-04-04", end_date: "2026-04-04", booking_fee: 20, total_price: 1347.5, currency_code: "USD" },
            { travel_id: "32", agency_id: "70001", customer_id: "599", begin_date: "2026-04-04", end_date: "2026-04-04", booking_fee: 20, total_price: 1405.5, currency_code: "USD" },
            { travel_id: "33", agency_id: "70022", customer_id: "506", begin_date: "2026-04-04", end_date: "2027-01-29", booking_fee: 90, total_price: 5621, currency_code: "USD" },
            { travel_id: "34", agency_id: "70006", customer_id: "358", begin_date: "2026-04-04", end_date: "2026-04-04", booking_fee: 20, total_price: 1465, currency_code: "USD" },
            { travel_id: "35", agency_id: "70046", customer_id: "26", begin_date: "2026-04-04", end_date: "2027-01-31", booking_fee: 80, total_price: 5023.5, currency_code: "USD" },
            { travel_id: "36", agency_id: "70032", customer_id: "320", begin_date: "2026-04-04", end_date: "2027-01-31", booking_fee: 80, total_price: 5170.3, currency_code: "USD" },
            { travel_id: "37", agency_id: "70040", customer_id: "154", begin_date: "2026-04-04", end_date: "2027-01-31", booking_fee: 40, total_price: 2653, currency_code: "USD" },
            { travel_id: "38", agency_id: "70044", customer_id: "558", begin_date: "2026-04-04", end_date: "2027-01-31", booking_fee: 120, total_price: 8006.5, currency_code: "USD" },
            { travel_id: "39", agency_id: "70048", customer_id: "27", begin_date: "2027-01-29", end_date: "2027-01-31", booking_fee: 60, total_price: 3599, currency_code: "USD" },
            { travel_id: "40", agency_id: "70026", customer_id: "357", begin_date: "2027-01-29", end_date: "2027-01-31", booking_fee: 20, total_price: 1324, currency_code: "USD" },
            { travel_id: "41", agency_id: "70033", customer_id: "334", begin_date: "2027-01-29", end_date: "2027-01-31", booking_fee: 60, total_price: 3799.8, currency_code: "USD" },
            { travel_id: "42", agency_id: "70040", customer_id: "579", begin_date: "2027-01-29", end_date: "2027-01-31", booking_fee: 60, total_price: 3852.3, currency_code: "USD" },
            { travel_id: "43", agency_id: "70002", customer_id: "201", begin_date: "2027-01-29", end_date: "2027-01-29", booking_fee: 20, total_price: 1322, currency_code: "USD" },
            { travel_id: "44", agency_id: "70019", customer_id: "514", begin_date: "2027-01-29", end_date: "2027-01-31", booking_fee: 40, total_price: 2825, currency_code: "USD" },
            { travel_id: "45", agency_id: "70043", customer_id: "3", begin_date: "2027-01-29", end_date: "2027-01-31", booking_fee: 20, total_price: 1454, currency_code: "USD" },
            { travel_id: "46", agency_id: "70011", customer_id: "518", begin_date: "2027-01-29", end_date: "2027-01-31", booking_fee: 20, total_price: 1417.5, currency_code: "USD" },
            { travel_id: "47", agency_id: "70047", customer_id: "119", begin_date: "2027-01-29", end_date: "2027-01-31", booking_fee: 20, total_price: 1397, currency_code: "USD" },
            { travel_id: "48", agency_id: "70035", customer_id: "469", begin_date: "2027-01-29", end_date: "2027-01-31", booking_fee: 60, total_price: 4208.5, currency_code: "USD" },
            { travel_id: "49", agency_id: "70034", customer_id: "564", begin_date: "2027-01-29", end_date: "2027-01-31", booking_fee: 40, total_price: 2945, currency_code: "USD" },
            { travel_id: "50", agency_id: "70020", customer_id: "248", begin_date: "2027-01-29", end_date: "2027-01-31", booking_fee: 20, total_price: 1532, currency_code: "USD" },
            { travel_id: "51", agency_id: "70038", customer_id: "639", begin_date: "2027-01-29", end_date: "2027-01-31", booking_fee: 20, total_price: 1560.5, currency_code: "USD" },
            { travel_id: "52", agency_id: "70038", customer_id: "427", begin_date: "2027-01-29", end_date: "2027-01-31", booking_fee: 40, total_price: 3144, currency_code: "USD" },
            { travel_id: "53", agency_id: "70038", customer_id: "163", begin_date: "2027-01-29", end_date: "2027-01-31", booking_fee: 20, total_price: 1583.5, currency_code: "USD" },
            { travel_id: "54", agency_id: "70024", customer_id: "13", begin_date: "2027-01-29", end_date: "2027-01-31", booking_fee: 60, total_price: 5059, currency_code: "USD" },
            { travel_id: "55", agency_id: "70020", customer_id: "186", begin_date: "2027-01-29", end_date: "2027-01-31", booking_fee: 40, total_price: 3275.5, currency_code: "USD" },
            { travel_id: "56", agency_id: "70022", customer_id: "369", begin_date: "2027-01-29", end_date: "2027-01-31", booking_fee: 40, total_price: 3436.5, currency_code: "USD" },
            { travel_id: "57", agency_id: "70033", customer_id: "509", begin_date: "2027-01-31", end_date: "2027-01-31", booking_fee: 30, total_price: 2696.5, currency_code: "USD" },
            { travel_id: "58", agency_id: "70009", customer_id: "423", begin_date: "2027-01-29", end_date: "2027-01-29", booking_fee: 10, total_price: 875.5, currency_code: "USD" },
            { travel_id: "59", agency_id: "70009", customer_id: "101", begin_date: "2027-01-31", end_date: "2027-01-31", booking_fee: 20, total_price: 1912.8, currency_code: "USD" },
            { travel_id: "60", agency_id: "70016", customer_id: "555", begin_date: "2027-01-31", end_date: "2027-01-31", booking_fee: 20, total_price: 1860.5, currency_code: "USD" },
            { travel_id: "61", agency_id: "70036", customer_id: "168", begin_date: "2027-01-31", end_date: "2027-01-31", booking_fee: 20, total_price: 1914.5, currency_code: "USD" },
            { travel_id: "62", agency_id: "70040", customer_id: "590", begin_date: "2027-01-31", end_date: "2027-01-31", booking_fee: 20, total_price: 1945, currency_code: "USD" },
            { travel_id: "63", agency_id: "70002", customer_id: "243", begin_date: "2027-01-31", end_date: "2027-01-31", booking_fee: 20, total_price: 1986.5, currency_code: "USD" },
            { travel_id: "64", agency_id: "70016", customer_id: "593", begin_date: "2027-01-31", end_date: "2027-01-31", booking_fee: 30, total_price: 3031.5, currency_code: "USD" },
            { travel_id: "65", agency_id: "70014", customer_id: "10", begin_date: "2027-01-29", end_date: "2027-01-31", booking_fee: 20, total_price: 1984.5, currency_code: "USD" },
            { travel_id: "66", agency_id: "70044", customer_id: "677", begin_date: "2027-01-31", end_date: "2027-01-31", booking_fee: 20, total_price: 2171.3, currency_code: "USD" },
            { travel_id: "67", agency_id: "70003", customer_id: "661", begin_date: "2026-04-06", end_date: "2026-04-06", booking_fee: 10, total_price: 729.3, currency_code: "USD" },
            { travel_id: "68", agency_id: "70008", customer_id: "183", begin_date: "2026-04-06", end_date: "2026-04-06", booking_fee: 20, total_price: 1449.5, currency_code: "USD" },
            { travel_id: "69", agency_id: "70005", customer_id: "345", begin_date: "2026-04-06", end_date: "2026-04-06", booking_fee: 30, total_price: 2230.5, currency_code: "USD" },
            { travel_id: "70", agency_id: "70050", customer_id: "719", begin_date: "2026-04-06", end_date: "2026-04-06", booking_fee: 20, total_price: 1543, currency_code: "USD" },
            { travel_id: "71", agency_id: "70042", customer_id: "50", begin_date: "2026-04-06", end_date: "2026-04-06", booking_fee: 10, total_price: 803.5, currency_code: "USD" },
            { travel_id: "72", agency_id: "70042", customer_id: "605", begin_date: "2026-04-06", end_date: "2026-04-06", booking_fee: 20, total_price: 1637.5, currency_code: "USD" },
            { travel_id: "73", agency_id: "70035", customer_id: "427", begin_date: "2026-04-06", end_date: "2026-04-06", booking_fee: 20, total_price: 1677.5, currency_code: "USD" },
            { travel_id: "74", agency_id: "70007", customer_id: "209", begin_date: "2026-04-06", end_date: "2026-04-06", booking_fee: 30, total_price: 2603.5, currency_code: "USD" },
            { travel_id: "75", agency_id: "70016", customer_id: "495", begin_date: "2026-04-06", end_date: "2026-04-06", booking_fee: 30, total_price: 2665.5, currency_code: "USD" },
            { travel_id: "76", agency_id: "70039", customer_id: "549", begin_date: "2026-04-06", end_date: "2026-04-06", booking_fee: 10, total_price: 921, currency_code: "USD" },
            { travel_id: "77", agency_id: "70048", customer_id: "409", begin_date: "2026-04-06", end_date: "2026-04-06", booking_fee: 20, total_price: 1867.5, currency_code: "USD" },
            { travel_id: "78", agency_id: "70025", customer_id: "152", begin_date: "2026-04-06", end_date: "2026-04-06", booking_fee: 30, total_price: 2854.5, currency_code: "USD" },
            { travel_id: "79", agency_id: "70002", customer_id: "257", begin_date: "2026-04-06", end_date: "2026-04-06", booking_fee: 30, total_price: 3116.5, currency_code: "USD" },
            { travel_id: "80", agency_id: "70034", customer_id: "387", begin_date: "2026-04-06", end_date: "2026-04-06", booking_fee: 20, total_price: 2060.5, currency_code: "USD" },
            { travel_id: "81", agency_id: "70022", customer_id: "260", begin_date: "2026-04-06", end_date: "2026-04-06", booking_fee: 10, total_price: 1060, currency_code: "USD" },
            { travel_id: "82", agency_id: "70007", customer_id: "113", begin_date: "2026-04-06", end_date: "2026-04-06", booking_fee: 30, total_price: 3273, currency_code: "USD" },
            { travel_id: "83", agency_id: "70020", customer_id: "415", begin_date: "2026-04-06", end_date: "2026-04-06", booking_fee: 30, total_price: 3338, currency_code: "USD" },
            { travel_id: "84", agency_id: "70011", customer_id: "246", begin_date: "2026-04-06", end_date: "2026-04-06", booking_fee: 30, total_price: 3413, currency_code: "USD" },
            { travel_id: "85", agency_id: "70039", customer_id: "283", begin_date: "2026-04-06", end_date: "2026-04-06", booking_fee: 30, total_price: 3792.5, currency_code: "USD" },
            { travel_id: "86", agency_id: "70003", customer_id: "227", begin_date: "2026-04-06", end_date: "2026-04-06", booking_fee: 20, total_price: 2488.5, currency_code: "USD" },
            { travel_id: "87", agency_id: "70040", customer_id: "629", begin_date: "2026-04-06", end_date: "2026-04-06", booking_fee: 30, total_price: 3936.5, currency_code: "USD" },
            { travel_id: "88", agency_id: "70002", customer_id: "439", begin_date: "2026-04-06", end_date: "2026-04-06", booking_fee: 20, total_price: 2669.5, currency_code: "USD" },
            { travel_id: "89", agency_id: "70010", customer_id: "192", begin_date: "2026-04-06", end_date: "2026-04-06", booking_fee: 10, total_price: 1346, currency_code: "USD" },
            { travel_id: "91", agency_id: "70025", customer_id: "477", begin_date: "2026-04-06", end_date: "2026-04-06", booking_fee: 20, total_price: 2805, currency_code: "USD" },
            { travel_id: "92", agency_id: "70023", customer_id: "502", begin_date: "2026-04-06", end_date: "2026-04-06", booking_fee: 20, total_price: 2855.5, currency_code: "USD" },
            { travel_id: "93", agency_id: "70023", customer_id: "545", begin_date: "2026-04-06", end_date: "2026-04-06", booking_fee: 10, total_price: 1506, currency_code: "USD" },
            { travel_id: "94", agency_id: "70025", customer_id: "720", begin_date: "2026-04-06", end_date: "2026-04-06", booking_fee: 20, total_price: 3030.5, currency_code: "USD" },
            { travel_id: "95", agency_id: "70033", customer_id: "525", begin_date: "2026-04-06", end_date: "2026-04-06", booking_fee: 20, total_price: 3018.5, currency_code: "USD" },
            { travel_id: "96", agency_id: "70040", customer_id: "167", begin_date: "2026-04-06", end_date: "2026-04-06", booking_fee: 20, total_price: 3210.8, currency_code: "USD" },
            { travel_id: "97", agency_id: "70036", customer_id: "665", begin_date: "2026-03-31", end_date: "2026-04-03", booking_fee: 80, total_price: 21691, currency_code: "EUR" },
            { travel_id: "98", agency_id: "70047", customer_id: "111", begin_date: "2026-04-06", end_date: "2026-04-06", booking_fee: 10, total_price: 1604, currency_code: "USD" },
            { travel_id: "99", agency_id: "70038", customer_id: "367", begin_date: "2026-03-31", end_date: "2026-04-03", booking_fee: 40, total_price: 10906.5, currency_code: "EUR" },
            { travel_id: "100", agency_id: "70041", customer_id: "602", begin_date: "2026-03-31", end_date: "2027-01-27", booking_fee: 50, total_price: 14299, currency_code: "EUR" },
            { travel_id: "101", agency_id: "70014", customer_id: "337", begin_date: "2026-03-31", end_date: "2026-04-01", booking_fee: 20, total_price: 4042.5, currency_code: "EUR" },
            { travel_id: "102", agency_id: "70036", customer_id: "392", begin_date: "2026-03-31", end_date: "2026-04-03", booking_fee: 120, total_price: 32488.3, currency_code: "EUR" },
            { travel_id: "103", agency_id: "70034", customer_id: "326", begin_date: "2026-03-31", end_date: "2026-04-03", booking_fee: 80, total_price: 21747, currency_code: "EUR" }
        ];

    var MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function round2(nValue) {
        return Math.round(nValue * 100) / 100;
    }

    function formatK(nValue) {
        return (nValue / 1000).toFixed(1) + "K";
    }

    return {

        getDashboardData: function () {

            var aRecords = aTravelRecords;

            // ---- Unique customers & agencies ----
            var oCustomerSet = {};
            var oAgencySet = {};
            var nTotalRevenue = 0;

            aRecords.forEach(function (oRecord) {
                oCustomerSet[oRecord.customer_id] = true;
                oAgencySet[oRecord.agency_id] = true;
                nTotalRevenue += oRecord.total_price;
            });

            // ---- Travel trend by month-year (based on begin_date) ----
            var oTrendMap = {};

            aRecords.forEach(function (oRecord) {
                var oDate = new Date(oRecord.begin_date);
                var iYear = oDate.getFullYear();
                var iMonth = oDate.getMonth();
                var sMonthYear = MONTH_NAMES[iMonth] + " " + iYear;
                var sSortKey = iYear + "-" + String(iMonth + 1).padStart(2, "0");

                if (!oTrendMap[sSortKey]) {
                    oTrendMap[sSortKey] = {
                        month: sMonthYear,
                        travels: 0
                    };
                }

                oTrendMap[sSortKey].travels += 1;
            });

            var aTravelTrend = Object.keys(oTrendMap)
                .sort()
                .map(function (sKey) {
                    return oTrendMap[sKey];
                });

            // ---- Revenue grouped by currency ----
            // Label includes the formatted amount (e.g. "USD (258.3K)") so the
            // legend is informative on its own, not just the donut percentage.
            var oRevenueMap = {};
            aRecords.forEach(function (oRecord) {
                oRevenueMap[oRecord.currency_code] = (oRevenueMap[oRecord.currency_code] || 0) + oRecord.total_price;
            });
            var aRevenueByCurrency = Object.keys(oRevenueMap).map(function (sCurrency) {
                var nRevenue = round2(oRevenueMap[sCurrency]);
                return {
                    currency: sCurrency + " (" + formatK(nRevenue) + ")",
                    revenue: nRevenue
                };
            });

            // ---- Travel count grouped by agency (top 5) ----
            var oAgencyMap = {};
            aRecords.forEach(function (oRecord) {
                oAgencyMap[oRecord.agency_id] = (oAgencyMap[oRecord.agency_id] || 0) + 1;
            });
            var aAgencyStatistics = Object.keys(oAgencyMap)
                .map(function (sAgency) {
                    return { agency: sAgency, count: oAgencyMap[sAgency] };
                })
                .sort(function (a, b) { return b.count - a.count; })
                .slice(0, 5);

            // ---- Recent travels (last 10, sorted by travel_id descending) ----
            var aRecentTravels = aRecords
                .slice()
                .sort(function (a, b) { return Number(b.travel_id) - Number(a.travel_id); })
                .slice(0, 10);

            // ---- Data snapshot range (for dynamic KPI subtitle display) ----
            var aSortedDates = aRecords
                .map(function (oRecord) { return new Date(oRecord.begin_date); })
                .sort(function (a, b) { return a - b; });
            var oEarliestDate = aSortedDates[0];
            var oLatestDate = aSortedDates[aSortedDates.length - 1];
            var sDataRangeLabel = MONTH_NAMES[oEarliestDate.getMonth()] + " " + oEarliestDate.getFullYear() +
                " \u2013 " + MONTH_NAMES[oLatestDate.getMonth()] + " " + oLatestDate.getFullYear();

            return {
                totalTravels: aRecords.length,
                dataRangeLabel: sDataRangeLabel,
                totalRevenue: round2(nTotalRevenue),
                totalCustomers: Object.keys(oCustomerSet).length,
                totalAgencies: Object.keys(oAgencySet).length,

                recentTravels: aRecentTravels,
                travelTrend: aTravelTrend,
                revenueByCurrency: aRevenueByCurrency,
                agencyStatistics: aAgencyStatistics
            };

        }

    };

});