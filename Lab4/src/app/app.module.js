"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var top_bar_component_1 = require("./top-bar/top-bar.component");
var product_list_component_1 = require("./product-list/product-list.component");
var product_alerts_component_1 = require("./product-alerts/product-alerts.component");
var product_details_component_1 = require("./product-details/product-details.component");
var cart_component_1 = require("./cart/cart.component");
var http_1 = require("@angular/common/http");
var shipping_component_1 = require("./shipping/shipping.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, core_1.NgModule)({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forRoot([
                    { path: '', component: product_list_component_1.ProductListComponent },
                    { path: 'products/:productId', component: product_details_component_1.ProductDetailsComponent },
                    { path: 'cart', component: cart_component_1.CartComponent },
                    { path: 'shipping', component: shipping_component_1.ShippingComponent },
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                top_bar_component_1.TopBarComponent,
                product_list_component_1.ProductListComponent,
                product_alerts_component_1.ProductAlertsComponent,
                product_details_component_1.ProductDetailsComponent,
                cart_component_1.CartComponent,
                shipping_component_1.ShippingComponent
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/ 
