sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/library",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Sorter",
    "com/travel/analytics/travelanalyticsenterprise/model/formatter",
    "com/travel/analytics/travelanalyticsenterprise/service/TravelService"
], (Controller, mobileLibrary, Filter, FilterOperator, Sorter, formatter, TravelService) => {
    "use strict";

    const URLHelper = mobileLibrary.URLHelper;

    return Controller.extend("com.travel.analytics.travelanalyticsenterprise.controller.Main", {

        formatter: formatter,

        onInit() {
            this._bSortDescending = false;

            // Local preview mock dashboard data
            this._loadDashboardData();
            // Live RAP read test
            this._readTravelData();
        },

        onAfterRendering() {
            this._configureCharts();
        },

        _loadDashboardData() {
            const oDashboardModel = this.getOwnerComponent().getModel("dashboard");
            const oDashboardData = TravelService.getDashboardData();

            oDashboardModel.setData(oDashboardData);
        },

        onSearchRecentTravels(oEvent) {
            const sQuery = oEvent.getParameter("newValue");
            const oTable = this.byId("recentTravelsTable");
            const oBinding = oTable.getBinding("items");

            if (!sQuery) {
                oBinding.filter([]);
                return;
            }

            const aFilters = [
                new Filter("travel_id", FilterOperator.Contains, sQuery),
                new Filter("agency_id", FilterOperator.Contains, sQuery),
                new Filter("customer_id", FilterOperator.Contains, sQuery)
            ];

            oBinding.filter([
                new Filter({
                    filters: aFilters,
                    and: false
                })
            ]);
        },

        onSortTravelId() {
            const oTable = this.byId("recentTravelsTable");
            const oBinding = oTable.getBinding("items");

            this._bSortDescending = !this._bSortDescending;

            oBinding.sort([
                new Sorter("travel_id", this._bSortDescending)
            ]);
        },

        _readTravelData() {
            const oModel = this.getOwnerComponent().getModel("travelService");

            console.log("========== RAP OData Model ==========");
            console.log(oModel);

            const oListBinding = oModel.bindList("/Travel");

            oListBinding.requestContexts(0, 20)
                .then((aContexts) => {
                    const aTravels = aContexts.map((oContext) => oContext.getObject());

                    console.log("========== Travel Data from RAP ==========");
                    console.log(aTravels);
                })
                .catch((oError) => {
                    console.error("Error while reading Travel data", oError);
                });
        },

        _configureCharts() {
            const oTravelTrendChart = this.byId("travelTrendChart");
            const oRevenueChart = this.byId("revenueByCurrencyChart");
            const oAgencyChart = this.byId("agencyWiseChart");

            if (oTravelTrendChart) {
                oTravelTrendChart.setVizProperties({
                    title: { visible: false },
                    plotArea: {
                        dataLabel: { visible: true },
                        colorPalette: ["#8EC5F5"],
                        dataShape: { seriesType: "smooth" }
                    },
                    legend: { visible: true }
                });
            }

            if (oRevenueChart) {
                oRevenueChart.setVizProperties({
                    title: { visible: false },
                    plotArea: {
                        dataLabel: { visible: true }
                    },
                    legend: {
                        visible: true,
                        position: "right"
                    }
                });
            }

            if (oAgencyChart) {
                oAgencyChart.setVizProperties({
                    title: { visible: false },
                    plotArea: {
                        dataLabel: { visible: true }
                    },
                    legend: { visible: false }
                });
            }
        },

        onOpenTravelManagement() {
            URLHelper.redirect(
                "https://a396c05d-a792-494b-a9f2-5b3f674def78.abap-web.ap21.hana.ondemand.com/sap/bc/ui5_ui5/sap/ztravel_ui_app/index.html",
                true
            );
        }

    });
});