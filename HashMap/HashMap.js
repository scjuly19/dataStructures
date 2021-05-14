var HashMap=function(){
    this.hashmap=[];
}

HashMap.prototype.put=function(key,value){
    let found=false;
    this.hashmap.forEach((item)=>{
        if(key in item){
            item[key]=value;
            found=true;
            return;
        }
    });
    var newObj={};
    newObj[key]=value;
    if(!found) this.hashmap.push(newObj);

}
HashMap.prototype.get=function(key){
    let val=-1;
    this.hashmap.forEach((item)=>{
        if(key in item){
            val=item[key];
        }
    });
    return val;

}
HashMap.prototype.remove=function(key){
    this.hashmap.forEach((item,index)=>{
        if(key in item){
            this.hashmap.splice(index,1)
        }
    })

}

 
 var obj = new HashMap()
 obj.put("apple",2);
 obj.put("orange",4);
 obj.put("pear",3);
 console.log(obj);
 var param_2 = obj.get("orange");
 console.log(param_2);
 obj.remove("pear");
 console.log(obj)
 