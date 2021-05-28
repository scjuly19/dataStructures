/**
 Implement the RandomizedSet class:

RandomizedSet() Initializes the RandomizedSet object.
bool insert(int val) Inserts an item val into the set if not present.
Returns true if the item was not present, false otherwise.
bool remove(int val) Removes an item val from the set if present.
Returns true if the item was present, false otherwise.
int getRandom() Returns a random element from the current set of element
(it's guaranteed that at least one element exists when this method is called).
Each element must have the same probability of being returned.
 */
/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.randomSet=new Set();
    
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(!this.randomSet.has(val)){
    this.randomSet.add(val);
        return true;
    }
    return false;
    
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this.randomSet.has(val)){
        this.randomSet.delete(val);
        return true;
    }
    return false;
    
    
    
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let arr=Array.from(this.randomSet);
    if(arr.length>0){
        let randomIndex=Math.floor(Math.random()*arr.length);
        return arr[randomIndex];
    }
    
};


 var obj = new RandomizedSet()
 var param_1 = obj.insert(val)
 var param_2 = obj.remove(val)
 var param_3 = obj.getRandom()
 