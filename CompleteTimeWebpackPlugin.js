var CompleteTimeWebpackPlugin = function(){

}

CompleteTimeWebpackPlugin.prototype.apply = function(compile){
    compile.plugin("done",function(){
        var date = new Date();
        var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        console.log("compile complete on " + hours + ":" + minutes + ":" + seconds);
    })
}

module.exports = CompleteTimeWebpackPlugin;