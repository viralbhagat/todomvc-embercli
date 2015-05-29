/**
 * Created by viral.bhagat on 5/28/15.
 */
import DS from "ember-data";

var Todo =  DS.Model.extend({
  title: DS.attr('string'),
  isComplete: DS.attr('boolean')
});


Todo.reopen({

});

export default Todo;
