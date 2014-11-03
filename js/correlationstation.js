(function(){

var Graph = function(){};
var Table = function(){};

// Factory
$(document).bind('view:added', function(evt, data){

  console.log(data);

  var index = {
    graph : Graph,
    table : Table
  }


  var method = index[data.type];

  if (method){
    var obj = new method(data.container);

    obj.init();
  }

});

function start(){

  // Default view
  var json = '{"options":{"type":"container","permanent":true},"dimensions":[1241,653],"children":[{"options":{"id":0,"type":"graph","permanent":true},"dimensions":[1241,369]},{"options":{"id":1,"type":"table","size":279,"position":"bottom"},"dimensions":[1241,279]}]}';

  // Load WindowManager
  $('#window').windowManager({
    json: json,
    hooks: {
      onAdd : function(data){
        $(document).trigger('view:added', data);
      }
    }
  });
}


Graph.prototype.init = function(){
  console.log(this);
  return this;
};

Graph.prototype.update = function(){

};

Table.prototype.init = function(){
  console.log(this);
  return this;
};

Table.prototype.update = function(){

};

start();

})();
