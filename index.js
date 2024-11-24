
 var template = '<div class="ncontainer">'+
        
          
        
         '<div style=" display:flex;align-items: center; justify-content: center; border: 1px solid grey; border-radius:50%;width:60px;height:60px;">'+

            '<div style="color:black;font-size:25px; display:flex;align-items: center;justify-content: center;background-color: grey;  border-radius:50%;width:52px;height:52px;">S</div>'+
            
         '</div>'+
        '<div style="padding-left: 6px;padding-right: 6px; width:60%; display:inline-flex; flex-direction: column;">'+
          '<div style=" font-size: 24px; ">xxxx </div>'+
              '<div>yyyy kkkkkkk ggggggggggg huuhhhyyt </div>'+
           '</div>'+
        
          '<div style="display:flex; font-size:15px; align-items: center; justify-content:center;">+ 0.005 </div>'+
        
        
        
     '</div>';
   
  
   /*var template = '<div class="ncontainer">'+
  //'<div class="e-list-wrapper e-list-multi-line e-list-avatar">'+
  // '<span    class="e-avatar e-avatar-large e-avatar-circle">S</span>'+
      '<span class="height:40px;border:1px solid black;border-radius:50%;background:white;">SJ</span>'+
      
   // '<img class="e-avatar e-avatar-circle" src=${image} style="background:#BCBCBC" />' +
    '<span class="e-list-item-header">${Name}</span>' +
    '<div style="color: black ">${contact}</div>' +
    
'</div>';
  */

   class person
{
    
  Name;contact;id;image;category;
    
} 
   //person[] bb= new person[];
 // pers.push({ 
 function pes(Name, contact,id,  image,  category)
{
  this.Name=Name;
  this.contact=contact;
  this.id=id;
  this.image=image;
  this.category=category;
  
}

  var pers=[];
   //pers.push('Nancy','(206) 555-985774',      ;
  for(var i=0;i<20;i++) {pers.push(new pes('Nancy','(206) 555-985774','1', 'https://ej2.syncfusion.com/demos/src/grid/images/1.png', 'Experience'));}

  var s= 'https://ej2.syncfusion.com/demos/src/grid/images/3.png';
    //Define an array of JSON data
    var dataSource = [
        { Name: 'Nancy', contact:'(206) 555-985774', id: '1', image: 'https://ej2.syncfusion.com/demos/src/grid/images/1.png',  category: 'Experience'},
        { Name: 'Janet', contact: '(206) 555-3412', id: '2', image: 'https://ej2.syncfusion.com/demos/src/grid/images/3.png', category: 'Fresher' },
        { Name: 'Margaret', contact:'(206) 555-8122', id:'4', image: 'https://ej2.syncfusion.com/demos/src/grid/images/4.png', category: 'Experience' },
        { Name: 'Andrew ', contact:'(206) 555-9482', id: '5', image: 'https://ej2.syncfusion.com/demos/src/grid/images/2.png', category: 'Experience'},
        { Name: 'Steven', contact:'(71) 555-4848', id: '6', image: 'https://ej2.syncfusion.com/demos/src/grid/images/5.png', category: 'Fresher' },
        { Name: 'Michael', contact:'(71) 555-7773', id: '7', image: 'https://ej2.syncfusion.com/demos/src/grid/images/6.png', category: 'Experience' },
        { Name: 'Robert', contact:'(71) 555-5598', id: '8', image: 'https://ej2.syncfusion.com/demos/src/grid/images/7.png', category: 'Fresher' },
        { Name: 'Laura', contact:'(206) 555-1189', id: '9', image: 'https://ej2.syncfusion.com/demos/src/grid/images/8.png', category: 'Experience' },
    ];

    // Initialize ListView component
    var listObj = new ej.lists.ListView({

        //Set defined data to dataSource property
        dataSource: pers,

        width: 350,

        //Map the appropriate columns to fields property
        fields: { text: 'Name', groupBy: 'category' },
        cssClass: 'e-list-template',
        select: onSelect,
        //Set customized template
        template: template,
        //groupTemplate: '<div><span class="category">${items[0].category}</span> <span class="count"> ${items.length} Item(s)</span></div> '
     groupTemplate: '<div ><span >${items[0].category}</span> <span > ${items.length} Item(s)</span></div> '

        
        
    });
  function onSelect(){
      var d=listObj.getSelectedItems();
  //person a=person(d);
    //if(d===listObj.dataSource[0]) alert("fff");
    alert(d.data.image);
}
    //Render initialized ListView component
    listObj.appendTo('#List');