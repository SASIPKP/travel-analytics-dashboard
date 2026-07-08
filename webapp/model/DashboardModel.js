sap.ui.define([
    "sap/ui/model/json/JSONModel"
], function (JSONModel) {
    "use strict";

    return {

        createDashboardModel: function () {

            return new JSONModel({

                totalTravels: 0,

                totalRevenue: 0,

                totalCustomers: 0,

                totalAgencies: 0,

                recentTravels: [],

                travelTrend: [],

                revenueByCurrency: [],

                agencyStatistics: []

            });

        }

    };

});