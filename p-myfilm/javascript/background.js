var times = 1000;
$(document).ready(function () {
    var bg4 = $("#bg4"),
        bg3 = $("#bg3"),
        bg2 = $("#bg2"),
        bg1 = $("#bg1");
    bg4.fadeTo(times, 1,
        function () {
            shadow3(bg3, bg2, bg1);
        }
    );


});
function shadow3(par3, par2, par1) {
    if (par3.css("opacity") == "1") {
        par3.fadeTo(times, 0, function () {
            shadow3(par3, par2, par1);
        });
    } else {
        par3.fadeTo(times, 1, function () {
            shadow2(par3, par2, par1);
        });
    }
};

function shadow2(par3, par2, par1) {
    if (par2.css("opacity") == "1") {
        par2.fadeTo(times, 0, function () {
            shadow3(par3, par2, par1);
        });
    } else {
        par2.fadeTo(times, 1, function () {
            shadow1(par3, par2, par1);
        });
    }
};
function shadow1(par3, par2, par1) {
    if (par1.css("opacity") == "1") {
        par1.fadeTo(times, 0, function () {
            shadow2(par3, par2, par1);
        });
    } else {
        par1.fadeTo(times, 1, function () {
            shadow1(par3, par2, par1);
        });
    }
};
