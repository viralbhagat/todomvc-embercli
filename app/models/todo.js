/**
 * Created by viral.bhagat on 5/28/15.
 */
import DS from "ember-data";

var Todo =  DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

Todo.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: 'Learn Ember.js',
      isCompleted: false
    },
    {
      id: 2,
      title: 'Learn Node.js',
      isCompleted: false
    },
    {
      id: 3,
      title: 'Learn socket.io',
      isCompleted: false
    }
  ]
});

export default Todo;
