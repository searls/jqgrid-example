(function($){
  $(function(){
    $('<table id="myTable"></table><div id="pager"></div>').appendTo('body');
    
    $('#myTable').jqGrid({
      url:'some.json',
      datatype: "json",
      colNames:['Inv No','Date', 'Client', 'Amount','Tax','Total','Notes'],
      colModel:[
      {name:'id',index:'id', width:60, sorttype:"int"},
      {name:'invdate',index:'invdate', width:90, sorttype:"date"},
      {name:'name',index:'name', width:100},
      {name:'amount',index:'amount', width:80, align:"right",sorttype:"float"},
      {name:'tax',index:'tax', width:80, align:"right",sorttype:"float"},		
      {name:'total',index:'total', width:80,align:"right",sorttype:"float"},		
      {name:'note',index:'note', width:150, sortable:false}		
      ],
      rowNum:20,
      rowList:[10,20,30],
      pager: '#pager',
      sortname: 'id',
      viewrecords: true,
      sortorder: "desc",
      loadonce: true,
      caption: "Load Once Example"
    });

  });
})(jQuery);
