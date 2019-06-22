var url = '@System.Configuration.ConfigurationManager.AppSettings["EndPointURL"].ToString()';
var HomeScreenData = {};

//var connection = window.$.hubConnection(url + '/signalr');

//var myHub = connection.createHubProxy('DashboardHub');

window.$(document).ready(function () {
    if (sessionStorage.getItem("token") === undefined) {
        window.$location.href = "/Users/SignIn";
    }
    window.$hideLoader();
    window.$(".right_col").css("background-color", "#fff");

    window.$("#imageGG").show();
    window.$("#imageYG").hide();
    window.$("#imageRG").hide();
    window.$("#imageGB").hide();
    window.$("#imageYB").hide();
    window.$("#imageRB").hide();
    window.$("#imageBB").hide();
});

window.$myHub.on('GetHomeScreenUpdate', function (response) {
    HomeScreenData = response.ResponseData;
    UpdateHomeScreen();
});

window.$connection.start().done(function () {
    window.$myHub.invoke('GetHomeScreenUpdate');
}).fail(function () { console.log('Could not connect'); });

function UpdateHomeScreen() {
    debugger;

    if (window.$(HomeScreenData).length > 0) {
        debugger;
        if (HomeScreenData.Breakdown > 0) {
            if (HomeScreenData.EOL > 0) {
                window.$("#imageGG").hide();
                window.$("#imageYG").hide();
                window.$("#imageRG").show();
                window.$("#imageBG").hide();
                window.$("#imageGB").hide();
                window.$("#imageYB").hide();
                window.$("#imageRB").hide();
                window.$("#imageBB").hide();
            } else {
                window.$("#imageGG").hide();
                window.$("#imageYG").hide();
                window.$("#imageRG").hide();
                window.$("#imageBG").hide();
                window.$("#imageGB").hide();
                window.$("#imageYB").hide();
                window.$("#imageRB").show();
                window.$("#imageBB").hide();
            }
        } else if (HomeScreenData.Preventive > 0 || HomeScreenData.ToolChangeover > 0 || HomeScreenData.ToolReplacement > 0) {
            if (HomeScreenData.EOL > 0) {
                window.$("#imageGG").hide();
                window.$("#imageYG").show();
                window.$("#imageRG").hide();
                window.$("#imageBG").hide();
                window.$("#imageGB").hide();
                window.$("#imageYB").hide();
                window.$("#imageRB").hide();
                window.$("#imageBB").hide();
            } else {
                window.$("#imageGG").hide();
                window.$("#imageYG").hide();
                window.$("#imageRG").hide();
                window.$("#imageBG").hide();
                window.$("#imageGB").hide();
                window.$("#imageYB").show();
                window.$("#imageRB").hide();
                window.$("#imageBB").hide();
            }
        } else {
            if (HomeScreenData.Mold > 0) {
                if (HomeScreenData.EOL > 0) {
                    window.$("#imageGG").show();
                    window.$("#imageYG").hide();
                    window.$("#imageRG").hide();
                    window.$("#imageBG").hide();
                    window.$("#imageGB").hide();
                    window.$("#imageYB").hide();
                    window.$("#imageRB").hide();
                    window.$("#imageBB").hide();
                } else {
                    window.$("#imageGG").hide();
                    window.$("#imageYG").hide();
                    window.$("#imageRG").hide();
                    window.$("#imageBG").hide();
                    window.$("#imageGB").show();
                    window.$("#imageYB").hide();
                    window.$("#imageRB").hide();
                    window.$("#imageBB").hide();
                }
            } else {
                if (HomeScreenData.EOL > 0) {
                    window.$("#imageGG").hide();
                    window.$("#imageYG").hide();
                    window.$("#imageRG").hide();
                    window.$("#imageBG").show();
                    window.$("#imageGB").hide();
                    window.$("#imageYB").hide();
                    window.$("#imageRB").hide();
                    window.$("#imageBB").hide();
                } else {
                    window.$("#imageGG").hide();
                    window.$("#imageYG").hide();
                    window.$("#imageRG").hide();
                    window.$("#imageBG").hide();
                    window.$("#imageGB").hide();
                    window.$("#imageYB").hide();
                    window.$("#imageRB").hide();
                    window.$("#imageBB").show();
                }
            }
        }
    }
}
