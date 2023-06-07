/**Breadth-first-Search
 * Used to find the shortest path in a graph
 * O(V+E)
 */
/**Find the person who lives closest to X provided a graph with all 
the friends of X mapped to him and all theirs friend's mapped to them
*/
function breadthFirst(graph) {
  const searched = [];
  let queue = [...graph["X"]];
  while (queue.length > 0) {
    const currentPerson = queue.shift();
    if (!searched.includes(currentPerson)) {
      if (currentPerson.startsWith("A")) return currentPerson;
      searched.push(currentPerson);
      if (graph[currentPerson].length > 0) {
        queue = [...queue, ...graph[currentPerson]];
      }
    }
  }
  return false;
}
const graph = {
  X: ["John", "Martha", "Kelly"],
  John: [],
  Kelly: ["Leo", "Petra"],
  Martha: [],
  Leo: ["Omar"],
  Petra: ["Abby"],
  Omar: [],
  Abby: [],
};
console.log(breadthFirst(graph));
