const options = {
    title: "..",
    icon: "./assets/src/icon.png",
    frame:true,
    position: "center",
};

nw.Window.open('./views/index.html', options, function(win) {});
