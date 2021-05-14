var HashSet=function(){
    this.hashset=[];
}
HashSet.prototype.add=function(key){
    if(!this.hashset.includes(key)){
        this.hashset.push(key);
    }
}
HashSet.prototype.contains=function(key){
    return this.hashset.includes(key)

}
HashSet.prototype.remove=function(key){
    const index=this.hashset.indexOf(key);
    if(index>=0){
        this.hashset.splice(index,1)
    }
}
var myHashSet=new HashSet();
myHashSet.add(1);
myHashSet.add(2);
myHashSet.add(2);
myHashSet.add(3);
console.log(myHashSet)
var isThere=myHashSet.contains(8);
console.log(isThere)
myHashSet.remove(3);
console.log(myHashSet)