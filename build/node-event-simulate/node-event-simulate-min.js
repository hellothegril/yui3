YUI.add("node-event-simulate",function(a){a.Node.prototype.simulate=function(c,b){a.Event.simulate(a.Node.getDOMNode(this),c,b);};a.Node.prototype.simulateGesture=function(d,c,b){a.Event.simulateGesture(this,d,c,b);};},"@VERSION@",{requires:["node-base","event-simulate","gesture-simulate"]});