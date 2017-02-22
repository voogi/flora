"use strict";
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var admin_component_1 = require("./admin/admin.component");
var APP_ROUTES = [
    { path: '', component: app_component_1.AppComponent },
    { path: 'admin', component: admin_component_1.AdminComponent }
];
exports.appRouting = router_1.RouterModule.forRoot(APP_ROUTES);
