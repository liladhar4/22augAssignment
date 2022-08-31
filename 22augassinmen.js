(function(){

    function oppSignNumber(no1,no2){
        let check=(no1^no2);
        if(check<0){
            document.write("no1 = "+no1+" and no2 = "+no2+" ==> "+ true);
            document.write("<br>");
        }else{
            document.write("no1 = "+no1+" and no2 = "+no2+" ==> "+false);
            document.write("<br>");
        }
    }
    
  
    oppSignNumber(-10,20);
    oppSignNumber(10,-20);
    oppSignNumber(10,20);//false
    oppSignNumber(-10,-20);

})();