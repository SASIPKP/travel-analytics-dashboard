sap.ui.define([
    "sap/ui/core/UIComponent",
    "com/travel/analytics/travelanalyticsenterprise/model/models",
    "com/travel/analytics/travelanalyticsenterprise/model/DashboardModel"
], (UIComponent, models, DashboardModel) => {
    "use strict";

    return UIComponent.extend("com.travel.analytics.travelanalyticsenterprise.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            UIComponent.prototype.init.apply(this, arguments);

            // Device Model
            this.setModel(models.createDeviceModel(), "device");

            // Dashboard JSON Model
            this.setModel(
                DashboardModel.createDashboardModel(),
                "dashboard"
            );

            // Enable Routing
            this.getRouter().initialize();
        }
    });
});